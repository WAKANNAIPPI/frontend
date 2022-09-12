import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { useNavigation } from "@react-navigation/native"

export const create: React.FC = () => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();
    return (
        <>
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Constellation')}
                style={styles.backButton}
            >
                    <Text style={styles.direction}>
                        ＜
                    </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.pallet}>
        </View>
        <View style={styles.projection}>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingEnd: 200,
        paddingTop: 15,
        flex: 0.1,
        backgroundColor: '#806BFF'
    },
    backButton: {
        width: 30,
        height: 30,
    },
    direction: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    pallet: {
        flex: 1,
        backgroundColor: "white",
    },
    projection: {
        flex: 0.1,
        backgroundColor: '#806BFF'
    },
    completion: {
        Radius: 15,
        width: 100,
        height: 30,
    }
})


