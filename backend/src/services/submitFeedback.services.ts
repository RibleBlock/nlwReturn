// Camada de aplicacao que lida com a regra de negocio

// services/use-cases é cada acao que um usuario pode fazer

import { FeedbacksRepository } from '../repositories/feedbacks.repository';

// para enviar precisa de dados
interface SubmitFeedbackServicesRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

// Apenas um metodo. Apenas uma resposabilidade
export class SubmitFeedbackServices {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  async execute(request: SubmitFeedbackServicesRequest) {
    const { type, comment, screenshot } = request;

    const feedback = await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    return feedback;
  }
}
