import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function() {

const [count, counter] = useState(0)

    return(
        <View>
        <button onClick={() => counter(count + 1)}>Press</button>
            <text>
                Number of times you clicked: {count}
            </text>
        </View>
    );
     
   
}