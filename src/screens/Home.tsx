import React, { useState } from 'react'
import { Text, View, FlatList, Image, Modal, TouchableOpacity } from 'react-native'

import { NavBar } from '../components/NavBar'
import { Layout } from '../components/Layout'
import { FilterByButton } from '../components/FilterByButton'
import { PetCard } from '../components/PetCard'
import { PetModal } from '../components/PetModal'

import { usePets } from '../store/usePets'
import { useFavoritePets } from '../store/useFavoritePets'
import { useSelectedPet } from '../store/useSelectedPet'


function Home({ navigation }: any) {
  const { data } = usePets()
  const { favorites } = useFavoritePets()
  const { selectedPet, setSelectedPet } = useSelectedPet()

  const [gatoFilter, setGatoFilter] = useState(false)
  const [cachorroFilter, setCachorroFilter] = useState(false)
  const [showModal, setShowModal] = useState(false)
  // const [selectedPet, setSelectedPet] = useState<petsDTO>({})

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

      <FlatList
        className='flex w-full px-4 mb-4'
        ItemSeparatorComponent={() => <View className='p-2'></View>}
        data={data}
        renderItem={({ item }) =>
          <PetCard
            key={item.id}
            pet={item}
            isFavorite={favorites.includes(item.id)}
            onPress={() => [setSelectedPet(item), setShowModal(!showModal)]}
          />
        }
        ListEmptyComponent={() =>
          <View className='flex h-60 items-center justify-center'>
            <Image className='w-16 h-16' source={require('../../assets/gatinho-triste.png')} />
            <Text className='mt-4 font-light text-sm text-center text-text'>Ainda não há nenhum amiguinho</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />

      {showModal &&
        <PetModal
          pet={selectedPet}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }


    </Layout>
  )
}

export default Home