import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function AltExcGeralAdmin({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Telas de Alterar & Deletar</Text>

            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('AltExcAlimento')}>
                <Text style={styles.txtbutton}>Alterar ou Deletar Alimentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('AltExcAnimal')}>
                <Text style={styles.txtbutton}>Alterar ou Deletar Animais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('AltExcFornecedor')}>
                <Text style={styles.txtbutton}>Alterar ou Deletar Fornecedores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('AltExcFuncionario')}>
                <Text style={styles.txtbutton}>Alterar ou Deletar Funcionários</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('AltExcUsuario')}>
                <Text style={styles.txtbutton}>Alterar ou Deletar Usuários</Text>
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
});