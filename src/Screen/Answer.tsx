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
export const Answer: React.FC = () => {
    const navigation = useNavigation<QuizStackNavProp<'Quiz'>>()
    return (
        <>
        <View>
            <Text
              style={{
                backgroundColor: "#BDBAFA",
                height: 200,
                fontSize: 30,
            }}
            >
                ここに問題文を記述する予定です。
            </Text>
        </View>
        <View style={styles.container}>
            <TouchableOpacity
                style ={styles.Button}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    一つ目の選択肢
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style ={styles.Button}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    二つ目の選択肢
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style ={styles.Button}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    三つ目の選択肢
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style ={styles.Button}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    四つ目の選択肢
                </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingBottom: 80,
    
    },
    Answer:{
        alignItems: 'center',
        paddingTop: 300,
    },
    Button:{
        backgroundColor: '#806BFF',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 60,
        paddingLeft: 60,
        paddingBottom: 10,
        borderRadius: 100,
        margin: 50,
    },
    Textfont:{
        color: 'white',
        fontWeight: 'normal',
    },
});