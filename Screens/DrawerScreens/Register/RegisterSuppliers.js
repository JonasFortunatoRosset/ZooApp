//React-Native components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const RegisterSuppliers = () => {
    return(
        <View Style={styles.container}>
            <Text style={styles.text}> Suppliers Screen</Text>
        </View>
    );
}

export default RegisterSuppliers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
