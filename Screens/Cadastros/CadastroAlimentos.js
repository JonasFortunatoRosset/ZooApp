//React-Native components
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
  
export default function CadastroAlimento() {
  const [alimento, setAlimento] = useState({
    nome: "",
    pesoLote: "",
    dataValidade: "",
  });

  function InserirAlimento() {
    axios.post('http://localhost:3000/alimentos', {
      nome: alimento.nome,
      pesoLote: alimento.pesoLote,
      dataValidade: alimento.dataValidade,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      Alert.alert("Sucesso", "Alimento cadastrado com sucesso!");
      setAlimento({
        nome: "",
        pesoLote: "",
        dataValidade: "",
      });
    })
    .catch(error => {
      Alert.alert("Erro", "Não foi possível cadastrar o alimento.");
      console.error(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Alimento</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={alimento.codigo}
        onChangeText={(text) => setAlimento({...alimento, codigo: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={animal.nome}
        onChangeText={(text) => setAnimal({...animal, nome: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso do Lote"
        value={alimento.pesoLote}
        onChangeText={(text) => setAlimento({...alimento, pesoLote: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Validade"
        value={alimento.dataValidade}
        onChangeText={(text) => setAlimento({...alimento, dataValidade: text})}
      />
      <Button title="Enviar" onPress={InserirAlimento} color="#34C759" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // cor de fundo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#34C759', // cor do cabeçalho verde
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // cor de fundo branco
    width: '100%',
  },
});
