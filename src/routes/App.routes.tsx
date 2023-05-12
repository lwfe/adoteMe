import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Adocao from "../screens/Adocao";
import Favoritos from "../screens/Favoritos";

const Drawer = createDrawerNavigator()

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home' screenOptions={{ drawerPosition: 'right', headerShown: false }}>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Adoção' component={Adocao} />
                <Drawer.Screen name='Favoritos' component={Favoritos} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
} 