import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Feather} from '@expo/vector-icons';
import mapMarkerIcon from '../../assets/Local.png';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';

export interface Orphanage {
  id: number;
  about: string;
  images: {
    id: number;
    url: string;
  }[];
  instructions: string;
  latitude: number;
  longitude: number;
  name: string;
  open_on_weekends: boolean;
  opening_hours: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    const fetchOrphanages = async () => {
      const response = await api.get('/orphanages');

      setOrphanages(response.data);
    };

    fetchOrphanages();
  }, []);

  const navigator = useNavigation();

  const goToOrphanageDetailsPage = (orphanageId: number) => {
    const selectedOrphanageData = orphanages.find(
      (orphanage: Orphanage) => orphanage.id === orphanageId,
    );

    navigator.navigate('OrphanageDetails', {selectedOrphanageData});
  };

  const goToSelectMapPositionPage = () => {
    navigator.navigate('SelectMapPosition');
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.7723616,
          latitudeDelta: 0.008,
          longitude: -47.3434936,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.id}
            icon={mapMarkerIcon}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout
              tooltip
              onPress={() => goToOrphanageDetailsPage(orphanage.id)}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orfanatos encontrados
        </Text>

        <RectButton
          style={styles.createOrphanageButton}
          onPress={goToSelectMapPositionPage}
        >
          <Feather name="plus" color="#fff" size={22} />
        </RectButton>
      </View>
    </View>
  );
};

export default OrphanagesMap;
