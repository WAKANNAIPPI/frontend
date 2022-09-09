import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RootStackNavProp } from "../Navigations";

export const { width, height } = Dimensions.get("screen");

export const HomeScreen: React.FC = () =>{
    const navigation = useNavigation< RootStackNavProp<'Home'> >()

    return(
        <View style={styles.container}>
            {/*要修正！ buttonを画像に置き換える */}
            <TouchableOpacity onPress={() => navigation.navigate('Constellation')}>
                <Image
                    source={require('../Assets/Frame1.png')}
                    style={{ width: 100, height: 100 }}
                />
                <Text>Constellation</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <Image
                    source={require('../Assets/Frame2.png')}
                    style={{ width: 150, height: 150 }}
                />
                <Text>Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Projection')}>
                <Image
                    source={require('../Assets/Frame3.png')}
                    style={{ width: 100, height: 100 }}
                />
                <Text>Prpjection</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <Image
                    source={require('../Assets/Frame4.png')}
                    style={{ width: 100, height: 100 }}
                />
                <Text>Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                <Image
                    source={require('../Assets/Frame5.png')}
                    style={{ width: 100, height: 100 }}
                />
                <Text>Help</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#282C3E',
        // 要修正！　画面サイズに合わせて設定
        padding: 50,
    },
})