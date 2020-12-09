import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Header from './components/Header';
import OrphanageDetails from './containers/OrphanageDetails';
import OrphanagesMap from './containers/OrphanagesMap';

const {Navigator, Screen} = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#f2f3f5'},
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
