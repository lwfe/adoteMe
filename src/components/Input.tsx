import React from 'react'
import { Text, TextInput, View } from 'react-native'

interface InputProps {
    value: any
    label: string
    marginLeft?: boolean
    placeholder?: string
}

export default function Input({ value, label, marginLeft, placeholder }: InputProps) {
    return (
        <View className={`flex flex-1 ${marginLeft ? 'ml-2' : ''}`}>
            <Text className='text-base text-primaryContrast'>{label}</Text>
            <TextInput className='w-full p-2 h-10 border rounded-sm text-base border-contrast ' placeholderTextColor={'#00000033'} value={value} placeholder={placeholder} />
        </View>
    )
}
