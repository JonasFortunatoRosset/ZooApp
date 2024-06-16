// React-Native components
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function CadastroFuncionario() {
  const [funcionario, setFuncionario] = useState({
    nome: "",
    email: "",
    senha: "",
    salario: "",
    endereco: "",
    cargaHoraria: "",
    cargo: "",
  });

  function InserirFuncionario() {
    axios.post('http://localhost:3000/funcionarios', {
      nome: funcionario.nome,
      email: funcionario.email,
      senha: funcionario.senha,
      salario: funcionario.salario,
      endereco: funcionario.endereco,
      cargaHoraria: funcionario.cargaHoraria,
      cargo: funcionario.cargo,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      Alert.alert("Sucesso", "Funcionário cadastrado com sucesso!");
      setFuncionario({
        nome: "",
        email: "",
        senha: "",
        salario: "",
        endereco: "",
        cargaHoraria: "",
        cargo: "",
      });
    })
    .catch(error => {
      Alert.alert("Erro", "Não foi possível cadastrar o funcionário.");
      console.error(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Funcionário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={funcionario.nome}
        onChangeText={(text) => setFuncionario({...funcionario, nome: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={funcionario.email}
        onChangeText={(text) => setFuncionario({...funcionario, email: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={funcionario.senha}
        onChangeText={(text) => setFuncionario({...funcionario, senha: text})}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Salário"
        value={funcionario.salario}
        onChangeText={(text) => setFuncionario({...funcionario, salario: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={funcionario.endereco}
        onChangeText={(text) => setFuncionario({...funcionario, endereco: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Carga Horária"
        value={funcionario.cargaHoraria}
        onChangeText={(text) => setFuncionario({...funcionario, cargaHoraria: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={funcionario.cargo}
        onChangeText={(text) => setFuncionario({...funcionario, cargo: text})}
      />
      <Button title="Enviar" onPress={InserirFuncionario} color="#34C759" />
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
