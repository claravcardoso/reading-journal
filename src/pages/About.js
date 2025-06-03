import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>Sobre</h1>
      <p>
        Esta é uma aplicação para um CRUD de um Reading Journal. Este projeto foi
        elaborado na Disciplina Desenvolvimento de Sistemas Frontend do Curso de
        Graduação Online da PUCRS.
      </p>
    </div>
  );
};

export default About;
