// Camada de dados

export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}
export interface FeedbacksRepository {
  // Aqui dentro vai quais operacoes podem ser realizadas dentro do DB
  // Acoes/Metodos que existem dentro do repositorio de feedback do DB
  create: (data: FeedbackCreateData) => Promise<void>;// <-- funcao async
}
