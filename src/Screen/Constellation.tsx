import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Animated } from 'react-native';
import Swiper from 'react-native-swiper'

export const Constellation: React.FC = () => {
    return (
        <View style={styles.page}>
            <Swiper>
                <View style={styles.page}>
                    <Text style={styles.testText}>
                        Test1
                    </Text>
                </View>
                <View style={styles.page}>
                    <Text style={styles.testText}>
                        Test2
                    </Text>
                </View>
                <View >
                    <Text style={styles.testText}>
                        Test3
                    </Text>
                </View>
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderColor: 'white',
        borderwidth: 2,
        marginRight: 10,
        color: 'white',
        paddingHorizontal: 20,
        fontSize: 20,
    },
    slide: {
        height: 500,
        paddingHorizontal: 50,
    },
    page: {
        flex: 1,
        backgroundColor: '#232946'
    },
    testText: {
        color: 'white',
        fontSize: 30,
    }
});
