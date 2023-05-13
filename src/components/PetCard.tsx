import { Image, Text, TouchableOpacity, View } from "react-native";
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export function PetCard(pet: petsDTO) {
    return (
        <TouchableOpacity className="flex-row p-2 bg-background rounded-3xl shadow">
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

            <TouchableOpacity className="absolute top-2 right-2  w-10 h-10 bg-background rounded-full shadow align-center justify-center items-center">
                {pet.favorite ?
                    <FontAwesome name="heart" size={24} color={'#ff6b81'} />
                    :
                    <FontAwesome name="heart-o" size={24} color={'#ff6b81'} />
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}