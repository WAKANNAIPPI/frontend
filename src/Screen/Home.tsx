import React, { Component } from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function HomeApp({ navigation }: any){
    return (
        <View style={styles.container}>
                <Image style={styles.image}
                    source={require("../Assets/Frame 3.png")}
                />
                <Button 
                    title="Go to Constellation_Creation"
                    onPress={() => navigation.navigate('Constellation_Creation')}
                />
        </View>
    );
}


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
    image: {
        resizeMode: "cover",
        height: 200,
        width: 200
    }
});