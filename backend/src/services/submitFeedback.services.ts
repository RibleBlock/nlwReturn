// Camada de aplicacao que lida com a regra de negocio

import { FeedbacksRepository } from "../repositories/feedbacks.repository";

interface SubmitFeedbackServicesRequest {
  //para enviar precisa de dados
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedbackServices {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
  ) {}

  async execute(request: SubmitFeedbackServicesRequest) {
    const { type, comment, screenshot } = request;

    const feedback = await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    return feedback;
  }
}
