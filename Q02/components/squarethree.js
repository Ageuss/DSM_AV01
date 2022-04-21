import react from "react";
import { StyleSheet, Text, View } from "react-native";


export default function() {
    return(
        <View style={styles.squareThree}>
            <Text style={styles.squareText}>
                Square Thr!
            </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    squareThree: {
        backgroundColor: 'blue',
        width:'20%',
        height: '10%',
        position: 'relative',
        right: '25%',
        bottom: '10%'
    },
    squareText: {
       color: '#fff',
       textAlign: 'center',
       marginTop: '35%'      
    },
})