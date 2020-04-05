import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

//customizando a barra do app
//StatusBar.setBackgroundColor('#E02041');
StatusBar.setBackgroundColor('#000');
StatusBar.setBarStyle('light-content');


import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}