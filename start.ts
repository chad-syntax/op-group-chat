import path from 'path';
import { fileURLToPath } from 'url';
import { AgentsmithClient } from '@agentsmith-app/sdk';
import { Agency } from './agentsmith/agentsmith.types';

const apiKey = process.env.AGENTSMITH_API_KEY!;
const projectId = process.env.AGENTSMITH_PROJECT_ID!;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const completionLogsDirectory = path.resolve(__dirname, 'logs');

let i = 0;

const now = Date.now();

const completionLogDirTransformer = ({
  prompt,
  variables,
}: {
  prompt: { name: string; slug: string; uuid: string };
  variables: Record<string, string>;
}) => {
  const dirName = path.join(
    `${now}`,
    `turn-${i}`,
    `${
      prompt.slug === 'one-piece-character-response-decision'
        ? 'decider'
        : `character-${variables.name}`
    }`
  );
  return dirName;
};

const client = new AgentsmithClient<Agency>(apiKey, projectId, {
  logLevel: 'debug',
  completionLogsDirectory,
  completionLogDirTransformer,
});

type ThreadMessage = {
  name: string;
  message: string;
  turn: number;
};

type CharacterResponseDecision = {
  character: string;
  score: number;
  reasons_to_respond: string[];
  reasons_not_to_respond: string[];
};
const thread: ThreadMessage[] = [];

const characters = [
  'Luffy',
  'Nami',
  'Usopp',
  'Zoro',
  'Sanji',
  'Chopper',
  'Robin',
  'Franky',
  'Brook',
  'Jinbe',
];

const deciderPrompt = await client.getPrompt(
  'one-piece-character-response-decision'
);
const prompt = await client.getPrompt('op-character');

const startingScenario =
  'The Straw Hat Pirates are on the sunny on their way to the island of Elbaph. They are talking about the island and how they will get there. Luffy is impatient and wants to get there faster.';

let turnsWithoutResponses = 0;

while (i < 40) {
  // console.log(`TURN ${i}`, `turnsWithoutResponses: ${turnsWithoutResponses}`);
  let characterResponseDecisions: { character: string; score: number }[] = [];
  try {
    const { content } = await deciderPrompt.execute({
      thread,
      turnsWithoutResponses,
      characters,
    });
    let parsedContent: CharacterResponseDecision[] = JSON.parse(
      content ?? '[]'
    );
    characterResponseDecisions = parsedContent.map((d) => ({
      character: d.character,
      score: d.score + Math.round(turnsWithoutResponses * Math.random() * 2),
    }));
  } catch (e) {
    console.error('Error executing deciderPrompt', e);
    characterResponseDecisions = characters.map((c: string) => ({
      character: c,
      score: 0,
    }));
  }

  const charactersThatShouldRespond = characterResponseDecisions
    .filter((c) => c.score >= 5)
    .sort((a, b) => b.score - a.score)
    .map((c) => c.character);

  const characterResponses = await Promise.all(
    charactersThatShouldRespond.map(async (character: string) => {
      try {
        const { tokens } = await prompt.execute(
          {
            thread,
            name: character,
            startingScenario,
          },
          {
            config: {
              stream: true,
            },
          }
        );
        return {
          character,
          tokens,
        };
      } catch (e) {
        console.error(`Error executing prompt for character ${character}:`, e);
        return {
          character,
          content: null,
        };
      }
    })
  );

  if (characterResponses.length === 0) {
    turnsWithoutResponses++;
  } else {
    turnsWithoutResponses = 0;
  }

  const structuredResponses: { character: string; content: string }[] = [];

  for (const r of characterResponses) {
    if (!r.tokens) {
      continue;
    }
    process.stdout.write(`${r.character}: `);
    let characterResponse = '';

    for await (const token of r.tokens) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      characterResponse += token ?? '';
      process.stdout.write(token ?? '');
    }

    process.stdout.write('\n');
    structuredResponses.push({
      character: r.character,
      content: characterResponse,
    });
  }

  thread.push(
    ...structuredResponses.map((r) => ({
      name: r.character,
      message: r.content,
      turn: i,
    }))
  );

  i++;
}
console.log('Starting Scenario:', startingScenario);
console.log(
  'Final Thread:\n',
  thread.map((t) => `[${t.turn}] ${t.name}: ${t.message}`).join('\n')
);
await client.shutdown();
