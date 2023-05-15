import { useState } from "react"
import { Image, Text, Modal, TouchableOpacity, View } from "react-native"

import Ionicons from 'react-native-vector-icons/Ionicons'

export function PetModal() {
    const [showModal, setShowModal] = useState(false)

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
                <View className='h-2/3 bg-white mt-auto rounded-t-3xl'>
                    <Image className='h-60 bg-contain rounded-t-2xl' source={{ uri: 'https://images.pexels.com/photos/4178730/pexels-photo-4178730.jpeg?auto=compress&cs=tinysrgb&w=1600' }} />
                    <TouchableOpacity className='absolute top-2 right-2 w-10 h-10  justify-center items-center rounded-full shadow-sm bg-background' onPress={() => setShowModal(!showModal)}>
                        <Ionicons name='close' size={24} />
                    </TouchableOpacity>
                    <View className='px-4 py-4'>
                        <Text className='text-3xl'>Viego</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}