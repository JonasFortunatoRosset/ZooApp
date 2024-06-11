import { Text, View, StyleSheet, Button} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
