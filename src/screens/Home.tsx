import React from 'react'
import { Text} from 'react-native'
import { NavBar } from '../components/NavBar';
import { Layout } from '../components/Layout';

function Home({navigation}:any){
  return (
    <Layout>
      <NavBar navigation={navigation} />
      <Text>Home Screen</Text>
    </Layout>
  )
}

export default Home