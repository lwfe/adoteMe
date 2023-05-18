import { ActivityIndicator } from "react-native";

export function Loading() {
    return (
        <ActivityIndicator color={'#fff'} className='absolute z-50 bg-[#00000090] w-screen h-screen' />
    )
}