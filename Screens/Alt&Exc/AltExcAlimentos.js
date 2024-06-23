import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, TextInput, Modal } from 'react-native';
import axios from 'axios';

export default function AltExcAlimento() {
    const [alimentos, setAlimentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingAlimento, setEditingAlimento] = useState(null);
    const [formData, setFormData] = useState({
        codigo: '',
        nome: '',
        pesoLote: '',
        dataValidade: '',
        codFornecedor: '',
    });
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/alimentos')
            .then(response => {
                setAlimentos(response.data.alimentos);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleEdit = (alimento) => {
        setFormData(alimento);
        setEditingAlimento(alimento.codigo);
        setModalVisible(true);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/alimentos/${formData.codigo}`, formData)
            .then(response => {
                setAlimentos(alimentos.map(alimento => alimento.codigo === formData.codigo ? formData : alimento));
                setEditingAlimento(null);
                setFormData({ codigo: '', nome: '', pesoLote: '', dataValidade: '', codFornecedor: '' });
                setModalVisible(false);
            })
            .catch(error => {
                console.error('Erro ao atualizar alimento:', error);
            });
    };

    const handleDelete = (codigo) => {
        axios.delete(`http://localhost:3000/alimentos/${codigo}`)
            .then(response => {
                setAlimentos(alimentos.filter(alimento => alimento.codigo !== codigo));
            })
            .catch(error => {
                console.error('Erro ao deletar alimento:', error);
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
            <Text style={styles.header}>Lista de Alimentos</Text>
            <FlatList
                data={alimentos}
                keyExtractor={(item) => item.codigo.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>Código: {item.codigo}</Text>
                        <Text style={styles.itemText}>Nome: {item.nome}</Text>
                        <Text style={styles.itemText}>Peso Lote: {item.pesoLote}</Text>
                        <Text style={styles.itemText}>Data de Validade: {item.dataValidade}</Text>
                        <Text style={styles.itemText}>Código de Fornecedor: {item.codFornecedor}</Text>
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
            {/* Modal para editar alimento */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    setEditingAlimento(null);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Editar Alimento</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={formData.nome}
                            onChangeText={(text) => setFormData({ ...formData, nome: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Peso Lote"
                            value={formData.pesoLote}
                            onChangeText={(text) => setFormData({ ...formData, pesoLote: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Data de Validade"
                            value={formData.dataValidade}
                            onChangeText={(text) => setFormData({ ...formData, dataValidade: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Código de Fornecedor"
                            value={formData.codFornecedor}
                            onChangeText={(text) => setFormData({ ...formData, codFornecedor: text })}
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
                                setEditingAlimento(null);
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
