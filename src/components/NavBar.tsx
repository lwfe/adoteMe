import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export function NavBar({navigation}: any){
    return(
        <View className='flex-row justify-between items-center w-full px-4'>
        <TouchableOpacity className='flex-row items-center' onPress={()=>navigation.navigate('Home')}>
          <Image className='w-10 h-10' source={require('../../assets/paw.png')}/>  
          <Text className='text-2xl'>AdoteMe</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
          <Icon name="menu" size={32} color="#FF4757" />
        </TouchableOpacity>
      </View>
    )
}