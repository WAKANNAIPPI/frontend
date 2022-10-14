import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { QuizStackNavProp } from "../Navigations";
import { questions } from "../Compoents/Question";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from 'react-native';

export const Answer: React.FC = () => {
    const navigation = useNavigation<QuizStackNavProp<'Quiz'>>()
    const [CorrectAnswerflag, setModalCorrectAnswer] = useState(false) //正解画面を出すためのflag
    const [IncorrectAnswerflag, setModalIncorrectAnswer] = useState(false) //不正解画面を出すためのflag

    function incorrectButtonAction() {
        setModalIncorrectAnswer(true);

        setTimeout(() => {
            setModalCorrectAnswer(false);
            navigation.navigate('Quiz')
        }, 5 * 1000)
    }

    function correctButtonAction() {
        setModalCorrectAnswer(true);
    }

    function ModalCorrectAnswer(): JSX.Element {

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={CorrectAnswerflag}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: "#806BFF",
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderRadius: 20,
                        }}>
                            <View style={Modals.modalView}>
                                <Text style={[
                                    Modals.modalText,
                                    {
                                        fontSize: 40,
                                        fontWeight: '300',
                                    }
                                ]}>
                                    正解{'\n'}
                                </Text>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: "#43C588", fontSize: 100}}>◎</Text>
                                </View>
                                <Text style={[
                                    Modals.modalText,
                                    {
                                        fontSize: 30,
                                    }
                                ]}>
                                    おめでとう！{"\n"}明日も挑戦してね
                                </Text>

                                <Pressable
                                    style={[Modals.button, Modals.buttonClose]}
                                    onPress={() => {
                                        setModalCorrectAnswer(!CorrectAnswerflag);
                                        navigation.navigate("Gift");
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        textAlign: 'center',
                                        fontSize: 22,
                                        paddingTop: 8,
                                    }}>
                                        アイテムを受け取る
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    };

    function ModalIncorrectAnswer(): JSX.Element {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={IncorrectAnswerflag}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: "#806BFF",
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderRadius: 20,
                        }}>
                            <View style={Modals.modalView}>
                                <Text style={[
                                    Modals.modalText,
                                    {
                                        fontSize: 50,
                                        fontWeight: '300',
                                    }
                                ]}>
                                    不正解{'\n'}
                                </Text>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 100, padding: -40}}>×</Text>
                                </View>
                                <Text style={[
                                    Modals.modalText,
                                    {
                                        fontSize: 30,
                                    }
                                ]}>
                                    {"\n"}残念！{"\n"}明日も挑戦してね
                                </Text>
                                <Text style={[
                                    Modals.modalText,
                                    {
                                        fontSize: 15,
                                    }
                                ]}>
                                    {"\n"}{"\n"} ~5秒後にスタート画面に戻ります~
                                </Text>

                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    };

    const Modals = StyleSheet.create({
        modalView: {
            width: 280,
            height: 450,
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        button: {
            width: 220,
            height: 50,
            borderRadius: 20,
            marginTop: 70,
            margin: 50,
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            backgroundColor: "#43C58C",
        },
        textStyle: {
            color: "black",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            textAlign: "center"
        },

    });


    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingBottom: 80,

        },
        Answer: {
            alignItems: 'center',
            paddingTop: 300,
        },
        Button: {
            backgroundColor: '#BDBAFA',
            alignItems: 'center',
            width: 300,
            height: 40,
            margin: 50,
            borderRadius: 100,
        },
        Textfont: {
            color: 'black',
            fontWeight: 'normal',
            fontSize: 30,
        },
    });

    const number = Math.floor(Math.random() * 4) + 0;
    let arr: number[] = [1, 2, 3, 4];
    let a = arr.length;

    while (a) {
        let j = Math.floor(Math.random() * a);
        let t = arr[--a];
        arr[a] = arr[j];
        arr[j] = t;
    }

    arr.forEach(function (value) { console.log(value) });

    return (
        <>
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
                        fontSize: 28,
                        fontWeight: 'normal',
                    }}>
                        {questions[number].questionText}
                    </Text>
                </Text>

                {
                    arr.map((data, index) => 
                        (questions[number].answerOptions[data - 1].setModalCorrectAnswer) ? 
                        <TouchableOpacity style={styles.Button} onPress = {correctButtonAction}>
                            <Text style={styles.Textfont} key={index}>
                                {questions[number].answerOptions[data - 1].answerText}
                            </Text>
                        </TouchableOpacity>
                        
                        : 
                        <TouchableOpacity style={styles.Button} onPress = {incorrectButtonAction}>
                        <Text style={styles.Textfont} key={index}>
                            {questions[number].answerOptions[data - 1].answerText}
                        </Text>
                    </TouchableOpacity>
                    )
                }
                <ModalCorrectAnswer />
                <ModalIncorrectAnswer />
            </View>
        </>
    );
};