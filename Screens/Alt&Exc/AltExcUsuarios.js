import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, TextInput, Modal } from 'react-native';
import axios from 'axios';

export default function AltExcUsuario() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingFuncionario, setEditingFuncionario] = useState(null);
    const [formData, setFormData] = useState({
        codigo: '',
        nome: '',
        email: '',
        senha: '',
    });
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/usuarios')
            .then(response => {
                setUsuarios(response.data.usuarios);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleEdit = (usuario) => {
        setFormData(usuario);
        setEditingFuncionario(usuario.codigo);
        setModalVisible(true);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/usuarios`, formData, {
            params: { codigo: formData.codigo }
        })
        .then(response => {
            setUsuarios(usuarios.map(usuario => usuario.codigo === formData.codigo ? formData : usuario));
            setEditingFuncionario(null);
            setFormData({ codigo: '', nome: '', email: '', senha: '' });
            setModalVisible(false);
        })
        .catch(error => {
            console.error('Erro ao atualizar usuário:', error);
        });
    };

    const handleDelete = (codigo) => {
    axios.delete(`http://localhost:3000/usuarios`, { params: { codigo } })
        .then(response => {
            setUsuarios(usuarios.filter(usuario => usuario.codigo !== codigo));
        })
        .catch(error => {
            console.error('Erro ao deletar usuário:', error.response ? error.response.data : error.message);
        });
    };
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
                        <Text style={styles.itemText}>Senha: {item.senha}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleEdit(item)}
                            >
                                <Text style={styles.buttonText}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.deleteButton]}
                                onPress={() => handleDelete(item.codigo)}
                            >
                                <Text style={styles.buttonText}>Deletar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
            {/* Modal para editar usuário */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    setEditingFuncionario(null);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Editar Usuário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={formData.nome}
                            onChangeText={(text) => setFormData({ ...formData, nome: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            value={formData.senha}
                            onChangeText={(text) => setFormData({ ...formData, senha: text })}
                        />
                        <TouchableOpacity
                            style={[styles.button, styles.saveButton]}
                            onPress={handleUpdate}
                        >
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={() => {
                                setModalVisible(false);
                                setEditingFuncionario(null);
                            }}
                        >
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#34C759',
        padding: 10,
        borderRadius: 5,
        width: '45%', // Largura dos botões para ocupar 45% da largura disponível
    },
    deleteButton: {
        backgroundColor: '#FF3B30', // Cor vermelha para o botão de deletar
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro translúcido
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    saveButton: {
        backgroundColor: '#34C759',
        marginTop: 10,
    },
    cancelButton: {
        backgroundColor: '#FF3B30',
        marginTop: 10,
    },
});
