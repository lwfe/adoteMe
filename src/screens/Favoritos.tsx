import React from 'react'
import { FlatList, Text, View, Image } from 'react-native'

import { NavBar } from '../components/NavBar';
import { Layout } from '../components/Layout';
import { PetCard } from '../components/PetCard';

import { usePets } from '../store/usePets';
import { useFavoritePets } from '../store/useFavoritePets';

function Favoritos({ navigation }: any) {
  const { data } = usePets()
  const { favorites } = useFavoritePets()

  const FilteredData = data.filter(pet => favorites.includes(pet.id))

  return (
    <Layout>
      <NavBar navigation={navigation} />
      <View className='w-full px-4 py-6'>
        <Text className='text-2xl'>Favoritos</Text>
      </View>
      <FlatList
        className='flex w-full h-full px-4 mb-4'
        ItemSeparatorComponent={() => <View className='p-2'></View>}
        data={FilteredData}
        renderItem={({ item }) =>
          <PetCard
            key={item.id}
            pet={item}
            isFavorite={favorites.includes(item.id)}
          />
        }
        ListEmptyComponent={() =>
          <View className='flex h-60 items-center justify-center'>
            <Image className='w-16 h-16' source={require('../../assets/gatinho-triste.png')} />
            <Text className='mt-4 font-light text-sm text-center text-text'>Você ainda não favoritou nenhum amiguinho</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </Layout >
  )
}

export default Favoritos