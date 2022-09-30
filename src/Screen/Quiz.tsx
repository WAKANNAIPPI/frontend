import React from "react";
import { StyleSheet, 
         Text, 
         View, 
         TouchableOpacity, 
         Image, 
         Button,
        } from 'react-native';
        
export const QuizScreen: React.FC = () => {
    return (
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
                />
            </View>
        </View>

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
        paddingTop: 100,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    }
});