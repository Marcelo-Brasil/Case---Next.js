# 🎫 Sistema de Chamados de TI | Case Final Trainee - Meta Consultoria

Este é o repositório base para o **Case da Trilha de Next.js** do processo seletivo da Meta Consultoria.

## 🎯 Sobre o Projeto

A aplicação é um dashboard interno para abertura e acompanhamento de tickets (chamados) de suporte de TI.

**Atenção:** Toda a camada de persistência de dados deve ser construída manipulando o arquivo local `data/tickets.json` nativamente através do módulo `fs/promises` do Node.js que vocês devem pesquisar por conta própria.

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (App Router)
- **[React](https://reactjs.org/)** (Server & Client Components)
- **[Tailwind CSS v4](https://tailwindcss.com/)** (Estilização via `globals.css`)
- **Node.js** (`fs/promises` para manipulação de arquivos)
- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** (Otimização nativa da tipografia oficial da marca - Montserrat)

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o Node.js (versão 18 ou superior) instalado em sua máquina.

1. Instale as dependências do projeto:

```bash
npm install
# ou
yarn install
# ou
pnpm install

```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev

```

1. Abra [http://localhost:3000] no seu navegador para ver o resultado inicial.

---

## 📁 Estrutura do Repositório

- `/app`: Configurações de roteamento global, layouts e páginas (App Router).
- `/components`: Componentes isolados de interface (UI).
- `/lib`: Módulos utilitários e regras de negócio no servidor. **(Atenção ao arquivo `storage.ts`)**
- `/types`: Definições de tipagem TypeScript utilizadas no projeto.
- `/actions`: Diretório sugerido para o encapsulamento das Server Actions.
- `/data`: Contém o arquivo `tickets.json` que atuará como banco de dados da aplicação.

---

## 📋 Resumo das Tarefas (O Desafio)

1. **Persistência Local:** Implementar a leitura e escrita no arquivo `tickets.json` via Server Components e Server Actions.
2. **Latência Simulada:** Aplicar um delay de pelo menos 2 segundos na função de leitura do servidor para simular uma rede real.
3. **Estado de Carregamento:** Implementar o arquivo `loading.tsx` exibindo feedback visual durante a simulação do delay.
4. **Server Actions:** Tratar a submissão do formulário do Modal nativamente pelo servidor.
5. **Revalidação de Cache:** Utilizar `revalidatePath` para atualizar a lista automaticamente na interface após a inserção de um novo chamado, sem necessidade de atualizar a página (F5).

_Consulte o documento oficial do case recebido para ler as especificações completas dos requisitos funcionais e não-funcionais._

---

## 📚 Documentação e Links Úteis

- [Next.js - Data Fetching & Caching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Next.js - Server Actions & Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Node.js - File System Promises API (`fs/promises`)](https://nodejs.org/api/fs.html)
