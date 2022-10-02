import React from "react";
import { useNavigation } from "@react-navigation/native";
import { QuizStackNavProp } from "../Navigations";
import { StyleSheet, 
         Text, 
         View, 
         TouchableOpacity, 
         Image, 
         Button,
        } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { QuizStackNavProp } from "../Navigations";

export const QuizScreen: React.FC = () => {
    const navigation = useNavigation<QuizStackNavProp<'Quiz'>>()

    return (
        <>
        <View style={styles.Container}>
            <Image style={{width:360, height:174}}
                source = {require("../Assets/logo.png")}>
            </Image>
            <Image style={{width:277, height:56}}
                source = {require("../Assets/Quiz/Quiz-start.png")}>
            </Image>
            <View style={styles.Button}>
                <Button
                    title="ボタンをタップしてね"
                    color="#806BFF"
                    onPress={() => navigation.navigate('Answer')}
                />
            </View>
f
        </View>
        <View style={styles.Button}>
            <Button
                title="ボタンをタップしてね"
                color="#806BFF"
                onPress={() => navigation.navigate('Answer')}
            />
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
    },
    Button:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 200,
  
        borderRadius: 100,
    },
});