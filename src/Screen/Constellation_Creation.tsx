import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Constellation_Creation = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                星座作成画面の予定
            </Text>
        </View>
    );
}
export default Constellation_Creation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 500,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});