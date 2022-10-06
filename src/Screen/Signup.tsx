import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { SignupStackNavProp } from "../Navigations";
import { RootStackNavProp } from "../Navigations";

export const Signup: React.FC = () => {
    const navigation = useNavigation<SignupStackNavProp<'Signup'>>()
    const Homenavigation = useNavigation<RootStackNavProp<'Home'>>()
    
    const [name, setName] = useState("0");
    const [pas, setPas] = useState("0")
    const [checkPas, setCheckPas] = useState("0")
    const [alert, setAlert] = useState("")   
    
    const click = () =>{
        if(name == "0" || pas == "0" || checkPas == "0"){
            setAlert("ユーザー名・パスワードを入力してください")
            console.log(alert)
        }
        else if(pas == checkPas){
            Homenavigation.navigate('Home')
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.red}>{alert}</Text>
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

            <TouchableOpacity style={styles.button} onPress={click}>
                <Text style={styles.btntext}>作成</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('login')} >login</TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'D9D9D9',
        alignItems:'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    red:{
        color:'red',
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
