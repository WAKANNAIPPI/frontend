import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Galaxy = () => {
    return (
        <ImageBackground style={styles.container}>
        </ImageBackground>
    );
}
export default Galaxy;

const styles = StyleSheet.create({
    container: {
        padding: 500,
        backgroundColor: "black"
    },
});