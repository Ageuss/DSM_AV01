import react from "react";
import { StyleSheet, Text, View } from "react-native";


export default function() {
    return(
        <View style={styles.squareTwo}>
            <Text style={styles.squareText}>
                Square Two!
            </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    squareTwo: {
        backgroundColor: 'blue',
        width:'20%',
        height: '10%',
        marginLeft: '5%',
        marginTop: '-18%' 
    },
    squareText: {
       color: '#fff',
       textAlign: 'center',
       marginTop: '35%'      
    },
})