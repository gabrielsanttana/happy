import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import OrphanageDetails from './containers/OrphanageDetails';
import OrphanagesMap from './containers/OrphanagesMap';

const {Navigator, Screen} = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetails} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
