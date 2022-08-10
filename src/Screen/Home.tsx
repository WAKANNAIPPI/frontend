import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const HomeApp = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello Component
            </Text>
        </View>
    );
}
export default HomeApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

});