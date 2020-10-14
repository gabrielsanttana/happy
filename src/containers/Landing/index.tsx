import React from 'react';
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import styles from './Landing.module.scss';

const Landing: React.FC = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.landingWrapper}>
        <header>
          <img src={logo} alt="Happy Logo" />

          <div>
            <strong>Americana</strong>
            <span>São Paulo</span>
          </div>
        </header>

        <main>
          <h1>Leve felicidade para o mundo</h1>
        </main>

        <footer>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <Link to="/">
            <FaArrowRight color="#8D734B" size={24} />
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
