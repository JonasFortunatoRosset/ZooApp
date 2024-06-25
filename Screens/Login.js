import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const submit = async () => {
        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                senha
            });

            if (response.data.success) {
                navigation.navigate("AfterLoginScreen");
                setEmail('');
                setSenha('');
            } else {
                setError('Dados inválidos!');
            }
        } catch (err) {
            setError('Erro na comunicação com o servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={'#666'}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                secureTextEntry={true}
                placeholderTextColor={'#666'}
                value={senha}
                onChangeText={setSenha}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.logbutton} onPress={submit} disabled={loading}>
                <Text style={styles.txtbutton}>{loading ? 'Carregando...' : 'Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('CadastroUsuario')}>
                <Text style={styles.txtbutton}>Cadastrar Usuário</Text>
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
    logbutton: {
        width: '80%',
        height: 50,
        backgroundColor: '#4caf50',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    txtbutton: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'AvenirNext-Medium'
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
}); 
