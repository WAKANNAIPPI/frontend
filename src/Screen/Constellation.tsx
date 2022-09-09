import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import Swiper from "react-native-swiper/src"

function Edit(props: any, navigation: any) {
    return (
        <View style={styles.editArea}>
            <TouchableOpacity 
                //onPress={() => navigation.navigator()} 画面遷移
                style={styles.editButton}
            >
                <View style={styles.editSet1}>
                    <View style={styles.editPlus1}/>
                </View>
                <View style={styles.editSet2}>
                    <View style={styles.editPlus2}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const Constellation: React.FC = () => {
    return (
        <View style={styles.container}>
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
    container: {
        flex: 1,
        backgroundColor: '#232946'
    },
    slide: {
        flex: 1,
        padding: 30
    },
    testText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    editArea: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 100
    },
    editButton: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#BDBAFA'
    },
    editSet1: {
        flex: 0,
        paddingTop: 30, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    editSet2: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editPlus1: {
        backgroundColor: 'white' ,
        borderRadius: 20,
        width: 40, 
        height: 10,
    },
    editPlus2: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 10,
        height: 40,
    }
});
