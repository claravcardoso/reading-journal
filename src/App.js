// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import styles from './App.module.css';

function App() {
  // Estado global de livros (array de objetos)
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Tropas Estelares',
      author: 'Robert Heinlein',
      genre: 'Ficção Científica',
      dateRead: '2024-08-16'
    },
    {
      id: 2,
      title: 'Um verão italiano',
      author: 'Rebecca Serle',
      genre: 'Romance',
      dateRead: '2024-08-31'
    },
    {
      id: 3,
      title: 'Vou te receber um gato',
      author: 'Suy Inkie',
      genre: 'Conto',
      dateRead: '2024-09-19'
    },
  ]);

  // Função para adicionar um livro
  const addBook = (newBook) => {
    const nextId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    setBooks([...books, { id: nextId, ...newBook }]);
  };

  // Função para remover um livro por id
  const removeBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  // Função para editar um livro existente
  const updateBook = (updatedBook) => {
    setBooks(books.map(b => (b.id === updatedBook.id ? updatedBook : b)));
  };

  return (
    <div className={styles.appContainer}>
      <NavBar />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route
            path="/cadastrar"
            element={<BookForm onAdd={addBook} />}
          />
          <Route
            path="/editar/:id"
            element={
              <BookForm
                books={books}
                onUpdate={updateBook}
                isEditing
              />
            }
          />
          <Route
            path="/lista"
            element={<BookList books={books} onDelete={removeBook} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
