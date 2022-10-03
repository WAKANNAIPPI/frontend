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
        <View>
            <Button
                title="ボタンをタップしてね"
                color="#806BFF"
                onPress={() => navigation.navigate('Quiz')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
});