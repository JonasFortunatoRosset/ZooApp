//React Navigation
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';

//BottomTabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//React-Native components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Import icons
import { AntDesign } from '@expo/vector-icons';

//Import BottomTabs pages
import HomeTabs from './Screens/BottomTabsScreens/TabItems/Home';
import Profile from './Screens/BottomTabsScreens/TabItems/Profile';
import Notification from './Screens/BottomTabsScreens/TabItems/Notifications';

//Const Tabs
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    /* BottomTabs Navigation */
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Principal" component={HomeTabs} options={{
              tabBarLabelPosition: "below-icon",
              tabBarShowLabel: true,
              tabBarActiveTintColor: "green",
              tabBarInactiveTintColor: "lightgreen",
            }}/>
            <Tab.Screen name="Perfil" component={Profile} options={{
              tabBarLabelPosition: "below-icon",
              tabBarShowLabel: true,
              tabBarActiveTintColor: "green",
              tabBarInactiveTintColor: "lightgreen",
            }}/>
            <Tab.Screen name="Notificações" component={Notification} options={{
              tabBarLabelPosition: "below-icon",
              tabBarShowLabel: true,
              tabBarActiveTintColor: "green",
              tabBarInactiveTintColor: "lightgreen",
            }}/> 
        </Tab.Navigator>
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
