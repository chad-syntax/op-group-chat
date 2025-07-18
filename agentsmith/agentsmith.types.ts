/*
|--------------------------------------------|
         ⚡️ Generated by Agentsmith ⚡️
      ⚠️ Do not edit this file directly ⚠️
|--------------------------------------------|
*/
export type PromptVariables__luffy__0_0_1 = {
  thread: any;
};
export type PromptVariables__luffy__0_0_2 = {
  thread: any;
};
export type PromptVariables__nami__0_0_1 = {
  thread: any;
};
export type PromptVariables__usopp__0_0_1 = {
  thread: any;
};
export type PromptVariables__hello_world__3_0_0 = {
  name: string;
};
export type PromptVariables__hello_world__1_0_0 = {
  name: string;
};
export type PromptVariables__hello_world__2_0_0 = {
  name: string;
};
export type PromptVariables__op_character__0_0_1 = {};
export type PromptVariables__op_character__0_0_2 = {
  name: string;
  thread: any;
  startingScenario?: string;
};
export type PromptVariables__one_piece_character_response_decision__0_0_1 = {
  name: string;
  thread: any;
};
export type PromptVariables__one_piece_character_response_decision__0_0_3 = {
  characters: any;
  thread: any;
  turnsWithoutResponses: number;
};
export type PromptVariables__one_piece_character_response_decision__0_0_4 = {
  characters: any;
  thread: any;
  turnsWithoutResponses?: number;
};
export type PromptVariables__one_piece_character_response_decision__0_0_2 = {
  characters: any;
  thread: any;
  turnsWithoutResponses: number;
};
export type PromptVariables__test_partial__0_0_1 = {
  color: string;
};
export type PromptVariables__test_include_partial__0_0_2 = {
  name: string;
  testVariable1: boolean;
};
export type PromptVariables__test_include_partial__0_0_1 = {
  name: string;
  foo: string;
};
export type PromptVariables__test_prompt__0_0_2 = {};
export type PromptVariables__test_prompt__0_0_3 = {
  foo: number;
  quux?: string;
  bar?: boolean;
  baz?: any;
};
export type PromptVariables__test_prompt__0_0_1 = {};
export type PromptConfig__luffy__0_0_1 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__luffy__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__luffy__0_0_1;
  variables: PromptVariables__luffy__0_0_1;
  content: string;
};
export type PromptConfig__luffy__0_0_2 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__luffy__0_0_2 = {
  version: '0.0.2';
  config: PromptConfig__luffy__0_0_2;
  variables: PromptVariables__luffy__0_0_2;
  content: string;
};
export type Prompt__luffy = {
  name: 'Luffy';
  slug: 'luffy';
  versions: {
    latest: never;
    '0.0.1': PromptVersion__luffy__0_0_1;
    '0.0.2': PromptVersion__luffy__0_0_2;
  };
};
export type PromptConfig__nami__0_0_1 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__nami__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__nami__0_0_1;
  variables: PromptVariables__nami__0_0_1;
  content: string;
};
export type Prompt__nami = {
  name: 'Nami';
  slug: 'nami';
  versions: {
    latest: never;
    '0.0.1': PromptVersion__nami__0_0_1;
  };
};
export type PromptConfig__usopp__0_0_1 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__usopp__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__usopp__0_0_1;
  variables: PromptVariables__usopp__0_0_1;
  content: string;
};
export type Prompt__usopp = {
  name: 'Usopp';
  slug: 'usopp';
  versions: {
    latest: never;
    '0.0.1': PromptVersion__usopp__0_0_1;
  };
};
export type PromptConfig__hello_world__3_0_0 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__hello_world__3_0_0 = {
  version: '3.0.0';
  config: PromptConfig__hello_world__3_0_0;
  variables: PromptVariables__hello_world__3_0_0;
  content: string;
};
export type PromptConfig__hello_world__1_0_0 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__hello_world__1_0_0 = {
  version: '1.0.0';
  config: PromptConfig__hello_world__1_0_0;
  variables: PromptVariables__hello_world__1_0_0;
  content: string;
};
export type PromptConfig__hello_world__2_0_0 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__hello_world__2_0_0 = {
  version: '2.0.0';
  config: PromptConfig__hello_world__2_0_0;
  variables: PromptVariables__hello_world__2_0_0;
  content: string;
};
export type Prompt__hello_world = {
  name: 'Hello World';
  slug: 'hello-world';
  versions: {
    latest: PromptVersion__hello_world__3_0_0;
    '3.0.0': PromptVersion__hello_world__3_0_0;
    '1.0.0': PromptVersion__hello_world__1_0_0;
    '2.0.0': PromptVersion__hello_world__2_0_0;
  };
};
export type PromptConfig__op_character__0_0_1 = {
  models: ['google/gemini-2.5-flash-preview-05-20'];
  temperature: number;
};
export type PromptVersion__op_character__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__op_character__0_0_1;
  variables: PromptVariables__op_character__0_0_1;
  content: string;
};
export type PromptConfig__op_character__0_0_2 = {
  models: ['google/gemini-2.5-flash-preview-05-20'];
  temperature: number;
};
export type PromptVersion__op_character__0_0_2 = {
  version: '0.0.2';
  config: PromptConfig__op_character__0_0_2;
  variables: PromptVariables__op_character__0_0_2;
  content: string;
};
export type Prompt__op_character = {
  name: 'One Piece Character';
  slug: 'op-character';
  versions: {
    latest: PromptVersion__op_character__0_0_2;
    '0.0.1': PromptVersion__op_character__0_0_1;
    '0.0.2': PromptVersion__op_character__0_0_2;
  };
};
export type PromptConfig__one_piece_character_response_decision__0_0_1 = {
  models: ['google/gemini-2.5-flash-preview-05-20'];
  temperature: number;
  response_format: {
    type: 'json_schema';
    json_schema: {
      name: 'op_response_reason';
      schema: {
        type: 'object';
        required: ['reasons_to_respond', 'reasons_not_to_respond', 'score'];
        properties: {
          score: {
            type: 'number';
            description: 'score out of 10 determining how likely it would be that the character responds, 10 being most likely and 1 being least likely';
          };
          reasons_to_respond: {
            type: 'array';
            items: {
              type: 'string';
            };
            description: 'list of reasons why the character would respond to the thread';
          };
          reasons_not_to_respond: {
            type: 'array';
            items: {
              type: 'string';
            };
            description: 'list of reasons why the character would NOT respond to the thread';
          };
        };
        additionalProperties: false;
      };
      strict: true;
    };
  };
};
export type PromptVersion__one_piece_character_response_decision__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__one_piece_character_response_decision__0_0_1;
  variables: PromptVariables__one_piece_character_response_decision__0_0_1;
  content: string;
};
export type PromptConfig__one_piece_character_response_decision__0_0_3 = {
  models: ['google/gemini-2.5-flash-lite-preview-06-17'];
  temperature: number;
  response_format: {
    type: 'json_schema';
    json_schema: {
      name: 'op_response_reasons';
      schema: {
        type: 'array';
        items: {
          type: 'object';
          required: ['character', 'reasons_to_respond', 'reasons_not_to_respond', 'score'];
          properties: {
            score: {
              type: 'number';
              description: 'score out of 10 determining how likely it would be that the character responds, 10 being most likely and 1 being least likely';
            };
            character: {
              type: 'string';
            };
            reasons_to_respond: {
              type: 'array';
              items: {
                type: 'string';
              };
              description: 'list of reasons why the character would respond to the thread';
            };
            reasons_not_to_respond: {
              type: 'array';
              items: {
                type: 'string';
              };
              description: 'list of reasons why the character would NOT respond to the thread';
            };
          };
          additionalProperties: false;
        };
      };
      strict: true;
    };
  };
};
export type PromptVersion__one_piece_character_response_decision__0_0_3 = {
  version: '0.0.3';
  config: PromptConfig__one_piece_character_response_decision__0_0_3;
  variables: PromptVariables__one_piece_character_response_decision__0_0_3;
  content: string;
};
export type PromptConfig__one_piece_character_response_decision__0_0_4 = {
  models: ['google/gemini-2.5-flash-lite-preview-06-17'];
  temperature: number;
  response_format: {
    type: 'json_schema';
    json_schema: {
      name: 'op_response_reasons';
      schema: {
        type: 'array';
        items: {
          type: 'object';
          required: ['character', 'reasons_to_respond', 'reasons_not_to_respond', 'score'];
          properties: {
            score: {
              type: 'number';
              description: 'score out of 10 determining how likely it would be that the character responds, 10 being most likely and 1 being least likely';
            };
            character: {
              type: 'string';
            };
            reasons_to_respond: {
              type: 'array';
              items: {
                type: 'string';
              };
              description: 'list of reasons why the character would respond to the thread';
            };
            reasons_not_to_respond: {
              type: 'array';
              items: {
                type: 'string';
              };
              description: 'list of reasons why the character would NOT respond to the thread';
            };
          };
          additionalProperties: false;
        };
      };
      strict: true;
    };
  };
};
export type PromptVersion__one_piece_character_response_decision__0_0_4 = {
  version: '0.0.4';
  config: PromptConfig__one_piece_character_response_decision__0_0_4;
  variables: PromptVariables__one_piece_character_response_decision__0_0_4;
  content: string;
};
export type PromptConfig__one_piece_character_response_decision__0_0_2 = {
  models: ['google/gemini-2.5-flash-lite-preview-06-17'];
  temperature: number;
  response_format: {
    type: 'json_schema';
    json_schema: {
      name: 'op_response_reasons';
      schema: {
        type: 'array';
        items: {
          type: 'object';
          required: ['character', 'reasons_to_respond', 'reasons_not_to_respond', 'score'];
          properties: {
            score: {
              type: 'number';
              description: 'score out of 10 determining how likely it would be that the character responds, 10 being most likely and 1 being least likely';
            };
            character: {
              type: 'string';
            };
            reasons_to_respond: {
              type: 'array';
              items: {
                type: 'string';
              };
              description: 'list of reasons why the character would respond to the thread';
            };
            reasons_not_to_respond: {
              type: 'array';
              items: {
                type: 'string';
              };
              description: 'list of reasons why the character would NOT respond to the thread';
            };
          };
          additionalProperties: false;
        };
      };
      strict: true;
    };
  };
};
export type PromptVersion__one_piece_character_response_decision__0_0_2 = {
  version: '0.0.2';
  config: PromptConfig__one_piece_character_response_decision__0_0_2;
  variables: PromptVariables__one_piece_character_response_decision__0_0_2;
  content: string;
};
export type Prompt__one_piece_character_response_decision = {
  name: 'One Piece Character Response Decision';
  slug: 'one-piece-character-response-decision';
  versions: {
    latest: PromptVersion__one_piece_character_response_decision__0_0_2;
    '0.0.1': PromptVersion__one_piece_character_response_decision__0_0_1;
    '0.0.3': PromptVersion__one_piece_character_response_decision__0_0_3;
    '0.0.4': PromptVersion__one_piece_character_response_decision__0_0_4;
    '0.0.2': PromptVersion__one_piece_character_response_decision__0_0_2;
  };
};
export type PromptConfig__test_partial__0_0_1 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__test_partial__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__test_partial__0_0_1;
  variables: PromptVariables__test_partial__0_0_1;
  content: string;
};
export type Prompt__test_partial = {
  name: 'Test Partial';
  slug: 'test-partial';
  versions: {
    latest: PromptVersion__test_partial__0_0_1;
    '0.0.1': PromptVersion__test_partial__0_0_1;
  };
};
export type PromptConfig__test_include_partial__0_0_2 = {
  models: ['google/gemini-2.5-flash-lite-preview-06-17'];
  temperature: number;
};
export type PromptVersion__test_include_partial__0_0_2 = {
  version: '0.0.2';
  config: PromptConfig__test_include_partial__0_0_2;
  variables: PromptVariables__test_include_partial__0_0_2 &
    PromptVariables__op_character__0_0_2 &
    PromptVariables__test_partial__0_0_1 &
    PromptVariables__hello_world__3_0_0;
  content: string;
};
export type PromptConfig__test_include_partial__0_0_1 = {
  models: ['google/gemini-2.5-flash-lite-preview-06-17'];
  temperature: number;
};
export type PromptVersion__test_include_partial__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__test_include_partial__0_0_1;
  variables: PromptVariables__test_include_partial__0_0_1 &
    PromptVariables__op_character__0_0_2 &
    PromptVariables__test_partial__0_0_1 &
    PromptVariables__hello_world__3_0_0;
  content: string;
};
export type Prompt__test_include_partial = {
  name: 'Test Include Partial';
  slug: 'test-include-partial';
  versions: {
    latest: PromptVersion__test_include_partial__0_0_1;
    '0.0.2': PromptVersion__test_include_partial__0_0_2;
    '0.0.1': PromptVersion__test_include_partial__0_0_1;
  };
};
export type PromptConfig__test_prompt__0_0_2 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__test_prompt__0_0_2 = {
  version: '0.0.2';
  config: PromptConfig__test_prompt__0_0_2;
  variables: PromptVariables__test_prompt__0_0_2;
  content: string;
};
export type PromptConfig__test_prompt__0_0_3 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__test_prompt__0_0_3 = {
  version: '0.0.3';
  config: PromptConfig__test_prompt__0_0_3;
  variables: PromptVariables__test_prompt__0_0_3;
  content: string;
};
export type PromptConfig__test_prompt__0_0_1 = {
  models: ['openrouter/auto'];
  temperature: number;
};
export type PromptVersion__test_prompt__0_0_1 = {
  version: '0.0.1';
  config: PromptConfig__test_prompt__0_0_1;
  variables: PromptVariables__test_prompt__0_0_1;
  content: string;
};
export type Prompt__test_prompt = {
  name: 'Test Prompt';
  slug: 'test-prompt';
  versions: {
    latest: PromptVersion__test_prompt__0_0_2;
    '0.0.2': PromptVersion__test_prompt__0_0_2;
    '0.0.3': PromptVersion__test_prompt__0_0_3;
    '0.0.1': PromptVersion__test_prompt__0_0_1;
  };
};
export type Globals = {
  test: 'testing';
};
export type Agency = {
  prompts: {
    luffy: Prompt__luffy;
    nami: Prompt__nami;
    usopp: Prompt__usopp;
    'hello-world': Prompt__hello_world;
    'op-character': Prompt__op_character;
    'one-piece-character-response-decision': Prompt__one_piece_character_response_decision;
    'test-partial': Prompt__test_partial;
    'test-include-partial': Prompt__test_include_partial;
    'test-prompt': Prompt__test_prompt;
  };
  globals: Globals;
};
