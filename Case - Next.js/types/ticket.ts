export type TicketStatus = "Aberto" | "Em Andamento" | "Resolvido";

export interface Ticket {
  id: string;
  title: string;
  status: TicketStatus;
  createdAt: string;
}
