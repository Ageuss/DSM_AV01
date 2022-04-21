import { StyleSheet, Text, View } from 'react-native';
import SquareOne from './components/squareOne';
import SquareTwo from './components/squateTwo';
import Squarethree from './components/squarethree';

export default function App() {
  return (
    <View style={styles.container}>
     <SquareOne/>
     <SquareTwo/>
     <Squarethree/>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
