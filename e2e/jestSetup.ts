import detox from 'detox';
import adapter from 'detox/runners/jest/adapter';
import specReporter from 'detox/runners/jest/specReporter';

const config = require('../package.json').detox;

// @ts-ignore
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
// @ts-ignore
jasmine.getEnv().addReporter(specReporter);

// Set the default timeout
jest.setTimeout(90000);

beforeAll(async () => {
  await detox.init(config);
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
