import React from 'react';
import { StyleSheet, View, Image, Text, Button, ScrollView } from 'react-native';

export default function Ingressos({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate('ComprarIngresso');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp6H5RaMSlEqJVWm5WCH9qryzHeZ9e4DQDQ&s' }}
          style={styles.image}
        />
        <Text style={styles.description}>
        Bem-vindo ao nosso zoológico, onde a magia da vida selvagem ganha vida! Localizado em um vasto e exuberante ambiente natural, nosso zoológico oferece uma experiência única para todas as idades. Desde majestosos leões até ágeis macacos, cada recinto é projetado para refletir o habitat natural dos nossos residentes.
        </Text>
        <Button title="Comprar Ingressos" onPress={handleNavigation} color="#34C759" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 300,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '60%',
  },
});
