import { AgentsmithClient } from '@agentsmith-app/sdk';
import { Agency } from './agentsmith/agentsmith.types';

const apiKey = process.env.AGENTSMITH_API_KEY!;
const projectId = process.env.AGENTSMITH_PROJECT_ID!;

const client = new AgentsmithClient<Agency>(apiKey, projectId, {
  logLevel: 'debug',
});

type ThreadMessage = {
  name: string;
  message: string;
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

let i = 0;

while (i < 10) {
  // const character = characters[i];
  const prompt = await client.getPrompt('op-character');
  const characterCandidates = characters.filter((c) => {
    return !thread.slice(0, 10).some((t) => t.name === c);
  });
  const characterResponses = await Promise.all(
    characterCandidates.map(async (character) => {
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
  console.log('characterResponses', characterResponses);

  const actualResponses = characterResponses.filter(
    (r) =>
      r.content !== null &&
      r.content.trim() !== '' &&
      !r.content.includes('NO_RESPONSE')
  );

  const randomResponse =
    actualResponses[Math.floor(Math.random() * actualResponses.length)];

  thread.push({
    name: randomResponse.character,
    message: randomResponse.content!,
  });
  console.log('updated thread', thread);

  if (i > 2) {
    break;
  }
  i++;
}

await client.shutdown();

// testing
