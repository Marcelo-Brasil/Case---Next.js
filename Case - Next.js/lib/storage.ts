import { Ticket } from "@/types/ticket";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const filePath = path.join(process.cwd(), "data", "tickets.json");

async function readTickets(): Promise<Ticket[]> {
  const fileContent = await readFile(filePath, "utf-8");

  return JSON.parse(fileContent);
}

export async function getTickets(): Promise<Ticket[]> {
  await new Promise((resolve) => setTimeout(resolve, 1800));

  return readTickets();
}

export async function addTicket(
  newTicketData: Omit<Ticket, "id" | "createdAt" | "status">,
): Promise<void> {

  const tickets = await readTickets();

  const newTicket: Ticket = {
    id: `tkt-${Date.now()}`,
    title: newTicketData.title,
    description: newTicketData.description,
    status: "Aberto",
    createdAt: new Date().toISOString(),
  };

  tickets.unshift(newTicket);

  await writeFile(filePath, JSON.stringify(tickets, null, 2), "utf-8");
}