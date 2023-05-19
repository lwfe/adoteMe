import { Text, View, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView } from 'react-native'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { Layout } from '../components/Layout'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Input from '../components/Input'

function Adocao({ navigation }: any) {
  return (
    <Layout>
      <NavBar navigation={navigation} />

      <KeyboardAvoidingView behavior='padding' className=' w-full px-4 mt-4' style={{ flex: 1 }} enabled>
        <Text className='text-2xl text-text self-start'>Dados do Pet</Text>

        <TouchableOpacity className='w-full' onPress={() => { }}>
          <View className='flex w-full justify-center items-center p-8 border border-dashed mt-4'>
            <SimpleLineIcons name='cloud-upload' size={48} color={'#FF6B81'} />
            <Text className='font-light text-text text-base'>Faça upload da imagem do pet</Text>
          </View>
        </TouchableOpacity>

        <KeyboardAvoidingView className='flex w-full'>
          <View className='flex flex-row mt-3'>
            <Input value='' label='Animal' placeholder='Ex: Gato' />
          </View>
          <View className='flex flex-row mt-4'>
            <Input value='' label='Nome' placeholder='Ex: Viego' />
            <Input value='' label='Idade' placeholder='Ex: 2 Anos' marginLeft />
          </View>
          <View className='flex flex-row mt-3'>
            <Input value='' label='Sexo' placeholder='Ex: Macho' />
            <Input value='' label='Castrado?' placeholder='Ex: SIM' marginLeft />
          </View>
          <View className='flex flex-row mt-3'>
            <Input value='' label='Raça' placeholder='Ex: Maine Coon' />
          </View>
          <View className='flex flex-row mt-3'>
            <Input value='' label='Contato para Adoção' placeholder='Ex: (73) 91234-5678' />
          </View>
        </KeyboardAvoidingView>

        <View className='mt-6 w-full'>
          <TouchableOpacity className="bg-primary flex-row items-center justify-center h-11 shadow-sm rounded-md">
            <Image className="w-6 h-6" source={require('../../assets/paw.png')} />
            <Text className="pl-2 text-xl text-white">AdoteMe</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

    </Layout>
  )
}

export default Adocao