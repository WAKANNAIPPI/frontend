import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { HogeScreen, HomeScreen, Tab1Screen, Tab2Screen, Tab3Screen } from '../Screen';

type RootStackParamList = {
    Home: undefined;
    Hoge: undefined;
    Tab: undefined;
}
export type RootStackNavProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>

type TabParamList = {
    Tab1: undefined;
    Tab2: undefined;
    NestNavigator: undefined;
}

type NestStackParamList = {
    Tab3: undefined;
    Hoge: undefined;
}
export type NestStackNavProp<T extends keyof NestStackParamList> = NativeStackNavigationProp<NestStackParamList, T>

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const NestStack = createNativeStackNavigator<NestStackParamList>();

export const RootNavivgator: React.FC = () =>{
    return(
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName="Home">
                <HomeStack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <HomeStack.Screen
                    name="Hoge"
                    component={HogeScreen}
                />
                <HomeStack.Screen
                    name="Tab"
                    component={TabNavigator}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}

export const TabNavigator: React.FC = () => {
    return(
        <Tab.Navigator initialRouteName="Tab1" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={Tab1Screen} />
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="NestNavigator" component={NestNavigator} />
        </Tab.Navigator>
    )
}

export const NestNavigator: React.FC = () =>{
    return(
        <NestStack.Navigator initialRouteName="Tab3" screenOptions={{ headerShown: false }}>
            <NestStack.Screen
                name="Tab3"
                component={Tab3Screen}
            />
            <NestStack.Screen
                name="Hoge"
                component={HogeScreen}
            />
        </NestStack.Navigator>
    )
}