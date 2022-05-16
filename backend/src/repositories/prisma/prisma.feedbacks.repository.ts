import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepository } from '../feedbacks.repository';

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    // enviando      table    operation
    await prisma.feedback.create({
      // select: dados que seram retornados pos-criacão
      data: { // data: são quais os dados para a criacão dessa tabela
        type,
        comment,
        screenshot,
      },
    });
  }
}
