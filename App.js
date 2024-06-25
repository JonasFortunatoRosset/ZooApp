import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Button } from "react-native";

// Import icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Import your screens
import HomeScreen from "./Screens/Home";
import Ingressos from "./Screens/Ingressos";
import Login from "./Screens/Login";

//Gestão Geral
import AdminCadAltExc from "./Screens/AdminCadAltExc";
import CadastroGeralAdmin from "./Screens/Cadastros/CadastroGeral/CadastroGeralAdmin";
import AltExcGeralAdmin from "./Screens/Alt&Exc/AltExcGeral/AltExcGeralAdmin";

// Cadastro screens
import CadastroAlimento from "./Screens/Cadastros/CadastroAlimentos";
import CadastroAnimal from "./Screens/Cadastros/CadastroAnimais";
import CadastroFornecedor from "./Screens/Cadastros/CadastroFornecedores";
import CadastroFuncionario from "./Screens/Cadastros/CadastroFuncionarios";
import CadastroUsuario from "./Screens/Cadastros/CadastroUsuarios";

//Alt e Exc screens
import AltExcAlimento from "./Screens/Alt&Exc/AltExcAlimentos";
import AltExcAnimal from "./Screens/Alt&Exc/AltExcAnimais";
import AltExcFornecedor from "./Screens/Alt&Exc/AltExcFornecedores";
import AltExcFuncionario from "./Screens/Alt&Exc/AltExcFuncionarios";
import AltExcUsuario from "./Screens/Alt&Exc/AltExcUsuarios";

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
        {/* Home com BottomTabs */}
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
        {/* Tela após o Login */}
        <Stack.Screen 
          name="AfterLoginScreen" 
          component={AfterLoginScreen} 
          options={{
            title: "Admin & User",
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
        {/* Telas Geral de ADM */}
        <Stack.Screen 
          name="AdminCadAltExc" 
          component={AdminCadAltExc} 
          options={{
            title: "Gestão Geral",
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
          name="AltExcGeralAdmin" 
          component={AltExcGeralAdmin} 
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
        {/* Telas de Cadastros */}
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
        {/* Telas de ALterar e Deletar */}
        <Stack.Screen 
          name="AltExcAlimento" 
          component={AltExcAlimento} 
          options={{
            title: "Alterar ou Deletar Alimentos",
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
          name="AltExcAnimal" 
          component={AltExcAnimal} 
          options={{
            title: "Alterar ou Deletar Animais",
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
          name="AltExcFornecedor" 
          component={AltExcFornecedor} 
          options={{
            title: "Alterar ou Deletar Fornecedores",
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
          name="AltExcFuncionario" 
          component={AltExcFuncionario} 
          options={{
            title: "Alterar ou Deletar Funcionários",
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
          name="AltExcUsuario" 
          component={AltExcUsuario} 
          options={{
            title: "Alterar ou Deletar Usuários",
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
