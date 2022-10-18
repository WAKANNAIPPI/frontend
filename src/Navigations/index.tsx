import React from "react";
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from '../Screen/Home';
import { Constellation } from "../Screen/Constellation";
import { Creation } from "../Screen/create";

import { QuizScreen } from "../Screen/Quiz";
import { Answer } from "../Screen/Answer";
import { Gift } from "../Screen/Gift";

import { Projection } from "../Screen/Projection";
import { Choice } from "../Screen/Choice";
import { ProjectionScreen } from "../Screen/ProjectionScreen";

import { Signup } from "../Screen/Signup";
import { login } from "../Screen/login";


// ルートセット
type RootStackParamList = {
    Home: undefined;
    Constellation: undefined;
    Quiz: undefined;
    ProjectionNavigate: undefined;
    Login: undefined;
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
                    name="ProjectionNavigate"
                    component={ProjectionNavigator}
                    options={{ headerShown: false }}
                />
                <HomeStack.Screen
                    name="Login"
                    component={SignupNavigator}
                />

            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

// 星座作成セット
type StarsStackParamList = {
    ConstellationNav: undefined;
    createNav: undefined;
}

export type StarsStackNavProp<T extends keyof StarsStackParamList> = NativeStackNavigationProp<StarsStackParamList, T>
const StarsStack = createNativeStackNavigator<StarsStackParamList>();

export const StarsNavigator: React.FC = ()=>{
    return(
        <StarsStack.Navigator initialRouteName="ConstellationNav" screenOptions={{ headerShown: false }}>
            <StarsStack.Screen
                name="ConstellationNav"
                component={Constellation}
            />
            <StarsStack.Screen
                name="createNav"
                component={Creation}
            />
        </StarsStack.Navigator>
    )
}

// クイズセット
type QuizStackParamList = {
    Quiz: undefined;
    Answer: undefined;
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
                name="Answer"
                component={Answer}
            />
            <QuizStack.Screen
                name="Gift"
                component={Gift}
            />
        </QuizStack.Navigator>
    )
}

type ProjectionStackParamList ={
    Projection: undefined;
    Choice: undefined;
    ProjectionScreen: undefined;
}
export type ProjectionStackNavProp<T extends keyof ProjectionStackParamList> = NativeStackNavigationProp<ProjectionStackParamList, T>
const ProjectionStack = createNativeStackNavigator<ProjectionStackParamList>();

export const ProjectionNavigator: React.FC = () => {
    return(
        <ProjectionStack.Navigator initialRouteName="Projection" screenOptions={{ headerShown: false }}>
            <ProjectionStack.Screen 
                name="Projection"
                component={Projection}

            />
            <ProjectionStack.Screen 
                name="Choice"
                component={Choice}
                options={{ headerShown: true, headerTitle: '', headerStyle: styles.header, }}
            />
            <ProjectionStack.Screen 
                name="ProjectionScreen"
                component={ProjectionScreen}
                options={{ headerShown: false, headerTitle: '', headerStyle: styles.header, }}
            />
            
        </ProjectionStack.Navigator>
    )
}

// アカウントセット
// 星座作成セット
type SignupStackParamList = {
    Signup: undefined;
    login: undefined;
}

export type SignupStackNavProp<T extends keyof SignupStackParamList> = NativeStackNavigationProp<SignupStackParamList, T>
const SignupStack = createNativeStackNavigator<SignupStackParamList>();

export const SignupNavigator: React.FC = () => {
    return (
        <SignupStack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
            <SignupStack.Screen
                name="login"
                component={login}
            />
            <SignupStack.Screen
                name="Signup"
                component={Signup}
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