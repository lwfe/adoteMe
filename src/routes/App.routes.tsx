import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Adocao from "../screens/Adocao";
import Favoritos from "../screens/Favoritos";
import CustomDrawerMenu from "../components/CustomDrawerMenu";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator()

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={props => <CustomDrawerMenu {...props} />}
                screenOptions={{
                    drawerPosition: 'right',
                    headerShown: false,
                    drawerType: 'front',
                    drawerLabelStyle: { marginLeft: -25, fontSize: 18 },
                    drawerActiveBackgroundColor: 'rgba(255,107,129,0.3)',
                    drawerActiveTintColor: '#FF4757'
                }}
            >
                <Drawer.Screen name='Home' component={Home}
                    options={{ drawerIcon: ({ color }) => (<MaterialCommunityIcons name='home' size={32} color={color} />) }}
                />
                < Drawer.Screen name='Doar' component={Adocao}
                    options={{ drawerIcon: ({ color }) => (<MaterialCommunityIcons name='hand-heart-outline' size={32} color={color} />) }}
                />
                <Drawer.Screen name='Favoritos' component={Favoritos}
                    options={{ drawerIcon: ({ color }) => (<MaterialCommunityIcons name='heart' size={32} color={color} />) }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
} 