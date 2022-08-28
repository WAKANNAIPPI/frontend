import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View, Text, StyleSheet} from 'react-native';
import { NestStackNavProp, RootStackNavProp } from "../Navigations";

export const HomeScreen: React.FC = () =>{
    const navigation = useNavigation< RootStackNavProp<'Home'> >();

    return(
        <View style={styles.container}>
            <Button
                title="go to hoge screen"
                onPress={() => navigation.navigate('Hoge')}
            />
            <Button
                title="Go To Tab"
                onPress={() => navigation.navigate('Tab')}
            />
        </View>
    )
}

export const HogeScreen: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>HogeScreen</Text>
        </View>
    )
}

export const Tab1Screen: React.FC = () =>{
    const navigation = useNavigation< RootStackNavProp<'Tab'> >();

    return(
        <View style={styles.container}>
            <Text>
                TabNavigatorはRootNavigatorのScreenとしてネストしているので、Hogeスクリーンに遷移したとき、下のTabナビゲーションは表示されない
            </Text>
            <Button
                title="Go to HogeScreren from TabNavigator"
                onPress={() => navigation.navigate('Hoge')}
            />
        </View>
    )
}

export const Tab2Screen: React.FC = () =>{
    return(
        <View style={styles.container}>
            <Text>Tab2Screen</Text>
        </View>
    )
}

export const Tab3Screen: React.FC = () => {
    const navigation = useNavigation <NestStackNavProp<'Tab3'> > ();
    return(
        <View style={styles.container} >
            <Text>
                Tab Navigatorの下にNest navigatorがネストされているので、Hogeスクリーンに遷移しても下のTabナビゲーションは表示されたまま（NestNavigator →HogeScreenと遷移しているのでNestNavigatorの親であるTab Navigatorの中にHogeScreenが表示される）
            </Text>
            <Button
                title="Go to HogeScreen from NestNavigator"
                onPress={() => navigation.navigate('Hoge')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        padding: 500,
    },
})