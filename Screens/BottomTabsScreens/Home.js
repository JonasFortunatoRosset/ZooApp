import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Nosso App!</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pela URL da sua imagem
      />
      <Text style={styles.welcomeText}>
        Estamos felizes em tê-lo aqui. Explore o app para descobrir mais funcionalidades.
      </Text>
      <Ionicons name="home" size={36} color="#4caf50" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: '#388e3c',
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, // Para imagem circular
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'Avenir-Roman',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginTop: 30,
  }
});
