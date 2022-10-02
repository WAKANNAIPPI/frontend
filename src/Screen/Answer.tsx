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

export const QuizScreen: React.FC = () => {
    const navigation = useNavigation<QuizStackNavProp<'Quiz'>>()

    return (
        <>
        <View style={styles.}>
             
        </View>
        <View style={styles.}>
            <Button
                title="ボタンをタップしてね"
                color="#806BFF"
                onPress={() => navigation.navigate('')}
            />
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    
});