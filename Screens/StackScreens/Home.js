//Drawer
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//React-Native components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Import Drawer pages
import RegisterAnimals from './Screens/DrawerScreens/Register/RegisterAnimals';
import SettingsScreen from './Screens/DrawerScreens/Settings/Settings';
import RegisterSuppliers from './Screens/DrawerScreens/Register/RegisterSuppliers';
import RegisterUsers from './Screens/DrawerScreens/Register/RegisterUsers';
import RegisterWorkers from './Screens/DrawerScreens/Register/RegisterWorkers';

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          {/* Register/Cadastro */}
          <Drawer.Screen name="Cadastrar Animais" component={RegisterAnimals}/>
          <Drawer.Screen name="Cadastrar Comidas" component={RegisterFoods}/>
          <Drawer.Screen name="Cadastrar Fornecedores" component={RegisterSuppliers}/>
          <Drawer.Screen name="Cadastrar Usuários" component={RegisterUsers}/>
          <Drawer.Screen name="Cadastrar Funcionários" component={RegisterWorkers}/>
          {/* COnfigurações/Settings */}
          <Drawer.Screen name="Configurações" component={Settings}/>
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
