import {  Text } from 'react-native'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { Layout } from '../components/Layout'

function Adocao({navigation}: any){
  return (
    <Layout>
      <NavBar navigation={navigation} />
      <Text>Adoção Screen</Text>
    </Layout>
  )
}

export default Adocao