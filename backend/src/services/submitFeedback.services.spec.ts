import { SubmitFeedbackServices } from './submitFeedback.services';

test('sum 2 + 2', () => {
  expect(2 + 2).toBe(4);
});

// JEST
describe('Submit feedback', () => {
  const submitFeedback = new SubmitFeedbackServices(
    { create: async () => {} }, // Dependencia mocadas
    { sendMail: async () => {} }, // Dependencia mocadas
  );

  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,ewfwefwef',
    })).resolves.not.toThrow();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,ewfwefwef',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,ewfwefwef',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'teste.jpg',
    })).rejects.toThrow();
  });
});
