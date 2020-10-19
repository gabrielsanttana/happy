import React from 'react';
import {FaPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import locationIcon from '../../assets/location.svg';
import styles from './OrphanagesMap.module.scss';

const OrphanagesMap: React.FC = () => {
  return (
    <div className={styles.orphanagesMap}>
      <aside>
        <header>
          <img src={locationIcon} alt="Location Icon" />

          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Americana</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <main>
        <Link to="button">
          <FaPlus color="#fff" size={24} />
        </Link>
      </main>
    </div>
  );
};

export default OrphanagesMap;
