import {View} from 'react-native'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'


export function Layout({children}:any){
    return (
        <View className='flex-1 bg-white items-center' style={{paddingTop: Constants.statusBarHeight+15}}>
            <StatusBar style='dark' />
            {children}
        </View>
    )
}