import { Ticket } from "@/types/ticket";

// TODO: Pesquise a documentação do módulo nativo 'fs/promises' e 'path' do Node.js.
// O banco de dados desta aplicação é o arquivo localizado em /data/tickets.json

export async function getTickets(): Promise<Ticket[]> {
  // TODO 1: Crie um delay artificial de 1.5 a 2 segundos usando Promise e setTimeout.
  // Isso será essencial para visualizarmos o loading.tsx funcionando.

  // TODO 2: Utilize fs.readFile para ler o arquivo tickets.json.
  // Dica: Use process.cwd() junto com path.join para encontrar o caminho correto do arquivo.

  // TODO 3: Converta a string lida em um array de objetos usando JSON.parse() e retorne.
  return []; // Substitua pela sua lógica
}

export async function addTicket(
  newTicketData: Omit<Ticket, "id" | "createdAt" | "status">,
): Promise<void> {
  // TODO 1: Reaproveite ou reimplemente a lógica de leitura para pegar o array atual de tickets.
  // TODO 2: Monte o objeto do novo ticket. Você precisará gerar um ID (ex: "tkt-" + Date.now()),
  // definir o status como "Aberto" e salvar a data atual no formato ISO.
  // TODO 3: Adicione o novo ticket no início do array (para aparecer primeiro na lista).
  // TODO 4: Utilize fs.writeFile para reescrever o arquivo tickets.json com o array atualizado.
  // Lembre-se de converter o array de volta para string com JSON.stringify.
}
