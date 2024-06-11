import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Login({ navigation }) {
    
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    function submit(){
        if (username === '' && password === ''){
            navigation.navigate("Home")

            setUsername('')
            setPassword('')
        }
        else{
            alert('Dados inválidos!')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={'#666'}
                value={username}
                onChangeText={setUsername}
                />
            

            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={'#666'}
                value={password}
                onChangeText={setPassword}/>

            <TouchableOpacity style={styles.button} onPress={submit}>
                <Text style={styles.txtbutton}>Entrar</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    color: '#388e3c',
    fontFamily: 'AvenirNext-DemiBold' 
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 18,
    color: '#333',
    fontFamily: 'Avenir-Roman'
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#4caf50', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtbutton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'AvenirNext-Medium'
  },
});