import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { NavBar } from '../components/NavBar'
import { Layout } from '../components/Layout'
import { FilterByButton } from '../components/FilterByButton'

function Home({ navigation }: any) {
  const [gatoFilter, setGatoFilter] = useState(false)
  const [cachorroFilter, setCachorroFilter] = useState(false)

  return (
    <Layout>
      <NavBar navigation={navigation} />

      <View className='w-full px-4 py-6'>
        <Text className='text-2xl'>Filtrar Por</Text>
        <View className='mt-2 flex-row w-full'>
          <FilterByButton
            onPress={() => [setGatoFilter(!gatoFilter), setCachorroFilter(false)]}
            active={gatoFilter}
            img={require("../../assets/gato.png")}
            label="Gato"
          />
          <FilterByButton
            onPress={() => [setCachorroFilter(!cachorroFilter), setGatoFilter(false)]}
            active={cachorroFilter}
            img={require("../../assets/cachorro.png")}
            label="Cachorro"
          />
        </View>
      </View>

    </Layout>
  )
}

export default Home