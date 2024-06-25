import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('LoginAdmin')}>
                <Text style={styles.txtbutton}>Login Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('LoginUser')}>
                <Text style={styles.txtbutton}>Login Usuário</Text>
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
