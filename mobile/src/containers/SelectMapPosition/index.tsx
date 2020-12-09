import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import mapMarkerImg from '../../assets/Local.png';
import styles from './styles';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();

  const goToCreateOrphanagePage = () => {
    navigation.navigate('CreateOrphanage');
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{latitude: -27.2092052, longitude: -49.6401092}}
        />
      </MapView>

      <RectButton style={styles.nextButton} onPress={goToCreateOrphanagePage}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </View>
  );
};

export default SelectMapPosition;
