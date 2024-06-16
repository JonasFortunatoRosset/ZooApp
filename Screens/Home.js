import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

// Importar as imagens
import elefante from '../assets/Carrossel/elefante.jpg';
import lion from '../assets/Carrossel/lion.jpg';
import girafa from '../assets/Carrossel/girafa.jpg';
import hipo from '../assets/Carrossel/hipo.jpeg';
import zebra from '../assets/Carrossel/zebra.jpg';

const animais = [
  {
    imagem: lion,
    descricao: 'Os leões são felinos majestosos que vivem em grupos sociais complexos chamados bandos, conhecidos por sua força e rugido poderoso.',
  },
  {
    imagem: girafa,
    descricao: 'As girafas são os animais mais altos do mundo, com pescoços longos que lhes permitem alcançar folhas altas nas árvores, e padrões de pelagem únicos.',
  },
  {
    imagem: hipo,
    descricao: 'Os hipopótamos são animais semi-aquáticos que passam a maior parte do tempo na água, conhecidos por sua natureza territorial e tamanho impressionante.',
  },
  {
    imagem: zebra,
    descricao: 'As zebras são equinos africanos conhecidos por suas listras pretas e brancas distintas, que se acredita ajudarem na camuflagem e na regulação da temperatura corporal.',
  },
  {
    imagem: elefante,
    descricao: 'Os elefantes são os maiores animais terrestres do mundo, conhecidos por sua inteligência, memória e laços sociais complexos.',
  },
];

export default function HomeScreen({ navigation }) {
  const [animalAtual, setAnimalAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimalAtual((animalAtual + 1) % animais.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [animalAtual]);

  return (
    <View style={styles.container}>
      <Image
        source={animais[animalAtual].imagem}
        style={styles.imagem}
      />
      <Text style={styles.descricao}>{animais[animalAtual].descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  imagem: {
    width: '80%',
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  descricao: {
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Avenir-Roman', // Verifique se a fonte está instalada
    color: '#333',
  },
});