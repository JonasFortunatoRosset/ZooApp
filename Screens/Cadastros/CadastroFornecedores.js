// React-Native components
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function CadastroFornecedor() {
  const [fornecedor, setFornecedor] = useState({
    codigo: "",
    empresa: "",
    endereco: "",
    telefone: "",
    email: "",
  });

  function InserirFornecedor() {
    axios.post('http://localhost:3000/fornecedores', {
      codigo: fornecedor.codigo,
      empresa: fornecedor.empresa,
      endereco: fornecedor.endereco,
      telefone: fornecedor.telefone,
      email: fornecedor.email,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      Alert.alert("Sucesso", "Fornecedor cadastrado com sucesso!");
      setFornecedor({
        codigo: "",
        empresa: "",
        endereco: "",
        telefone: "",
        email: "",
      });
    })
    .catch(error => {
      Alert.alert("Erro", "Não foi possível cadastrar o fornecedor.");
      console.error(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Fornecedor</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={funcionario.codigo}
        onChangeText={(text) => setFuncionario({...funcionario, codigo: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Empresa"
        value={fornecedor.empresa}
        onChangeText={(text) => setFornecedor({...fornecedor, empresa: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={fornecedor.endereco}
        onChangeText={(text) => setFornecedor({...fornecedor, endereco: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={fornecedor.telefone}
        onChangeText={(text) => setFornecedor({...fornecedor, telefone: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={fornecedor.email}
        onChangeText={(text) => setFornecedor({...fornecedor, email: text})}
      />
      <Button title="Enviar" onPress={InserirFornecedor} color="#34C759" />
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
