import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BookList.module.css';

const BookList = ({ books, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editar/${id}`);
  };

  return (
    <div className={styles.listContainer}>
      <h2>Lista de Livros</h2>
      {books.length === 0 ? (
        <p>Nenhum livro cadastrado.</p>
      ) : (
        <ul className={styles.ulList}>
          {books.map((book) => (
            <li key={book.id} className={styles.bookItem}>
              <div>
                <strong>{book.title}</strong> – {book.author} – {book.genre} – {book.dateRead}
              </div>
              <div className={styles.buttons}>
                <button
                  onClick={() => handleEdit(book.id)}
                  className={styles.editButton}
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(book.id)}
                  className={styles.deleteButton}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
