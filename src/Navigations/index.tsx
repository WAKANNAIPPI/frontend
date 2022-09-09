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

import { Account } from "../Screen/Account";
import { Signup } from "../Screen/Signup";
import { login } from "../Screen/login";

import { Help } from "../Screen/Help";

// ルートセット
type RootStackParamList = {
    Home: undefined;
    Constellation: undefined;
    Quiz: undefined;
    Projection: undefined;
    Account: undefined;
    Help: undefined;
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
                    name="Account"
                    component={AccountNav}
                />
                <HomeStack.Screen
                    name="Help"
                    component={Help}
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
type AccountStackParamList = {
    Account: undefined;
    Signup: undefined;
    login: undefined;
}

export type AccountStackNavProp<T extends keyof AccountStackParamList> = NativeStackNavigationProp<AccountStackParamList, T>
const AccountStack = createNativeStackNavigator<AccountStackParamList>();

export const AccountNav: React.FC = () => {
    return (
        <NavigationContainer>
            <AccountStack.Navigator initialRouteName="Account" screenOptions={{ headerStyle: styles.header, headerTitleStyle: { color: '#FFFFFF', }, }}>
                <AccountStack.Screen
                    name="Account"
                    component={Account}
                />
                <AccountStack.Screen
                    name="Signup"
                    component={Signup}
                />
                <AccountStack.Screen
                    name="login"
                    component={login}
                />
            </AccountStack.Navigator>
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