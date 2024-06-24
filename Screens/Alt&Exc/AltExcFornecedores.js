import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, TextInput, Modal } from 'react-native';
import axios from 'axios';

export default function AltExcFornecedor() {
    const [fornecedores, setFornecedores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingFornecedor, setEditingFornecedor] = useState(null);
    const [formData, setFormData] = useState({
        codigo: '',
        empresa: '',
        endereco: '',
        telefone: '',
        email: '',
    });
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/fornecedores')
            .then(response => {
                setFornecedores(response.data.fornecedores);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleEdit = (fornecedor) => {
        setFormData(fornecedor);
        setEditingFornecedor(fornecedor.codigo);
        setModalVisible(true);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/fornecedores`, formData, {
            params: { codigo: formData.codigo }
        })
        .then(response => {
            setFornecedores(fornecedores.map(fornecedor => fornecedor.codigo === formData.codigo ? formData : fornecedor));
            setEditingFornecedor(null);
            setFormData({ codigo: '', empresa: '', telefone: '', email: '' });
            setModalVisible(false);
        })
        .catch(error => {
            console.error('Erro ao atualizar funcionário:', error);
        });
    };

    const handleDelete = (codigo) => {
        axios.delete('http://localhost:3000/fornecedores', { params: { codigo } })
            .then(response => {
                setFornecedores(fornecedores.filter(fornecedor => fornecedor.codigo !== codigo));
            })
            .catch(error => {
                console.error('Erro ao deletar fornecedor:',error.response ? error.response.data : error.message);
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
            <Text style={styles.header}>Lista de Fornecedores</Text>
            <FlatList
                data={fornecedores}
                keyExtractor={(item) => item.codigo.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>Código: {item.codigo}</Text>
                        <Text style={styles.itemText}>Empresa: {item.empresa}</Text>
                        <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
                        <Text style={styles.itemText}>Telefone: {item.telefone}</Text>
                        <Text style={styles.itemText}>Email: {item.email}</Text>
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
            />
            {/* Modal para editar fornecedor */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    setEditingFornecedor(null);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Editar Fornecedor</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Empresa"
                            value={formData.empresa}
                            onChangeText={(text) => setFormData({ ...formData, empresa: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Endereço"
                            value={formData.endereco}
                            onChangeText={(text) => setFormData({ ...formData, endereco: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Telefone"
                            value={formData.telefone}
                            onChangeText={(text) => setFormData({ ...formData, telefone: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
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
                                setEditingFornecedor(null);
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
        width: '45%',
    },
    deleteButton: {
        backgroundColor: '#FF3B30',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
