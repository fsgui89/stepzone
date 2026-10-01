# StepZone

[English](#english) | [Português](#portugues)

[Live Demo](https://fsgui89.github.io/stepzone/) · [Repository](https://github.com/fsgui89/stepzone)

<a id="english"></a>

## English

A sneaker storefront prototype with product discovery, a persistent cart and a simulated checkout.

### Overview

StepZone demonstrates a shopping journey from browsing sneakers to a confirmation page. Its catalog is defined locally, while cart state is shared across pages and retained in the browser.

### Tech Stack

Next.js • React • TypeScript • Tailwind CSS • localStorage

### Features

- Search products by name and filter Running, Casual or Basket categories.
- View individual product pages with descriptions, images and prices.
- Add products to the cart, change quantities and remove items.
- Display the cart item count, subtotal, discount and total.
- Apply a 10% discount when the subtotal reaches R$ 1,500.
- Select Pix, credit card or debit in a simulated checkout, clear the cart and open a success page.
- Responsive layouts and empty states for the catalog, cart and checkout.

### Technical Highlights

- CartProvider and the useCart hook share typed cart state across App Router pages.
- Browser storage is read after mounting; the hydration flag prevents saving before the initial cart is loaded.
- useMemo derives item counts and subtotal; product pages use generateStaticParams for static export.
- Tailwind utility classes implement responsive grids and interaction states.
- NEXT_PUBLIC_BASE_PATH is shared by route configuration and local product image URLs.

### Getting Started

Prerequisites: Git, Node.js 22.12 or later compatible with the dependencies, and npm.

```bash
git clone https://github.com/fsgui89/stepzone.git
cd stepzone
npm ci
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) (or the port reported by Next.js).

Available commands:

```bash
npm run build
npm run lint
```

The build exports a static site to `out/`, as configured by `output: 'export'`. The existing workflow publishes that directory to GitHub Pages. Although a `start` script exists, this project uses static export; preview its build with a static file server serving `out/`.

### Project Structure

- `src/app/`: catalog, product, cart, checkout and success routes.
- `src/components/`: shared storefront components.
- `src/hooks/useCart.tsx`: shared cart state and totals.
- `src/data/products.ts`: typed local catalog.
- `src/lib/storage.ts`: cart persistence.

### Implementation Scope

Checkout is a frontend simulation: payment selection does not process transactions or create a server-side order. The project has no inventory service, accounts or database.

### Preview

Existing project preview maintained in the portfolio repository.

![StepZone preview](https://raw.githubusercontent.com/fsgui89/portfolio-guilherme-ferreira/main/public/images/projects/stepzone.png)

### Author

**Guilherme Ferreira**  
Full Stack Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

---

<a id="portugues"></a>

## Português

Protótipo de loja de sneakers com busca de produtos, carrinho persistente e checkout simulado.

### Visão geral

A StepZone demonstra a jornada de compra desde a consulta do catálogo até a página de confirmação. Os produtos são definidos localmente; o estado do carrinho é compartilhado entre as páginas e mantido no navegador.

### Tecnologias

Next.js • React • TypeScript • Tailwind CSS • localStorage

### Funcionalidades

- Buscar produtos pelo nome e filtrar categorias Running, Casual ou Basket.
- Consultar páginas individuais com descrição, imagens e preços.
- Adicionar produtos ao carrinho, alterar quantidades e remover itens.
- Exibir quantidade de itens, subtotal, desconto e total.
- Aplicar 10% de desconto quando o subtotal alcança R$ 1.500.
- Selecionar Pix, cartão ou débito em checkout simulado, limpar o carrinho e abrir a página de sucesso.
- Layouts responsivos e estados vazios no catálogo, carrinho e checkout.

### Destaques técnicos

- CartProvider e useCart compartilham estado tipado entre as páginas do App Router.
- O armazenamento é lido após a montagem; o controle de hidratação evita salvar antes de carregar o carrinho inicial.
- useMemo calcula quantidade e subtotal; generateStaticParams permite exportar as páginas de produto estaticamente.
- Classes utilitárias do Tailwind implementam grades responsivas e estados de interação.
- NEXT_PUBLIC_BASE_PATH ajusta as rotas e os caminhos das imagens locais dos produtos.

### Como executar

Pré-requisitos: Git, Node.js 22.12 ou superior compatível com as dependências, e npm.

```bash
git clone https://github.com/fsgui89/stepzone.git
cd stepzone
npm ci
npm run dev
```

Abra [http://localhost:3000/](http://localhost:3000/) (ou a porta indicada pelo Next.js).

Comandos disponíveis:

```bash
npm run build
npm run lint
```

O build gera o site estático em `out/`, conforme `output: 'export'`. O workflow existente publica essa pasta no GitHub Pages. Apesar de existir um script `start`, este projeto usa exportação estática; para visualizar o resultado do build, utilize um servidor de arquivos estáticos em `out/`.

### Estrutura do projeto

- `src/app/`: rotas de catálogo, produto, carrinho, checkout e sucesso.
- `src/components/`: componentes compartilhados da loja.
- `src/hooks/useCart.tsx`: estado do carrinho e totais.
- `src/data/products.ts`: catálogo local tipado.
- `src/lib/storage.ts`: persistência do carrinho.

### Escopo da implementação

O checkout é uma simulação no frontend: a seleção de pagamento não processa transações nem cria pedidos em servidor. O projeto não inclui serviço de estoque, contas ou banco de dados.

### Prévia

A imagem existente na seção Preview acima é mantida no repositório do portfólio. A versão interativa está no link Live Demo no início deste README.

### Autor

**Guilherme Ferreira**  
Full Stack Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

