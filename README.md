# Reading Journal – Fase 1

Este repositório contém a primeira fase do projeto **Reading Journal** para a disciplina de Desenvolvimento de Sistemas Frontend (PUCRS Online). Trata-se de uma aplicação React que implementa as funcionalidades básicas de um CRUD de livros, sendo possível:

- Cadastrar livros (Título, Autor(a), Gênero e Data de Leitura).
- Listar todos os livros cadastrados.
- Editar (alterar dados) de um livro existente.
- Excluir livros.
- Navegar entre páginas “Home”, “Sobre”, “Cadastrar” e “Lista de Livros”.

---

## 📁 Estrutura de pastas

reading-journal/
├── node_modules/
├── public/
├── src/
│ ├── assets/ # (opcional) para imagens ou outros recursos estáticos
│ ├── components/ # Componentes reutilizáveis
│ │ ├── NavBar/
│ │ │ ├── NavBar.js
│ │ │ └── NavBar.module.css
│ │ ├── BookForm/
│ │ │ ├── BookForm.js
│ │ │ └── BookForm.module.css
│ │ └── BookList/
│ │ ├── BookList.js
│ │ └── BookList.module.css
│ ├── pages/ # Páginas para rotas
│ │ ├── Home.js
│ │ ├── Home.module.css
│ │ ├── About.js
│ │ └── About.module.css
│ ├── App.js
│ ├── App.module.css
│ ├── index.js
│ └── index.css
├── .gitignore
├── package.json
└── README.md


---

1. Clone este repositório ou copie os arquivos manualmente:

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd reading-journal
2. npm install

3. npm start

Abra o navegador em http://localhost:3000.
Você verá a página inicial do Reading Journal. Navegue pelas abas no menu para cadastrar, listar, editar e excluir livros.
