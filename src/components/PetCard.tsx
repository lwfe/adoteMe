import { Image, Text, TouchableOpacity, View } from "react-native";

import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { useFavoritePets } from "../store/useFavoritePets";

interface PetCardProps {
    pet: petsDTO
    isFavorite?: boolean
    onPress?: () => void
}

export function PetCard({ pet, isFavorite, onPress }: PetCardProps) {
    const { addFavorite, removeFavorite } = useFavoritePets()

    return (
        <TouchableOpacity onPress={onPress} className="flex-row p-2 bg-background rounded-3xl shadow">
            <Image className="w-28 h-28 rounded-3xl" source={{ uri: pet.image }} />
            <View className="ml-4 flex justify-between bg-background">
                <View>
                    <View className="flex-row items-center">
                        <Text className="text-2xl mr-2">{pet.nome}</Text>
                        {pet.sexo === 'Fêmea' ?
                            <Foundation name="female-symbol" size={24} color={"#FF6B81"} />
                            :
                            <Foundation name="male-symbol" size={24} color={"#70A1FF"} />
                        }
                    </View>
                    <Text className="text-base font-extralight">{pet.raça}</Text>
                </View>
                <View className="w-full flex-row space-x-2 bg-background">
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


            {isFavorite ?
                <TouchableOpacity
                    className="absolute top-3 right-3  w-9 h-9 bg-background rounded-full shadow align-center justify-center items-center"
                    onPress={() => removeFavorite(pet.id)}
                >
                    <FontAwesome name="heart" size={22} color={'#ff6b81'} />
                </TouchableOpacity>
                :
                <TouchableOpacity
                    className="absolute top-3 right-3  w-9 h-9 bg-background rounded-full shadow align-center justify-center items-center"
                    onPress={() => addFavorite(pet.id)}
                >
                    <FontAwesome name="heart-o" size={22} color={'#ff6b81'} />
                </TouchableOpacity>
            }

        </TouchableOpacity>
    )
}