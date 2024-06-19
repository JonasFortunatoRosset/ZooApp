//React-Native components
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
  
export default function CadastroUsuario() {
  const [user, setUser] = useState({
    codigo: "",
    nome: "",
    email: "",
    senha: "",
  });

  function InserirUsuario() {
    axios.post('http://localhost:3000/usuarios', {
      codigo: user.codigo,
      nome: user.nome,
      email: user.email,
      senha: user.senha,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      setUser({
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
        value={user.codigo}
        onChangeText={(text) => setUser({...user, codigo: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={user.nome}
        onChangeText={(text) => setUser({...user, nome: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(text) => setUser({...user, email: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={user.senha}
        onChangeText={(text) => setUser({...user, senha: text})}
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
