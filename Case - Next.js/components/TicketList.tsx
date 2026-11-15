import { Ticket } from "@/types/ticket";
import { Clock, Tag } from "lucide-react";

export default function TicketList({ tickets }: { tickets: Ticket[] }) {
  if (tickets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
        <div className="w-16 h-16 bg-meta-light rounded-full flex items-center justify-center mb-4">
          <Tag className="text-meta-cyan" />
        </div>
        <p className="text-meta-dark/40 font-medium">nenhum chamado na fila.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
        >
          <div className="flex justify-between items-start mb-6">
            <span
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
              ${
                ticket.status === "Aberto"
                  ? "bg-red-50 text-red-600 border-red-100"
                  : ticket.status === "Em Andamento"
                    ? "bg-amber-50 text-amber-600 border-amber-100"
                    : "bg-emerald-50 text-emerald-600 border-emerald-100"
              }`}
            >
              {ticket.status}
            </span>
          </div>

          <h3 className="text-xl mb-3 group-hover:text-meta-cyan transition-colors">
            {ticket.title}
          </h3>

          <p className="text-sm text-meta-dark/60 mb-8">
            {ticket.description}
          </p>

          <div className="flex justify-between items-center text-[11px] text-meta-dark/40 pt-4 border-t border-slate-50">
            <div className="flex items-center gap-1.5">
              <Clock size={12} />
              <span>
                {new Date(ticket.createdAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <span>
              id: <strong>{ticket.id.slice(-5)}</strong>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}