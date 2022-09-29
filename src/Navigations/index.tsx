import React from "react";
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from '../Screen/Home';
import { Constellation } from "../Screen/Constellation";
import { create } from "../Screen/create";

import { QuizScreen } from "../Screen/Quiz";
import { Gift } from "../Screen/Gift";

import { Projection } from "../Screen/Projection"

import { Signup } from "../Screen/Signup";
import { login } from "../Screen/login";


// ルートセット
type RootStackParamList = {
    Home: undefined;
    Constellation: undefined;
    Quiz: undefined;
    Projection: undefined;
    Signup: undefined;
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
                    component={StarsNavigator}
                    options={{headerShown: false}}
                />
                <HomeStack.Screen
                    name="Quiz"
                    component={QuizNav}
                />
                <HomeStack.Screen
                    name="Projection"
                    component={Projection}
                />
                <HomeStack.Screen
                    name="Signup"
                    component={Signup}
                />

            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

// 星座作成セット
type StarsStackParamList = {
    Constellation: undefined;
    create: undefined;
}

export type StarsStackNavProp<T extends keyof StarsStackParamList> = NativeStackNavigationProp<StarsStackParamList, T>
const StarsStack = createNativeStackNavigator<StarsStackParamList>();

export const StarsNavigator: React.FC = ()=>{
    return(
        <StarsStack.Navigator initialRouteName="Constellation" screenOptions={{ headerShown: false }}>
            <StarsStack.Screen
                name="Constellation"
                component={Constellation}
            />
            <StarsStack.Screen
                name="create"
                component={create}
            />
        </StarsStack.Navigator>
    )
}

// クイズセット
type QuizStackParamList = {
    Quiz: undefined;
    Gift: undefined;
}

export type QuizStackNavProp<T extends keyof QuizStackParamList> = NativeStackNavigationProp<QuizStackParamList, T>
const QuizStack = createNativeStackNavigator<QuizStackParamList>();

export const QuizNav: React.FC = () => {
    return (
        <QuizStack.Navigator initialRouteName="Quiz" screenOptions={{ headerShown: false }}>
            <QuizStack.Screen
                name="Quiz"
                component={QuizScreen}
            />
            <QuizStack.Screen
                name="Gift"
                component={Gift}
            />
        </QuizStack.Navigator>
    )
}

// アカウントセット
// 星座作成セット
type SignupStackParamList = {
    Signup: undefined;
    login: undefined;
    Home: undefined;
}

export type SignupStackNavProp<T extends keyof SignupStackParamList> = NativeStackNavigationProp<SignupStackParamList, T>
const SignupStack = createNativeStackNavigator<SignupStackParamList>();

export const SignupNavigator: React.FC = () => {
    return (
        <SignupStack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
            <SignupStack.Screen
                name="Signup"
                component={Signup}
            />
            <SignupStack.Screen
                name="login"
                component={login}
            />
            <SignupStack.Screen
                name="Home"
                component={HomeScreen}
            />
        </SignupStack.Navigator>
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