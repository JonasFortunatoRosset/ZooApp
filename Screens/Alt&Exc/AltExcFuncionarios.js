import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, TextInput, Modal } from 'react-native';
import axios from 'axios';

export default function AltExcFuncionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingFuncionario, setEditingFuncionario] = useState(null);
    const [formData, setFormData] = useState({
        codigo: '',
        nome: '',
        email: '',
        senha: '',
        salario: '',
        endereco: '',
        cargaHoraria: '',
        cargo: ''
    });
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/funcionarios')
            .then(response => {
                setFuncionarios(response.data.funcionarios);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleEdit = (funcionario) => {
        setFormData(funcionario);
        setEditingFuncionario(funcionario.codigo);
        setModalVisible(true);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/funcionarios/${formData.codigo}`, formData)
            .then(response => {
                setFuncionarios(funcionarios.map(funcionario => funcionario.codigo === formData.codigo ? formData : funcionario));
                setEditingFuncionario(null);
                setFormData({
                    codigo: '',
                    nome: '',
                    email: '',
                    senha: '',
                    salario: '',
                    endereco: '',
                    cargaHoraria: '',
                    cargo: ''
                });
                setModalVisible(false);
            })
            .catch(error => {
                console.error('Erro ao atualizar funcionário:', error);
            });
    };

    const handleDelete = (codigo) => {
        axios.delete(`http://localhost:3000/funcionarios/${codigo}`)
            .then(response => {
                setFuncionarios(funcionarios.filter(funcionario => funcionario.codigo !== codigo));
            })
            .catch(error => {
                console.error('Erro ao deletar funcionário:', error);
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
            <Text style={styles.header}>Lista de Funcionários</Text>
            <FlatList
                data={funcionarios}
                keyExtractor={(item) => item.codigo.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>Código: {item.codigo}</Text>
                        <Text style={styles.itemText}>Nome: {item.nome}</Text>
                        <Text style={styles.itemText}>Email: {item.email}</Text>
                        <Text style={styles.itemText}>Salário: {item.salario}</Text>
                        <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
                        <Text style={styles.itemText}>Carga Horária: {item.cargaHoraria}</Text>
                        <Text style={styles.itemText}>Cargo: {item.cargo}</Text>
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
            {/* Modal para editar funcionário */}
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
                        <Text style={styles.modalTitle}>Editar Funcionário</Text>
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
                            placeholder="Salário"
                            value={formData.salario}
                            onChangeText={(text) => setFormData({ ...formData, salario: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Endereço"
                            value={formData.endereco}
                            onChangeText={(text) => setFormData({ ...formData, endereco: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Carga Horária"
                            value={formData.cargaHoraria}
                            onChangeText={(text) => setFormData({ ...formData, cargaHoraria: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cargo"
                            value={formData.cargo}
                            onChangeText={(text) => setFormData({ ...formData, cargo: text })}
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
