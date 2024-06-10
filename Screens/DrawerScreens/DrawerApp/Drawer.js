//React Navigation
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';

//Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';


//React-Native components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Import Drawer pages
import RegisterAnimals from './Screens/DrawerScreens/Register/RegisterAnimals';
import RegisterFoods from './Screens/DrawerScreens/Register/RegisterFoods';
import RegisterSuppliers from './Screens/DrawerScreens/Register/RegisterSuppliers';
import RegisterUsers from './Screens/DrawerScreens/Register/RegisterUsers';
import RegisterWorkers from './Screens/DrawerScreens/Register/RegisterWorkers';
import Settings from './Screens/DrawerScreens/Settings/Settings';

//Const Drawer
const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        {/* Drawer Navigations */}
        <Drawer.Navigator>
          {/* Register/Cadastro */}
          <Drawer.Screen name="Cadastrar Animais" component={RegisterAnimals} options={{
            title: "Cadastrar Animais",
            drawerLabel: "Cadastro de Animais",
            drawerActiveTintColor: "green",
            drawerActiveBackgroundColor: "lightgreen",
            drawerContentStyle: {
              backgroundColor: "white"
            }
            }}/>
          <Drawer.Screen name="Cadastrar Comidas" component={RegisterFoods} options={{
            title: "Cadastrar Comidas",
            drawerLabel: "Cadastro de Comidas",
            drawerActiveTintColor: "green",
            drawerActiveBackgroundColor: "lightgreen",
            drawerContentStyle: {
              backgroundColor: "white"
            }
            }}/>
          <Drawer.Screen name="Cadastrar Fornecedores" component={RegisterSuppliers} options={{
            title: "Cadastrar Fornecedores",
            drawerLabel: "Cadastro de Fornecedores",
            drawerActiveTintColor: "green",
            drawerActiveBackgroundColor: "lightgreen",
            drawerContentStyle: {
              backgroundColor: "white"
            }
            }}/>
          <Drawer.Screen name="Cadastrar Usuários" component={RegisterUsers} options={{
            title: "Cadastrar Usuários",
            drawerLabel: "Cadastro de Usuários",
            drawerActiveTintColor: "green",
            drawerActiveBackgroundColor: "lightgreen",
            drawerContentStyle: {
              backgroundColor: "white"
            }
            }}/>
          <Drawer.Screen name="Cadastrar Funcionários" component={RegisterWorkers} options={{
            title: "Cadastrar Funcionários",
            drawerLabel: "Cadastro de Funcionários",
            drawerActiveTintColor: "green",
            drawerActiveBackgroundColor: "lightgreen",
            drawerContentStyle: {
              backgroundColor: "white"
            }
            }}/>
          {/* Configurações/Settings */}
          <Drawer.Screen name="Configurações" component={Settings} options={{
            title: "Configurações e Privacidade",
            drawerLabel: "Configurações",
            drawerActiveTintColor: "green",
            drawerActiveBackgroundColor: "lightgreen",
            drawerContentStyle: {
              backgroundColor: "white"
            }
            }}/>
        </Drawer.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
