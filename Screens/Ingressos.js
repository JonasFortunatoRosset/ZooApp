import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

export default function Ingressos() {
  const [ticket, setTicket] = useState({
    tipo: "Comum",
  });

  function enviarIngresso() {
    axios.post('http://localhost:3000/ingressos', {
      tipo: ticket.tipo,
      status: 'ativo'
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      Alert.alert("Sucesso", "Ingresso enviado com sucesso!");
      setTicket({
        tipo: "Comum",
      });
    })
    .catch(error => {
      Alert.alert("Erro", "Não foi possível enviar o ingresso.");
      console.error(error);
    });
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://2.bp.blogspot.com/-UCXrBO9Y5d8/U3dAie6dH_I/AAAAAAAAEoM/2eavn7jt5is/s1600/DSCN1825.JPG' }} // Substitua pelo URL da sua imagem
        style={styles.image}
      />
      <Text style={styles.header}>Escolha seu ingresso</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={ticket.tipo}
          style={styles.picker}
          onValueChange={(itemValue) => setTicket({...ticket, tipo: itemValue})}
        >
          <Picker.Item label="Comum" value="Comum" />
          <Picker.Item label="VIP" value="VIP" />
        </Picker>
      </View>
      <Button title="Enviar" onPress={enviarIngresso} color="#34C759" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Cor de fundo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300, // Aumenta a altura da imagem
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#34C759', // Cor do cabeçalho verde
    textAlign: 'center',
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#fff', // Cor de fundo branco
    borderColor: '#ccc', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Raio da borda para cantos arredondados
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});
