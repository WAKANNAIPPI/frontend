import React from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";

export default function HomeApp({ navigation }: any){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeApp</Text>
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
});