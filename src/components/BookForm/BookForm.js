import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BookForm.module.css';

const BookForm = ({ onAdd, onUpdate, books, isEditing }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [dateRead, setDateRead] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditing && id && books) {
      const bookToEdit = books.find((b) => b.id === parseInt(id));
      if (bookToEdit) {
        setTitle(bookToEdit.title);
        setAuthor(bookToEdit.author);
        setGenre(bookToEdit.genre);
        setDateRead(bookToEdit.dateRead);
      }
    }
  }, [isEditing, id, books]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Título é obrigatório.';
    if (!author.trim()) newErrors.author = 'Autor(a) é obrigatório.';
    if (!genre.trim()) newErrors.genre = 'Gênero é obrigatório.';
    if (!dateRead.trim()) newErrors.dateRead = 'Data de leitura é obrigatória.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const payload = { title, author, genre, dateRead };
      if (isEditing) {
        onUpdate({ id: parseInt(id), ...payload });
      } else {
        onAdd(payload);
      }
      navigate('/lista');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>{isEditing ? 'Editar Livro' : 'Cadastrar Livro'}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className={styles.error}>{errors.title}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="author">Autor(a):</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && <span className={styles.error}>{errors.author}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="genre">Gênero:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          {errors.genre && <span className={styles.error}>{errors.genre}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="dateRead">Data de Leitura:</label>
          <input
            type="date"
            id="dateRead"
            value={dateRead}
            onChange={(e) => setDateRead(e.target.value)}
          />
          {errors.dateRead && <span className={styles.error}>{errors.dateRead}</span>}
        </div>

        <button type="submit" className={styles.submitButton}>
          {isEditing ? 'Atualizar' : 'Adicionar'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
