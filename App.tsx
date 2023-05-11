import 'react-native-gesture-handler';
import React from 'react'
import { useFonts, NunitoSans_400Regular, NunitoSans_200ExtraLight, NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans'

import Home from './src/screens/Home';
import Adocao from './src/screens/Adocao';
import Favoritos from './src/screens/Favoritos';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_200ExtraLight, NunitoSans_600SemiBold})

  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' screenOptions={{drawerPosition: 'right', headerShown: false}}>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Adoção' component={Adocao} />
          <Drawer.Screen name='Favoritos' component={Favoritos} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}