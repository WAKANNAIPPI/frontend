import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

export default function App() {
    return (
                <View style={styles.inputContainer}>
                    <Text style={styles.Text}>
                        quizdesu
                    </Text>
                </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#222',
    },
    button: {
        backgroundColor: 'rgb(29, 161, 242)',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
    },
    Text: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontweight: '900',
        fontsize: 32,
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        borderColor: 'white',
        borderwidth: 2,
        marginRight: 10,
        color: 'white',
        paddingHorizontal: 20,
        fontsize: 20,
    },
    container: {
        flex: 1,
        paddingTop: 20,
    }
});