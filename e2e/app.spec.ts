import {device} from 'detox';
import {feedbackModel} from './feedbackModel';

describe('Feedback App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const testPlans = feedbackModel.getSimplePathPlans();

  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(
          path.description,
          async () => {
            await path.test({});
          },
          10000,
        );
      });
    });
  });

  it('coverage', () => {
    feedbackModel.testCoverage();
  });
});
