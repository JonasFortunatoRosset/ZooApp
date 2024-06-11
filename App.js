import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./Screens/StackScreens/Login";
import Home from "./Screens/BottomTabsScreens/Home";
import Feed from "./Screens/BottomTabsScreens/Feed";
import Register from "./Screens/BottomTabsScreens/Register";
import Settings from "./Screens/BottomTabsScreens/Settings";

function HomeTabs(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown:false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",}}/>
        <Tab.Screen name="Feed" component={Feed} options={{
          headerShown:false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",}}/>
        <Tab.Screen name="Register" component={Register} options={{
          headerShown:false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",}}/>
        <Tab.Screen name="Settings" component={Settings} options={{
          headerShown:false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",}}/>
    </Tab.Navigator>
  )
}

export default function App() {
  
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="Login" component={Login}/>
                <Stack.Screen name ="Home" component={HomeTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}