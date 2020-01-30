import {expect, device, element, by} from 'detox';

describe('Feedback machine', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show home screen', async () => {
    await expect(element(by.id('Home'))).toBeVisible();
  });
});
