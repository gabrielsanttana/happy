import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import OrphanagesMap from './containers/OrphanagesMap';

const {Navigator, Screen} = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
