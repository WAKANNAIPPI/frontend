import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RootStackNavProp } from "../Navigations";
import { StarsStackNavProp } from "../Navigations";
import Swiper from "react-native-swiper/src";

function Edit() {
    const navigation = useNavigation< StarsStackNavProp<'Constellation'> >();
    return (
        <View style={styles.editArea}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('create')}
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
    const navigation = useNavigation< RootStackNavProp<'Constellation'> >();
    return (
        <View style={styles.container}>
           <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.backButton}
                >
                        <Text style={styles.direction}>
                            ＜
                        </Text>
                </TouchableOpacity>
            </View>
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
    header: {
        alignItems: 'center',
        paddingEnd: 200,
        paddingTop: 10,
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
