import Constants from 'expo-constants'
import { Text, TouchableOpacity, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Feather';

export default function CustomDrawerMenu(props: any) {
    return (
        <View className="flex-1" style={{ paddingTop: Constants.statusBarHeight + 16 }}>
            <View className='w-full flex-row-reverse px-4'>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <Icon name="x" size={32} color={'#FF4757'} />
                </TouchableOpacity>
            </View>
            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}