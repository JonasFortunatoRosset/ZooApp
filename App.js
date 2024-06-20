import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Button } from "react-native";

// Import your screens
import HomeScreen from "./Screens/Home";
import Ingressos from "./Screens/Ingressos";
import Login from "./Screens/Login";
// Cadastro screens
import CadastroGeralAdmin from "./Screens/Cadastros/CadastroGeralAdmin";
import CadastroAlimento from "./Screens/Cadastros/CadastroAlimentos";
import CadastroAnimal from "./Screens/Cadastros/CadastroAnimais";
import CadastroFornecedor from "./Screens/Cadastros/CadastroFornecedores";
import CadastroFuncionario from "./Screens/Cadastros/CadastroFuncionarios";
import CadastroUsuario from "./Screens/Cadastros/CadastroUsuarios";


// Import icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
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
      <Tab.Screen 
        name="Ingressos"
        component={Ingressos}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ticket-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="login" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeTabs} 
          options={{
            title: "ZooApp",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: 'green', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
          }}
        />
        <Stack.Screen 
          name="CadastroGeralAdmin" 
          component={CadastroGeralAdmin} 
          options={{
            title: "Todos os cadastros",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: 'green', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'green', // Color of the back button text
            },
          }}
        />
        <Stack.Screen 
          name="CadastroAlimento" 
          component={CadastroAlimento} 
          options={{
            title: "Cadastro de Alimentos",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: 'green', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'green', // Color of the back button text
            },
          }}
        />
        <Stack.Screen 
          name="CadastroAnimal" 
          component={CadastroAnimal} 
          options={{
            title: "Cadastro de Animais",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: 'green', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'green', // Color of the back button text
            },
          }}
        />
        <Stack.Screen 
          name="CadastroFornecedor" 
          component={CadastroFornecedor} 
          options={{
            title: "Cadastro de Fornecedores",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: 'green', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'green', // Color of the back button text
            },
          }}
        />
        <Stack.Screen 
          name="CadastroFuncionario" 
          component={CadastroFuncionario} 
          options={{
            title: "Cadastro de Funcionários",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: 'green', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'green', // Color of the back button text
            },
          }}
        />
        <Stack.Screen 
          name="CadastroUsuario" 
          component={CadastroUsuario} 
          options={{
            title: "Cadastro de Usuários",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: 'green', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'green', // Color of the back button text
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
