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

Descrição dos componentes
1. NavBar

    Localização: src/components/NavBar/NavBar.js

    Responsabilidade: Exibe a barra de navegação fixa no topo, com links para as páginas:

        “Página Inicial” (/)

        “Sobre” (/sobre)

        “Lista de Livros” (/lista)

        “Cadastrar” (/cadastrar)

2. BookForm

    Localização: src/components/BookForm/BookForm.js

    Responsabilidade: Formulário para “Cadastrar” ou “Editar” um livro.

        Quando em modo de cadastro (isEditing = false), chama a prop onAdd({ title, author, genre, dateRead }).

        Quando em modo de edição (isEditing = true), carrega os dados do livro (com base no id da URL) e chama onUpdate({ id, title, author, genre, dateRead }).

        Implementa validação básica (todos os campos obrigatórios) e exibe mensagens de erro caso o usuário tente enviar o formulário vazio.

3. BookList

    Localização: src/components/BookList/BookList.js

    Responsabilidade:

        Recebe via props uma lista de livros (books) e a função onDelete(id).

        Exibe cada livro (título, autor, gênero, data de leitura) em uma lista.

        Para cada item, há botões “Editar” (redireciona para /editar/:id) e “Excluir” (chama onDelete(id)).

4. Home

    Localização: src/pages/Home.js

    Responsabilidade: Página inicial de boas‐vindas (/). Texto estático “Bem‐vindo ao Reading Journal!”.

5. About

    Localização: src/pages/About.js

    Responsabilidade: Página “Sobre” (/sobre) com breve descrição do projeto e menção à disciplina PUCRS.

6. App

    Localização: src/App.js

    Responsabilidade:

        Configura as rotas (usando react-router-dom@6):

            / → Home

            /sobre → About

            /cadastrar → BookForm (modo cadastro)

            /editar/:id → BookForm (modo edição)

            /lista → BookList

        Mantém o estado global de livros (books) usando useState.

        Fornece as funções de adicionar, remover e atualizar livros, que são passadas como props para os componentes correspondentes.
