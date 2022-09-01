import React from "react";
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from '../Screen';
import { Constellation } from "../Screen/Constellation";
import { QuizScreen } from "../Screen/Quiz";


type RootStackParamList = {
    Home: undefined;
    Constellation: undefined;
    Quiz: undefined;
}

export type RootStackNavProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavivgator: React.FC = () =>{
    return(
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: styles.header, headerTitleStyle: { color: '#FFFFFF', }, }}>
                {/* home 画面をスタック */}
                <HomeStack.Screen
                    name="Home"
                    component={HomeScreen}
                    // header消す
                    options={{headerShown: false}}
                />
                <HomeStack.Screen
                    name="Constellation"
                    component={Constellation}
                />
                <HomeStack.Screen
                    name="Quiz"
                    component={QuizScreen}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

// ヘッダーの設定
const styles = StyleSheet.create({
    header: {
        // ヘッダーの背景色を変更
        backgroundColor: '#806BFF',
        // 影を消す
        elevation: 0,   // Android
        shadowOpacity: 0,   // iOS
        borderBottomWidth: 0,   // 幅０
    },
})