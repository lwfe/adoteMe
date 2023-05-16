import { Image, Text, Modal, TouchableOpacity, View } from "react-native"

import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import { useFavoritePets } from "../store/useFavoritePets"

interface PetModalProps {
    pet: petsDTO
    showModal: any
    setShowModal: any
}

export function PetModal({ pet, showModal, setShowModal }: PetModalProps) {
    const { favorites, addFavorite, removeFavorite } = useFavoritePets()

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal)
            }}
        >
            <View className='h-full bg-[#0000008b]'>
                <TouchableOpacity onPress={() => setShowModal(!showModal)} className="w-full h-full"></TouchableOpacity>
                <View className='h-3/4 bg-white mt-auto rounded-t-3xl'>
                    <Image className='h-80 rounded-t-2xl' source={{ uri: pet.image }} resizeMode="cover" />
                    <TouchableOpacity className='absolute top-2 right-2 w-10 h-10  justify-center items-center rounded-full shadow-sm bg-background' onPress={() => setShowModal(!showModal)}>
                        <Ionicons name='close' size={24} />
                    </TouchableOpacity>

                    <View className="px-8 py-4 flex-1 justify-between">
                        <View>
                            <View className='flex-row items-center gap-2'>
                                <Text className='text-3xl'>{pet.nome}</Text>
                                {pet.sexo === 'Fêmea' ?
                                    <Foundation name="female-symbol" size={32} color={"#FF6B81"} />
                                    :
                                    <Foundation name="male-symbol" size={32} color={"#70A1FF"} />
                                }
                            </View>
                            <Text className="text-lg font-extralight">{pet.raça}</Text>

                            <View className="pt-3 w-full flex-row space-x-2 bg-background">
                                {pet.idade &&
                                    <View className="bg-[#ff6b814d] px-2 py-1 rounded-full">
                                        <Text className="text-sm text-primaryContrast">{pet.idade.toUpperCase()}</Text>
                                    </View>
                                }
                                <View className="bg-[#ff6b814d] px-2 py-1 rounded-full">
                                    {pet.castrado ? <Text className="text-sm text-primaryContrast">CASTRADO</Text> : <Text className="text-sm text-primaryContrast">NÃO CASTRADO</Text>}
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity className="bg-primary flex-row items-center justify-center h-11 shadow-sm rounded-md">
                            <Image className="w-6 h-6" source={require('../../assets/paw.png')} />
                            <Text className="pl-2 text-xl text-white">AdoteMe</Text>
                        </TouchableOpacity>

                        {favorites.includes(pet.id) ?
                            <TouchableOpacity
                                className="absolute -top-5 right-6  w-12 h-12 bg-background rounded-full shadow align-center justify-center items-center"
                                onPress={() => removeFavorite(pet.id)}
                            >
                                <FontAwesome name="heart" size={24} color={'#ff6b81'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                className="absolute -top-5 right-6  w-12 h-12 bg-background rounded-full shadow align-center justify-center items-center"
                                onPress={() => addFavorite(pet.id)}
                            >
                                <FontAwesome name="heart-o" size={24} color={'#ff6b81'} />
                            </TouchableOpacity>
                        }
                    </View>

                </View>
            </View>
        </Modal>
    )
}