import fs from 'fs';

const testFunction = (introduction: string): void => {
  const test = `This is an introduction string: ${introduction}`;
  console.log(test);
};

testFunction('Hello World');

// This is a test async function that does things
const asyncTestFunction = async (): Promise<Array<string>> => fs.readdirSync(process.cwd());

void asyncTestFunction()
  .then((result: Array<string>) => {
    console.log(result);
  });

const testFunctionToo = (object: { test?: string }): void => {
  object.test = 'new value';
};

const testVar = {
  test_var: testFunctionToo,
  async_test: asyncTestFunction,
};

console.log(Object.keys(testVar).length);
