import TicketList from "@/components/TicketList";
import CreateTicketModal from "@/components/CreateTicketModal";
import { getTickets } from "@/lib/storage";

export default async function Home() {
  const tickets = await getTickets();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Header com Ação Principal */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <h1>Central de chamados</h1>
          <p className="text-meta-dark/60 text-lg mt-2">
            Gerencie e acompanhe as solicitações do suporte de <strong>ti</strong>.
          </p>
        </div>

        {/* Componente Client que abre o Modal */}
        <CreateTicketModal />
      </header>

      {/* Conteúdo Principal */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <h2>Fila de atendimento:</h2>
          <div className="h-px flex-grow bg-slate-200"></div>
          <span className="bg-meta-dark text-white text-xs font-bold px-4 py-2 rounded-full">
            {tickets.length} chamados
          </span>
        </div>

        <TicketList tickets={tickets} />
      </section>

      <footer className="mt-20 text-center text-meta-dark/20 text-xs font-medium">
        meta &copy; 2026 | internal systems engineering
      </footer>
    </main>
  );
}
