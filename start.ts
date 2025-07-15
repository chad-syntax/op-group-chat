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
        : 'character'
    }-${variables.name}`
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
};

type CharacterResponseDecision = {
  reasons_to_respond: string[];
  reasons_not_to_respond: string[];
  score: number;
};

const thread: ThreadMessage[] = [];

// const luffy = await client.getPrompt('luffy');
// const nami = await client.getPrompt('nami');
// const usopp = await client.getPrompt('usopp');

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

// let forceConversationNum = 0;
let turnsWithoutResponses = 0;

while (i < 20) {
  console.log(`TURN ${i}`, `turnsWithoutResponses: ${turnsWithoutResponses}`);
  const characterResponseDecisions = await Promise.all(
    characters.map(async (character) => {
      try {
        const { content } = await deciderPrompt.execute({
          thread,
          name: character,
          turnsWithoutResponses,
        });

        let parsedContent: CharacterResponseDecision = {
          reasons_to_respond: [],
          reasons_not_to_respond: [],
          score: 0,
        };

        try {
          parsedContent = JSON.parse(content ?? '{}');
        } catch (e) {
          console.error('Error parsing content', e);
          console.log('failed to parse content', content);
        }

        return {
          character,
          score: parsedContent?.score ?? 0,
        };
      } catch (e) {
        console.error('Error executing deciderPrompt', e);
        return {
          character,
          score: 0,
        };
      }
    })
  );

  // console.log('characterResponseDecisions', characterResponseDecisions);
  console.log(
    'decisions: ',
    characterResponseDecisions
      .map((d) => `(${d.character}: ${d.score})`)
      .join(' ')
  );

  const charactersThatShouldRespond = characterResponseDecisions
    .filter((c) => c.score >= 5)
    .map((c) => c.character);

  const characterResponses = await Promise.all(
    charactersThatShouldRespond.map(async (character) => {
      const { content } = await prompt.execute({
        thread,
        name: character,
      });

      return {
        character,
        content,
      };
    })
  );
  // console.log('characterResponses', characterResponses);

  const actualResponses = characterResponses.filter(
    (r) =>
      r.content !== null &&
      r.content.trim() !== '' &&
      !r.content.includes('NO_RESPONSE')
  );

  if (actualResponses.length === 0) {
    turnsWithoutResponses++;
  } else {
    turnsWithoutResponses = 0;
  }

  thread.push(
    ...actualResponses.map((r) => ({
      name: r.character,
      message: r.content!,
    }))
  );

  for (const r of actualResponses) {
    console.log(`${r.character}: ${r.content}`);
  }

  // console.log('updated thread', thread);

  i++;
}

console.log(
  'final thread:',
  thread.map((t) => `${t.name}: ${t.message}`).join('\n')
);
await client.shutdown();
