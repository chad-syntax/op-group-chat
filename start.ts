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
  const characterResponses = await Promise.all(
    characters.map(async (character) => {
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
  // const result = await prompt.execute({
  //   thread,
  //   name: character,
  // });
  // const result = await luffy.execute({
  //   thread,
  // } as any); // TODO: fix this
  // console.log(result);
  // const names = ['luffy', 'nami', 'usopp'];
  // const responses = await Promise.all([
  //   luffy.execute({
  //     thread,
  //   }),
  //   nami.execute({
  //     thread,
  //   }),
  //   usopp.execute({
  //     thread,
  //   }),
  // ]);
  const actualResponses = characterResponses.filter(
    (r) => r.content !== null && r.content !== 'NO_RESPONSE'
  );

  thread.push(
    ...actualResponses.map((r) => ({
      name: r.character,
      message: r.content!,
    }))
  );
  console.log('updated thread', thread);

  if (i > 3) {
    break;
  }
  i++;
}

await client.shutdown();

// testing
