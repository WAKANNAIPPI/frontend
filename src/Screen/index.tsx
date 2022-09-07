import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { RootStackNavProp } from "../Navigations";

export const HomeScreen: React.FC = () =>{
    const navigation = useNavigation< RootStackNavProp<'Home'> >()

    return(
        <View style={styles.container}>
            {/*要修正！ buttonを画像に置き換える */}
            <Button
                title="constallation"
                onPress={() => navigation.navigate('Constellation')}
            />
            <Button
                title="Quiz"
                onPress={() => navigation.navigate('Quiz')}
            />
            <Button
                title="Procection"
                onPress={() => navigation.navigate('Projection')}
            />
            <Button
                title="Account"
                onPress={() => navigation.navigate('Account')}
            />            
            <Button
                title="Help"
                onPress={() => navigation.navigate('Help')}
            />
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
        padding: 250,
    },
})