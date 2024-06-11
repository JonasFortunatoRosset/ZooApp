import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
/* import { Ionicons } from '@expo/vector-icons'; */

//Import Stack Register
import RegisterAnimals from '../StackScreens/Register/RegisterAnimals';
import RegisterFoods from '../StackScreens/Register/RegisterFoods';
import RegisterSuppliers from '../StackScreens/Register/RegisterSuppliers';
import RegisterUsers from '../StackScreens/Register/RegisterUsers';
import RegisterWorkers from '../StackScreens/Register/RegisterWorkers';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterAnimals')}>
        <Text style={styles.buttonText}>Cadastrar Animais</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterFoods')}>
        <Text style={styles.buttonText}>Cadastrar Comidas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterSuppliers')}>
        <Text style={styles.buttonText}>Cadastrar Fornecedores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterUsers')}>
        <Text style={styles.buttonText}>Cadastrar Usuários</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterWorkers')}>
        <Text style={styles.buttonText}>Cadastrar Funcionários</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Register() {
  const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Cadastro' }}/>
                <Stack.Screen name ="Cadastro de Animais" component={RegisterAnimals}/>
                <Stack.Screen name ="Cadastro de Comidas" component={RegisterFoods}/>
                <Stack.Screen name ="Cadastro de Fornecedores" component={RegisterSuppliers}/>
                <Stack.Screen name ="Cadastro de Usuários" component={RegisterUsers}/>
                <Stack.Screen name ="Cadastro de Funcionários" component={RegisterWorkers}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'AvenirNext-Medium'
  },
});
