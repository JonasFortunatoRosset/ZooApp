// React-Native components
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function CadastroAnimal() {
  const [animal, setAnimal] = useState({
    codigo: "",
    nome: "",
    especie: "",
    dataNascimento: "",
    dataChegada: "",
    status: "",
  });

  function InserirAnimal() {
    axios.post('http://localhost:3000/animais', {
      codigo: animal.codigo,
      nome: animal.nome,
      especie: animal.especie,
      dataNascimento: animal.dataNascimento,
      dataChegadaZoo: animal.dataChegadaZoo,
      status: animal.status,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      Alert.alert("Sucesso", "Animal cadastrado com sucesso!");
      setAnimal({
        codigo: "",
        nome: "",
        especie: "",
        dataNascimento: "",
        dataChegada: "",
        status: "",
      });
    })
    .catch(error => {
      Alert.alert("Erro", "Não foi possível cadastrar o animal.");
      console.error(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Animal</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={animal.codigo}
        onChangeText={(text) => setAnimal({...animal, codigo: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={animal.nome}
        onChangeText={(text) => setAnimal({...animal, nome: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Espécie"
        value={animal.especie}
        onChangeText={(text) => setAnimal({...animal, especie: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={animal.dataNascimento}
        onChangeText={(text) => setAnimal({...animal, dataNascimento: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Chegada Zoo"
        value={animal.dataChegadaZoo}
        onChangeText={(text) => setAnimal({...animal, dataChegadaZoo: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={animal.status}
        onChangeText={(text) => setAnimal({...animal, status: text})}
      />
      <Button title="Enviar" onPress={InserirAnimal} color="#34C759" />
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
