import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { NavBar } from '../components/NavBar'
import { Layout } from '../components/Layout'
import { FilterByButton } from '../components/FilterByButton'
import { PetCard } from '../components/PetCard'

function Home({ navigation }: any) {
  const [gatoFilter, setGatoFilter] = useState(false)
  const [cachorroFilter, setCachorroFilter] = useState(false)

  var data: petsDTO[] = [
    { animal: 'Gato', image: 'https://images.pexels.com/photos/4178730/pexels-photo-4178730.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Viego', idade: '2 anos', sexo: 'Macho', castrado: false, raça: 'SRD', contatoAdoção: '123321', favorite: true },
    { animal: 'Gato', image: 'https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Peppy', idade: '1 ano', sexo: 'Fêmea', castrado: true, raça: 'Siamês', contatoAdoção: '123321' },
    { animal: 'Gato', image: 'https://images.pexels.com/photos/7210652/pexels-photo-7210652.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Tigrão', idade: '5 anos', sexo: 'Macho', castrado: true, raça: 'Maine Coon', contatoAdoção: '123321', favorite: true },
    { animal: 'Gato', image: 'https://images.pexels.com/photos/1644767/pexels-photo-1644767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', nome: 'Fox', idade: '8 meses', sexo: 'Fêmea', castrado: false, raça: 'Persa', contatoAdoção: '123321' },
    { animal: 'Gato', image: 'https://images.pexels.com/photos/16609385/pexels-photo-16609385.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Diana', idade: '2 anos', sexo: 'Fêmea', castrado: false, raça: 'SRD', contatoAdoção: '123321' },
    { animal: 'Gato', image: 'https://images.pexels.com/photos/15558711/pexels-photo-15558711.jpeg?auto=compress&cs=tinysrgb&w=1600', nome: 'Qyiana', idade: '3 anos', sexo: 'Fêmea', castrado: true, raça: 'SRD', contatoAdoção: '123321' },
  ]

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

      <FlatList className='flex w-full px-4 mb-4' ItemSeparatorComponent={() => <View className='p-2'></View>} data={data} renderItem={({ item }) => <PetCard {...item} />} showsVerticalScrollIndicator={false} />

    </Layout>
  )
}

export default Home