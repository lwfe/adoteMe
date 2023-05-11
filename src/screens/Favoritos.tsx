import React from 'react'
import { Text } from 'react-native'
import { NavBar } from '../components/NavBar';
import { Layout } from '../components/Layout';

function Favoritos({navigation}: any){
  return (
    <Layout>
      <NavBar navigation={navigation} />
      <Text>Favoritos Screen</Text>
    </Layout>
  )
}

export default Favoritos