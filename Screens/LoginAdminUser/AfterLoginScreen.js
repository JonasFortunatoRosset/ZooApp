import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AfterLoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdminCadAltExc')}>
                <Text style={styles.buttonText}>Admin</Text>
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
