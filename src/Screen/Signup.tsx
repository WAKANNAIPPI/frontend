import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";

export const Signup: React.FC = () => {
    const [name, setName] = useState('test');
    const [pas, setPas] = useState('30')
    const [checkPas, setCheckPas] = useState('30')

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='ユーザーを入力してください'
                onChangeText={(val) => setName(val)}
                keyboardType='default'
            />
            <TextInput 
                style={styles.input}
                placeholder='パスワードを入力してください'
                onChangeText={(val) => setPas(val)}
                keyboardType='default'
            />
            <TextInput 
                style={styles.input}
                placeholder='パスワードを再入力してください'
                onChangeText={(val) => setCheckPas(val)}
                keyboardType='default'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>作成</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'D9D9D9',
        alignItems:'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        margin: 10,
        width: 200,
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#43C58C',
        width: 100,
        height: 34,

    },
    btntext:{
        color: 'white',
        fontWeight: 'bold',
        padding:5,
    }
});
