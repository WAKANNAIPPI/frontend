import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Modal, Pressable } from 'react-native';
import { NavigationHelpersContext, useFocusEffect, useNavigation } from "@react-navigation/native";
import { RootStackNavProp } from "../Navigations";
import { StarsStackNavProp } from "../Navigations";
import { CreatedConstellation } from "../Compoents/createdConstellation";
import { completionFlag, consteName } from "../Screen/create";
import axios from 'axios';

import { replaceStoredStars, replaceStoredLines } from '../Screen/create';


export let completionFlagHere: boolean = true;
export let editFlag: boolean = false;
export let storedStars_constellation: any;
export let storedLines_constellation: any;

export const Constellation: React.FC = () => {
    const navigation = useNavigation< RootStackNavProp<'Home'> >();
    const starsNavigation = useNavigation< StarsStackNavProp<'ConstellationNav'> >();

    const [ createdConsteDrawFlag, setCreatedConsteDrawFlag ] = useState(false);
    const [ consteModalVisible, setConsteModalVisible ] = useState(false);
    const [ stateConsteName, setStateConsteName ] = useState("");
    const [stateCompletionFlag, setStateCompletionFlag ] = useState(false)

    const [ Error, setError ] = useState<any>();

    useFocusEffect(
        React.useCallback(() => {
            setStateConsteName(consteName);
            
            editFlag = false;

            if (completionFlag) {
                setCreatedConsteDrawFlag(true);
            }
            else {
                setCreatedConsteDrawFlag(false);
            }

        }, [stateCompletionFlag])
    )
    
    function originalConsteEditButtonAction() {
        setConsteModalVisible(!consteModalVisible)

        editFlag = true;

        storedStars_constellation = replaceStoredStars

        starsNavigation.navigate('createNav')
    }

    function removeOriginaConsteButtonAction() {

        storedStars_constellation;

        storedStars_constellation;

        setCreatedConsteDrawFlag(false);

        setConsteModalVisible(!consteModalVisible);
    }

    const ConsteEdition = () => {
        setStateCompletionFlag(true);
        return (
            <View >
              <Modal
                animationType="slide"
                transparent={true}
                visible={consteModalVisible}
                onRequestClose={() => {
                  setConsteModalVisible(!consteModalVisible);
                }}
              >
              <>
                <View style={modalStyles.modalHeaderHeader}>
                  <TouchableOpacity
                        style={modalStyles.modalCloseButton}
                        onPress={() => setConsteModalVisible(!consteModalVisible)}
                    >
                        <Text style={{
                            fontSize: 35,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                            ＜
                        </Text>
                  </TouchableOpacity>
                </View>

                <View style={modalStyles.modalHeader}> 
                    {/* サーバーとの接続時、表示している星座のIDをcreateに渡して画面遷移 */}
                    <TouchableOpacity
                        style={modalStyles.modalEditButton}
                        onPress={originalConsteEditButtonAction}
                    >
                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                        }}>
                            編集
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={modalStyles.modalCreatedConste}>
                {/* サーバーとの接続時、IDだけCreatedConstellationに渡す */}
                    <View style={{
                        marginLeft: 30,
                        marginBottom: 500,
                        width: 300,
                        height: 60,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                    }}>
                        <Text style={{fontSize: 20}}>
                            星座名  {stateConsteName}
                        </Text>
                    </View>
                    <View style={{position: 'absolute'}}>
                        <CreatedConstellation listing={false}/>
                    </View>
                </View>

                <View style={modalStyles.modalFooter}>
                <TouchableOpacity
                        style={modalStyles.modalDeleteButton}
                        onPress={removeOriginaConsteButtonAction}
                    >
                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                        }}>
                            削除
                        </Text>
                    </TouchableOpacity>
                </View>
              </>
              </Modal>
              <View style={styles.list}>
                <TouchableOpacity 
                        style={styles.listedConste}
                        onPress={() => setConsteModalVisible(true)}
                    >
                    <CreatedConstellation listing={true}/>
                </TouchableOpacity>
              </View>
            </View>
          );
    }

    return (
        <View style={styles.container}>
           <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.backButton}
                >
                        <Text style={styles.direction}>
                            ＜
                        </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.slide}>
                {createdConsteDrawFlag ?
                <ConsteEdition />
                :
                <></>
                }
            </View>
            <View
                style={styles.newEditArea}
            >
                <TouchableOpacity
                    style={styles.newEditButton}
                    onPress={() => starsNavigation.navigate("createNav")}
                >
                    <Image
                        source={require("../Assets/Constellation/edit.png")}
                        style={styles.newEditImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232946'
    },
    header: {
        alignItems: 'center',
        flex: 0.18,
        backgroundColor: '#806BFF'
    },
    backButton: {
        marginTop: 50,
        marginEnd: 250,
        width: 30,
        height: 30,
    },
    direction: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    slide: {
        flex: 1,
    },
    list: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    listedConste: {
        margin: 15,
        width: 100,
        height: 100,
    },
    testText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    newEditArea: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newEditButton: {
        marginLeft: 200,
        marginBottom: 30,
    },
    newEditImage: {
        width: 60,
        height: 60,
    },
});

const modalStyles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    modalHeaderHeader: {
        flex: 1.3,
        backgroundColor: '#806BFF',
        justifyContent: "center",
        alignItems: "center",
    },
    modalHeader: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#BDBAFA',
        justifyContent: "center",
        alignItems: "center",
    },
    modalCreatedConste: {
        flex: 14,
        paddingBottom: 50,
        paddingRight: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#232946',
    },
    modalFooter: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#BDBAFA'
    },
    modalCloseButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 300,
        width: 50,
        height: 50,
    },
    modalEditButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 250,
        backgroundColor: '#43C58C',
        borderRadius: 30,
        width: 130,
        height: 40,
    },
    modalDeleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 250,
        backgroundColor: '#43C58C',
        borderRadius: 30,
        width: 130,
        height: 40,
    }
})
