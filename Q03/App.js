import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, set] = useState('');
  const [handleInputValue, setHandleInputValue] = useState(false);

  const inputValue = () => {
    setHandleInputValue(true);
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formContent}>
          <Text style={styles.label}>What is your name?</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={set}
            value={input}
          />
          <Button
            style={styles.button}
            onPress={inputValue}
            title="Say hello"
          />
        </View>
        <View>
          { handleInputValue && (<Text>{`${input}`}</Text>)}
        </View>
          <StatusBar style="auto"/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 60,
    margin: 30
  },
  input: {
    backgroundColor: 'grey',
    height: 30,
  },
  label: {
    marginBottom: 20
  },
});