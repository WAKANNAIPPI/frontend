import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { RootStackNavProp } from "../Navigations";
import { StarrySky } from "../Compoents/dot";


const { width, height } = Dimensions.get("window");
export const HomeScreen: React.FC = () => {
    const navigation = useNavigation<RootStackNavProp<'Home'>>()

    return (
        <View style={styles.container}>
            <StarrySky color="#282C3E" />
            <View style={styles.buttonLayout}>
                <View style={styles.constellation}>
                    <TouchableOpacity onPress={() => navigation.navigate('Constellation')} style={styles.button} >
                        <Image
                            source={require('../Assets/Frame1.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>星座作成</Text>
                </View>
                <View style={styles.quiz}>
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button} >
                        <Image
                            source={require('../Assets/Frame2.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>クイズ</Text>
                </View>
                <View style={styles.projection}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProjectionNavigate')} style={styles.button}>
                        <Image
                            source={require('../Assets/Frame3.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>キャスト</Text>
                </View>
                <View style={styles.login}>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            source={require('../Assets/Frame4.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>ログイン</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',

    },
    buttonLayout: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: Dimensions.get('window').width *0.8 ,
        Radius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 50,
        width: 50,
    },
    constellation: {
        position: "absolute",
        bottom: Dimensions.get('window').width * 0.35
    },
    quiz: {
        position: "absolute",
        top: Dimensions.get('window').width * 0.2,
        right: Dimensions.get('window').width * 0.4
    },
    projection: {
        position: "absolute",
        top: Dimensions.get('window').width * 0.4
    },
    login: {
        position: "absolute",
        left: Dimensions.get('window').width * 0.4
    },
})

