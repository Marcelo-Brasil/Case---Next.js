export default function TicketForm() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h2>abrir novo chamado</h2>

      {/* TODO: Implementar a propriedade 'action' chamando a Server Action correta */}
      <form className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="title"
            className="text-sm font-medium text-meta-dark/80"
          >
            título do problema
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Ex: Teclado não funciona"
            required
            className="px-4 py-3 bg-meta-light/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-meta-cyan focus:border-meta-cyan outline-none transition-all"
          />
        </div>

        {/* TODO: implementar feedback de carregamento no botão durante o envio (ex: useFormStatus) */}
        <button
          type="submit"
          className="bg-meta-gradient text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:opacity-90 transition-opacity focus:ring-4 focus:ring-meta-cyan/30 mt-2"
        >
          enviar chamado
        </button>
      </form>
    </div>
  );
}
