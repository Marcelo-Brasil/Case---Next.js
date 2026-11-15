export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <h1>central de chamados</h1>
          <p className="text-meta-dark/60 text-lg mt-2">
            buscando chamados...
          </p>
        </div>
      </header>

      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <h2>fila de atendimento</h2>
          <div className="h-px flex-grow bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 animate-pulse"
            >
              <div className="h-6 w-24 bg-slate-200 rounded-full mb-6" />
              <div className="h-6 w-3/4 bg-slate-200 rounded mb-4" />
              <div className="h-4 w-full bg-slate-100 rounded mb-2" />
              <div className="h-4 w-2/3 bg-slate-100 rounded mb-8" />
              <div className="h-4 w-1/3 bg-slate-100 rounded" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}