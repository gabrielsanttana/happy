import React from 'react';
import {Map, TileLayer} from 'react-leaflet';
import {FaPlus} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import locationIcon from '../../assets/location.svg';
import 'leaflet/dist/leaflet.css';
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
        <Map
          center={[-22.7438, -47.335756]}
          zoom={15}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <TileLayer url="https://a.tile.openstreepmap.org/{z}/{x}/{y}.png" />
        </Map>

        <Link to="button">
          <FaPlus color="#fff" size={24} />
        </Link>
      </main>
    </div>
  );
};

export default OrphanagesMap;
