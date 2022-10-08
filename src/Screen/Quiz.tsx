import React from "react";
import { useNavigation } from "@react-navigation/native";
import { QuizStackNavProp } from "../Navigations";
import { StyleSheet, 
         Text, 
         View, 
         TouchableOpacity, 
         Image, 
         Button,
        } from "react-native";

export const QuizScreen: React.FC = () => {
    const navigation = useNavigation<QuizStackNavProp<"Quiz">>()
    return (
        <>
        <View style={styles.Container}>
            <Image style={{width:360, height:174}}
                source = {require("../Assets/logo.png")}
            />
            <Image style={{width:277, height:56}}
                source = {require("../Assets/Quiz/Quiz-start.png")}
            />
                <TouchableOpacity
                  style ={styles.Button}
                  onPress={() => navigation.navigate("Answer")}
                >
                    <Text style= {styles.Textfont}>
                        ボタンをタップ★
                    </Text>
                </TouchableOpacity>
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
        backgroundColor: '#806BFF',
        alignItems: 'center',
        margin: 90,
        borderRadius: 50,
    },
    Textfont:{
        color: 'white',
        fontWeight: 'normal',
        fontSize: 20,
        padding: 10,
    },
    
});