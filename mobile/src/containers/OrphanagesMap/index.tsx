import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Feather} from '@expo/vector-icons';
import mapMarkerIcon from '../../assets/Local.png';
import styles from './styles';

const OrphanagesMap: React.FC = () => {
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
        <Marker
          icon={mapMarkerIcon}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -22.7723616,
            longitude: -47.3434936,
          }}
        >
          <Callout tooltip onPress={() => {}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Orfanato</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity
          style={styles.createOrphanageButton}
          onPress={() => {}}
        >
          <Feather name="plus" color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrphanagesMap;
