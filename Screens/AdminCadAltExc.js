import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CadastroGeralAdmin({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastros e Gestão</Text>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('CadastroGeralAdmin')}>
                <Text style={styles.txtbutton}>Cadastro de dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('AltExcGeralAdmin')}>
                <Text style={styles.txtbutton}>Alteração & Exclusão de dados</Text>
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