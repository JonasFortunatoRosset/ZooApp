import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function AltExcUsuario(){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/usuarios')
        .then(response => {
            setUsuarios(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#34C759" />
            <Text>Carregando...</Text>
        </View>
        );
    }

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Lista de Usuários</Text>
        <FlatList
            data={usuarios}
            keyExtractor={(item) => item.codigo.toString()}
            renderItem={({ item }) => (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>Código: {item.codigo}</Text>
                <Text style={styles.itemText}>Nome: {item.nome}</Text>
                <Text style={styles.itemText}>Email: {item.email}</Text>
                <Text style={styles.itemText}>Email: {item.senha}</Text>
            </View>
            )}
        />
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#34C759',
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
});
