import React, {useEffect} from 'react';
import {Image, View, ScrollView, Text, Linking} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Feather, FontAwesome} from '@expo/vector-icons';
import mapMarkerImg from '../../assets/Local.png';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {Orphanage} from '../OrphanagesMap';
import {useRoute} from '@react-navigation/native';
import noImage from '../../assets/noImage.png';

interface RouteParams {
  selectedOrphanageData: Orphanage;
}

const OrphanageDetails: React.FC = () => {
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  const openGoogleMaps = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${routeParams.selectedOrphanageData.latitude},${routeParams.selectedOrphanageData.longitude}`,
    );
  };

  const sendWhatsapp = () => {
    Linking.openURL('whatsapp://send');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {routeParams.selectedOrphanageData.images.length >= 1 ? (
            routeParams.selectedOrphanageData.images.map((orphanageImage) => (
              <Image
                key={orphanageImage.id}
                style={styles.image}
                source={{
                  uri: orphanageImage.url.replace(
                    'localhost',
                    '192.168.15.126',
                  ),
                }}
              />
            ))
          ) : (
            <Image style={styles.image} source={noImage} />
          )}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {routeParams.selectedOrphanageData.name}
        </Text>
        <Text style={styles.description}>
          {routeParams.selectedOrphanageData.about}
        </Text>

        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: routeParams.selectedOrphanageData.latitude,
              longitude: routeParams.selectedOrphanageData.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: routeParams.selectedOrphanageData.latitude,
                longitude: routeParams.selectedOrphanageData.longitude,
              }}
            />
          </MapView>

          <TouchableOpacity
            style={styles.routesContainer}
            onPress={openGoogleMaps}
          >
            <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <Text style={styles.title}>Instruções para visita</Text>
        <Text style={styles.description}>
          {routeParams.selectedOrphanageData.instructions}
        </Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>
              {routeParams.selectedOrphanageData.opening_hours}
            </Text>
          </View>
          {routeParams.selectedOrphanageData.open_on_weekends ? (
            <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
              <Feather name="info" size={40} color="#39CC83" />
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>
                Atendemos fim de semana
              </Text>
            </View>
          ) : (
            <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
              <Feather name="info" size={40} color="#FF669D" />
              <Text style={[styles.scheduleText, styles.scheduleTextRed]}>
                Não atendemos nos fins de semana
              </Text>
            </View>
          )}
        </View>

        <RectButton style={styles.contactButton} onPress={sendWhatsapp}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default OrphanageDetails;
