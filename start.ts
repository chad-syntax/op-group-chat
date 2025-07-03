import { AgentsmithClient } from '@agentsmith-app/sdk';

const apiKey = process.env.AGENTSMITH_API_KEY!;
const projectId = process.env.AGENTSMITH_PROJECT_ID!;

const client = new AgentsmithClient(apiKey, projectId);

type ThreadMessage = {
  name: string;
  message: string;
};

const thread: ThreadMessage[] = [];

const luffy = await client.getPrompt('luffy');
const nami = await client.getPrompt('nami');
const usopp = await client.getPrompt('usopp');

let i = 0;

while (i < 10) {
  // const result = await luffy.execute({
  //   thread,
  // } as any); // TODO: fix this

  // console.log(result);

  const names = ['luffy', 'nami', 'usopp'];

  const responses = await Promise.all([
    luffy.execute({
      thread,
    } as any),
    nami.execute({
      thread,
    } as any),
    usopp.execute({
      thread,
    } as any),
  ]);

  const actualResponses = responses
    .filter((r) => r.content && r.content !== 'NO_RESPONSE')
    .map((r) => r.content);

  const randomActualResponseIndex = Math.floor(
    Math.random() * actualResponses.length
  );
  const randomActualResponse = actualResponses[randomActualResponseIndex];
  const randomName = names[randomActualResponseIndex];

  thread.push({
    name: randomName ?? '',
    message: randomActualResponse ?? '',
  });

  console.log(thread);

  if (i > 2) {
    break;
  }
  i++;
}

await client.shutdown();

// testing
