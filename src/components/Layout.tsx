import { View } from 'react-native'
import Constants from 'expo-constants'


export function Layout({ children }: any) {
    return (
        <View className='flex-1 bg-backgroundConstrast items-center' style={{ paddingTop: Constants.statusBarHeight + 15 }}>
            {children}
        </View>
    )
}