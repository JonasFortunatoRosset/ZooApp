import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginAdmin({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async () => {
        // Reset error message
        setError('');

        if (email === 'admin' && senha === '123') {
            setLoading(true); // Set loading state
            navigation.navigate('AdminCadAltExc');
        } else {
            setError('Email ou senha incorretos.'); // Set error message
        }
        setLoading(false); // Reset loading state
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
                <Text style={styles.txtbutton}>{loading ? 'Carregando...' : 'Login & Gestão de Usuários'}</Text>
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
