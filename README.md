# 🧩 Quest React Avançado – Teste Técnico

Aplicação desenvolvida para o desafio técnico do curso **DevQuest**, utilizando a **PokeAPI** para listagem e exibição detalhada de Pokémons.

---

## 📌 Funcionalidades

### **Home**

* Exibe os **10 primeiros Pokémons** da API.
* Botão **Carregar mais** → adiciona mais 10 resultados a cada clique.
* Cada item apresenta **imagem e nome** do Pokémon.
* Os cards são clicáveis e direcionam para a página de detalhes.
* Alternância entre temas **Light e Dark** utilizando **Context API**.

### **Página de Detalhes**

Apresenta informações completas do Pokémon selecionado:

* Imagem oficial
* Nome
* Tipo(s)
* Lista de **movimentos (moves)**
* Lista de **habilidades**, incluindo nome e descrição

---

## 🛠️ Tecnologias Utilizadas

* **React.js** (SPA)
* **react-router-dom** – gerenciamento de rotas
* **Context API** – controle global de tema
* **styled-components** – estilização baseada em componentes
* **fetch / axios** – chamadas à PokeAPI

---

## 💡 Decisões Técnicas

* Utilização do **Context API** pela simplicidade e eficiência no controle global do tema.
* Adoção de **styled-components** para permitir estilos dinâmicos e melhor organização visual.
* Estrutura modular com separação clara entre **páginas**, **componentes**, **hooks** e **serviços**.
* Requisições otimizadas para evitar chamadas duplicadas e melhorar o desempenho.

---

## ▶️ Como Executar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git

# Acessar o diretório
cd NOME_DO_REPO

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm start
```

A aplicação ficará disponível em: **[http://localhost:3000](http://localhost:3000)**

---

## 🔥 Bônus (se implementado)

* Filtro por **tipo de Pokémon**
* Testes unitários com **Jest / React Testing Library**

---
