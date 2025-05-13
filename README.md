# 💼 Desafio Técnico – BIX Tecnologia

Este projeto foi desenvolvido como parte do desafio técnico proposto pela empresa BIX Tecnologia. A solução simula um sistema financeiro chamado Finance.IO, que permite a visualização e análise de transações da organização com filtros dinâmicos e gráficos interativos.

Por preferência pessoal e para manter um padrão consistente de estilização, optei por construir todos os estilos do zero.

---

## 🧠 Sobre o projeto

O Finance.IO é uma dashboard financeira que resume e visualiza transações da empresa por meio de:

- Gráficos analíticos;
- Cards com dados agregados;
- Filtros globais e dinâmicos;
- Visualização por período, tipo de transação e categorias;
- Autenticação (fake login) para proteger rotas privadas.

---

## 🚀 Tecnologias utilizadas

- Next.js (App Router) com TypeScript
- styled-components
- Recharts para visualização de dados
- Context API e Hooks
- LocalStorage e Cache de dados com Next.js
- Deploy na Vercel

---

## 📦 Instalação e execução

1. Clone o repositório:

```bash
  git clone https://github.com/rafaelppereira/finance.io.git
  cd finance.io
```

2. Instale as dependências

```bash
  pnpm install
```

3. Rode o projeto localmente

```bash
  pnpm dev
```

O projeto estará disponível em http://localhost:3000

## ✅ Requisitos técnicos do desafio recebidos pela empresa

### Funcionalidades obrigatórias

- [x] Utilize Next.js e TypeScript
- [x] Faça a estilização com styled-components
- [x] Página de login e uma página da Dashboard
- [x] Cards resumindo receitas, despesas, transações pendentes e saldo total
- [x] Sidebar exclusiva para a página da Dashboard com opções de Logout e Home
- [x] Utilizar como fonte de dados o conjunto de dados disponibilizado no desafio
- [x] Gráficos de barras empilhadas e gráficos de linhas para visualização de transações (dados à escolha)
- [x] Filtros globais e dinâmicos com atualização de conteúdo conforme os filtros aplicados
- [x] Proteger a tela da Dashboard com login fake
- [x] Incluir no README instruções de instalação do projeto e quaisquer observações relevantes
- [x] Design responsivo e interativo

### Funcionalidades pendentes

- [ ] Persistência da sessão e filtros via URL state (sem banco de dados)
- [ ] Capacidade de filtrar transações por datas, contas, indústrias e estado

### Recomendado (opcional)
- [x] Considere fazer o deploy na Vercel ou outra plataforma, fornecendo um link de acesso
- [x] Utilização de bibliotecas de componentes (MUI, Chakra, etc.) e de construção de gráficos (Highcharts, Chart.js, etc.)
- [x] Utilização de Cache do Next.js

## Autor
- [@rafaelppereira](https://www.github.com/rafaelppereira)