import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { RootStackNavProp, SignupStackNavProp } from "../Navigations";
import { useState } from "react";
import axios from "axios";
import useCookies from "react-cookie";

export const login: React.FC = () => {
    const navigation = useNavigation<SignupStackNavProp<'Signup'>>()
    const Homenavigation = useNavigation<RootStackNavProp<'Home'>>()

    const [name, setName] = useState("");
    const [pas, setPas] = useState("")
    const [nameAlert, setNAlert] = useState("")
    const [pasAlert, setPAlert] = useState("")

    const click = () => {
        if (name == "" ) {
            setNAlert("ユーザー名を入力してください")
        }
        if ( pas == "") {
            setPAlert("パスワードを入力してください")
        }

        if(name !="" && pas != ""){
            axios.post('/login', {
                userId: name,
                userPass: pas,
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error)
            })
        }
        // Homenavigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.red}>{nameAlert}</Text>
            <TextInput
                style={styles.input}
                placeholder='ユーザーを入力してください'
                onChangeText={(val) => setName(val)}
                keyboardType='default'
            />
            <Text style={styles.red}>{pasAlert}</Text>
            <TextInput
                style={styles.input}
                placeholder='パスワードを入力してください'
                onChangeText={(val) => setPas(val)}
                keyboardType='default'
            />

            <TouchableOpacity style={styles.button} onPress={click}>
                <Text style={styles.btntext}>作成</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                <Text>signup</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    red: {
        color: 'red',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        margin: 10,
        width: 200,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#43C58C',
        width: 100,
        height: 34,

    },
    btntext: {
        color: 'white',
        fontWeight: 'bold',
        padding: 5,
    }
});