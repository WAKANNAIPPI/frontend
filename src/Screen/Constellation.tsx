import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RootStackNavProp } from "../Navigations";
import { StarsStackNavProp } from "../Navigations";
import Swiper from "react-native-swiper/src";


export const Constellation: React.FC = () => {
    const navigation = useNavigation< RootStackNavProp<'Constellation'> >();
    const starsNavigation = useNavigation< StarsStackNavProp<'Constellation'> >();
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
            <View
                style={styles.editArea}
            >
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => starsNavigation.navigate("create")}
                >
                    <Image
                        source={require("../Assets/Constellation/edit.png")}
                        style={styles.editImage}
                    />
                </TouchableOpacity>
            </View>
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
        flex: 0.18,
        backgroundColor: '#806BFF'
    },
    backButton: {
        marginTop: 50,
        marginEnd: 250,
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
    },
    editButton: {
        marginLeft: 200,
        marginBottom: 30,
    },
    editImage: {
        width: 60,
        height: 60,
    },
});
