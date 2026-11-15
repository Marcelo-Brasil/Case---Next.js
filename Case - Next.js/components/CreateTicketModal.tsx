"use client";

import { useState } from "react";
import { X } from "lucide-react"; // Instale lucide-react ou use uma SVG

export default function CreateTicketModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-meta-gradient text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform active:scale-95"
      >
        + criar chamado
      </button>

      {/* Estrutura do Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay com Blur */}
          <div
            className="absolute inset-0 bg-meta-dark/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Card do Modal */}
          <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2>abrir novo chamado</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-meta-dark" />
                </button>
              </div>

              {/* TODO: O trainee deve implementar a Server Action e conectar ao formulário */}
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="title"
                    className="text-sm font-semibold text-meta-dark/60 ml-1"
                  >
                    o que está acontecendo?
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Ex: Monitor não liga"
                    required
                    className="px-5 py-4 bg-meta-light rounded-2xl border border-slate-100 focus:ring-2 focus:ring-meta-cyan outline-none transition-all text-meta-dark"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-4 rounded-2xl font-bold text-meta-dark/60 hover:bg-slate-50 transition-colors"
                  >
                    cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-[2] bg-meta-gradient text-white font-bold py-4 rounded-2xl shadow-md hover:opacity-90 transition-opacity"
                  >
                    enviar chamado
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
