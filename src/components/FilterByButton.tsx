import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityComponent } from 'react-native'

interface FilterByButtonProps {
    img: ImageSourcePropType
    label: string
    active?: boolean
    onPress?: () => void
}

export function FilterByButton({ img, label, active, onPress }: FilterByButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} className={`flex flex-row justify-center items-center max-w-[150px] h-[52px] rounded-full ${active ? 'bg-primary' : 'bg-background'}  p-3 mr-3 shadow-sm`}>
            <Image className={`${active ? 'bg-primaryContrast' : 'bg-backgroundConstrast'} rounded-full`} source={img} />
            <Text className={`${active ? 'text-white' : 'text-text'} text-base ml-2`}>{label}</Text>
        </TouchableOpacity>
    )
}