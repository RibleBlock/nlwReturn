// Camada de aplicacao que lida com a regra de negocio

// services/use-cases é cada acao/Funcionalidades que um usuario pode fazer

import { MailAdapter } from '../adapters/mail.adapter';
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
    private feedbacksRepository: FeedbacksRepository, // abstracao
    private mailAdapter: MailAdapter, // abstracao
  ) {}

  async execute(request: SubmitFeedbackServicesRequest) {
    const { type, comment, screenshot } = request;

    if (!comment) {
      throw new Error('Comment is required');
    }

    if (!type) {
      throw new Error('Type is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        '</div>',
      ].join('\n'),
    });
  }
}
