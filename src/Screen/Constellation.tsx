import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import Swiper from "react-native-swiper/src"

function Edit(props: any, navigation: any) {
    return (
        <View style={styles.editButton}>
            <TouchableOpacity 
                //onPress={() => navigation.navigator()} 画面遷移
            >
                <Image
                    style={styles.editImage}
                    source={require('../Assets/edit.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export const Constellation: React.FC = () => {
    return (
        <View style={styles.page}>
            <Swiper showsButtons={true} loop={false}>
                <View style={styles.slide}>
                    <Text style={styles.testText}>
                       Test1 画像                   
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.testText}>
                        Test2
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.testText}>
                        Test3
                    </Text>
                </View>
            </Swiper>
        <Edit/>
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        padding: 30
    },
    page: {
        flex: 1,
        backgroundColor: '#232946'
    },
    pictorial: {
        flex: 0.25,
        backgroundColor: '#232946'
    },
    testText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    editButton: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{translateX: 120}, {translateY: -30}],
    },
    editImage: {
        width: 60,
        height: 60
    }
});
