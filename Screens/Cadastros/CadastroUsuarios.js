//React-Native components
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
  
export default function CadastroUsuario() {
  const [usuario, setUsuario] = useState({
    codigo: "",
    nome: "",
    email: "",
    senha: "",
  });

  function InserirUsuario() {
    axios.post('http://localhost:3000/usuarios', {
      codigo: usuario.codigo,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      setUsuario({
        codigo: "",
        nome: "",
        email: "",
        senha: "",
      });
    })
    .catch(error => {
      Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
      console.error(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={usuario.codigo}
        onChangeText={(text) => setUsuario({...usuario, codigo: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={usuario.nome}
        onChangeText={(text) => setUsuario({...usuario, nome: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={usuario.email}
        onChangeText={(text) => setUsuario({...usuario, email: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={usuario.senha}
        onChangeText={(text) => setUsuario({...usuario, senha: text})}
        secureTextEntry={true}
      />
      <Button title="Enviar" onPress={InserirUsuario} color="#34C759" />
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
