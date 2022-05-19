import { SubmitFeedbackServices } from './submitFeedback.services';

test('sum 2 + 2', () => {
  expect(2 + 2).toBe(4);
});

// JEST
describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedback = new SubmitFeedbackServices(
      { create: async () => {} }, // Dependencia mocadas
      { sendMail: async () => {} }, // Dependencia mocadas
    );

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'screenshot.jpg',
    })).resolves.not.toThrow();
  });
});
