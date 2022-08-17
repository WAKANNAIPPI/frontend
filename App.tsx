import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constellation_Creation from './src/Screen/Constellation_Creation';
import HomeApp from './src/Screen/Home';

export default function App() {

  const Stack = createStackNavigator();

  return (   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeApp" component={HomeApp} />
        <Stack.Screen name="Constellation_Creation" component={Constellation_Creation} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}


