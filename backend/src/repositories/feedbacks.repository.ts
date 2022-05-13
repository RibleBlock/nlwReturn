// Camada de dados

export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}
export interface FeedbacksRepository {
  // Acoes/Metodos que existem dentro do repositorio de feedback do DB
  create: (data: FeedbackCreateData) => Promise<void>;
}
