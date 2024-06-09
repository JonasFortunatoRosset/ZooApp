//React-Native components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const RegisterWorkers = () => {
    return(
        <View Style={styles.container}>
            <Text style={styles.text}> Workers Screen</Text>
        </View>
    );
}

export default RegisterWorkers;

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
