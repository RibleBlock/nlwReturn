import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer.mail.adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma.feedbacks.repository';
import { SubmitFeedbackServices } from './services/submitFeedback.services';

const route = express.Router();

route.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackServices = new SubmitFeedbackServices(
    prismaFeedbacksRepository,
    nodemailerMailAdapter,
  );
  await submitFeedbackServices.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
export default route;
