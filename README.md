# aiqFome - Desafio Técnico Front-End

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Engenheiro(a) de Software Front-End Sênior** da **L2L Aiqfome**. A aplicação simula uma interface de pedidos onde o(a) usuário(a) pode:

- [x] Listar produtos por categoria
- [~] Adicionar produtos ao ticket (carrinho)
- [] Visualizar e editar o ticket
- [x] Persistir os dados localmente no navegador
- [x] Utilizar a interface com foco total em mobile experience 📱

---

## Ferramentas Utilizadas

Tailwind CSS – utilitários de estilo rápidos e responsivos.

ShadCN/UI – componentes prontos.

idb-keyval – armazenamento local via IndexedDB.

#### Por que `idb-keyval` e não `localStorage`?

Ao invés de utilizar o `localStorage` tradicional para salvar os dados do ticket, optei pelo uso da biblioteca `idb-keyval`, que é assíncrona e baseada em `IndexedDB`. Os principais motivos dessa escolha são:

- **Suporte nativo a objetos JavaScript**, sem necessidade de `JSON.stringify/parse`.
- **Assíncrono por padrão**, evitando travar o thread principal durante leituras ou gravações.
- **Escalabilidade**: permite armazenar dados maiores e com mais performance do que o `localStorage`.

---

## Como rodar o projeto

```bash
# Baixe o projeto
git clone https://github.com/rafaelomodei/desafio-l2l-aiqfome

# Instalar as dependências
pnpm install

# Rodar em ambiente de desenvolvimento
pnpm dev

# Acessar no navegador
http://localhost:3000
```
