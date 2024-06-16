import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import Login from "./Screens/StackScreens/Login";
import HomeScreen from "./Screens/BottomTabsScreens/Home";
import Ingressos from "./Screens/BottomTabsScreens/Ingressos";
import Login from "./Screens/BottomTabsScreens/Login";

//Users
import CadastroUsuario from "./Screens/BottomTabsScreens/Register/CadastroUsuario";

//icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Axios
import axios from "axios";
import CadastroUsuario from "./Screens/BottomTabsScreens/Register/CadastroUsuario";

function HomeTabs(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "lightgreen",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Ingressos"
          component={Ingressos}
          options={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "lightgreen",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ticket-outline" size={24} color="black" />
            ),
          }}/>
        <Tab.Screen name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "lightgreen",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="login" size={24} color="black" />
            ),
          }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name ="Home" component={HomeTabs}/>
                <Stack.Screen name ="Cadastro de Usuários" component={CadastroUsuario}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}