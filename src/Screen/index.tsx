import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { RootStackNavProp } from "../Navigations";

export const HomeScreen: React.FC = () =>{
    const navigation = useNavigation< RootStackNavProp<'Home'> >()

    return(
        <View style={styles.container}>
            {/* buttonを画像に置き換える */}
            <Button
                title="Go To constallation"
                onPress={() => navigation.navigate('Constellation')}
            />
            <Button
                title="Go to Quiz"
                onPress={() => navigation.navigate('Quiz')}
            />
        </View>
    )
}
export const QuizScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Quiz screen</Text>
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
        padding: 500,
    },
})