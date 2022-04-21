import react from "react";
import { StyleSheet, Text, View } from "react-native";


export default function() {
    return(
        <View style={styles.squareOne}>
            <Text style={styles.squareText}>
                Square One!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    squareOne: {
        backgroundColor: 'red',
        width:'20%',
        height: '10%',
        marginLeft: '60%'
    },
    squareText: {
       color: '#fff',
       textAlign: 'center',
       marginTop: '35%'
       
    },
})