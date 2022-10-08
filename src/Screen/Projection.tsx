import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StarrySky } from "../Compoents/dot";

export const Projection: React.FC = () => {
    return (
        <View style={styles.container}>
            <StarrySky color="black" />
            <View style={styles.body}>
                <View style={styles.selbtn}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txt}>プロジェクタに接続</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.choice}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txt}>星座を選択</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        position: 'relative',
    },
    body:{
        position: "absolute",
        alignSelf:'center',
        marginTop:450,
    },
    btn:{
        backgroundColor: '#806BFF',
        borderRadius: 20,
        width: 220,
        height: 40,

    },
    txt:{
        color:'white',
        padding: 10,
        alignSelf:'center'
    },
    choice:{
        padding: 10,
    },
    selbtn:{
        padding: 10,
    },
    
})