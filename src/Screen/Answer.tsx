import React, { useState, useEffect, } from "react";
import { useNavigation } from "@react-navigation/native";
import { QuizStackNavProp } from "../Navigations";
import { StyleSheet,
         Text,
         View,
         TouchableOpacity,
         Image,
         Button,
         Modal,
         Alert,
         Pressable,
        } from 'react-native';

export const Answer: React.FC = () => {
    const navigation = useNavigation<QuizStackNavProp<'Quiz'>>()
    
    return (
        <View style={styles.container}>
            <Text
              style={{
                backgroundColor: "#BDBAFA",
                height: 200,
                fontSize: 40,
                fontWeight: 'bold',
            }}
            >
                問題{"\n"}
                <Text numberOfLines={3} style={{
                    fontSize: 23,
                    fontWeight: 'normal',
                }}>
                    人類で初めて宇宙飛行に成功し「地球は青かった」という言葉を残したのは誰？
                </Text>
            </Text>
            
            <TouchableOpacity
                style ={styles.Button}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    北欧神話
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style ={styles.Button}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    ギリシャ神話
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style ={styles.Button}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    日本神話
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style ={{
                    backgroundColor: '#806BFF',
                    alignItems: 'center',
                    width: 300,
                    height: 40,
                    borderRadius: 100,
                    marginTop: 40,
                }}
                // onPress={() => navigation.navigate("")}
            >
                <Text style={styles.Textfont}>
                    エジプト神話
                </Text>
            </TouchableOpacity>
        </View>
    );

    function modal(): JSX.Element {
        const [modalVisible, setModalVisible] = useState(false);
        return (
            <View style={Modals.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    } }
                >
                    <View style={Modals.centeredView}>
                        <View style={Modals.modalView}>
                            <Text style={Modals.modalText}>Hello World!</Text>
                            <Pressable
                                style={[Modals.button, Modals.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={Modals.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[Modals.button, Modals.button]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={Modals.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
        );    }
}
    
const Modals= StyleSheet.create({
    centeredView: {
        flex: 1,
        jusifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});


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
        width: 300,
        height: 40,
        borderRadius: 100,
        margin: 50,
    },
    Textfont:{
        color: 'white',
        fontWeight: 'normal',
        fontSize: 30,
    },
});