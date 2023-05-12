import 'react-native-gesture-handler'

import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import AppRoutes from './src/routes/App.routes'

export default function App() {
  return (
    <View className='flex-1'>
      <StatusBar style='dark' />
      <AppRoutes />
    </View>
  );
}