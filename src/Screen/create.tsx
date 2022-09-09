import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const create: React.FC = () => {
    return (
        <>
        <View style={styles.header}>
            <View style={styles.completion}>
                <Button
                    title="完了"
                    //onPress={() => } 完了（セーブ）
                />
            </View>
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
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#806BFF",
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


