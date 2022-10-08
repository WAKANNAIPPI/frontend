import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Modal, Pressable } from 'react-native';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RootStackNavProp } from "../Navigations";
import { StarsStackNavProp } from "../Navigations";
import { CreatedConstellation } from "../Compoents/createdConstellation";
import { completionFlag } from "../Screen/create";

export const Constellation: React.FC = () => {
    const navigation = useNavigation< RootStackNavProp<'Constellation'> >();
    const starsNavigation = useNavigation< StarsStackNavProp<'Constellation'> >();

    const [ createdConsteFlag, setCreatedConsteFlag ] = useState(false);
    const [ consteModalVisible, setConsteModalVisible ] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            if ( completionFlag ){
                setCreatedConsteFlag(true);
            }
            else {
                setCreatedConsteFlag(false);
            }

            return () => {
                if ( completionFlag ){
                    setCreatedConsteFlag(true);
                }
                else {
                    setCreatedConsteFlag(false);
                }
            }
        }, [])
    )
    
    const ConsteEdition = () => {
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
                <View style={modalStyles.centeredView}>
                  <View style={modalStyles.modalView}>
                    <Pressable
                      style={[modalStyles.button, modalStyles.buttonClose]}
                      onPress={() => setConsteModalVisible(!consteModalVisible)}
                    >
                      <Text style={modalStyles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity 
                    style={styles.list}
                    onPress={() => setConsteModalVisible(true)}
                >
                    <CreatedConstellation listing={true}/>
                </TouchableOpacity>
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
                {createdConsteFlag 
                ?
                <ConsteEdition/>
                :
                <View></View>
                }
            </View>
            <View
                style={styles.newEditArea}
            >
                <TouchableOpacity
                    style={styles.newEditButton}
                    onPress={() => starsNavigation.navigate("create")}
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
        width: 500,
        height: 500,
        flexDirection: 'row',
        alignItems: 'baseline',
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        borderColor: "white",
        borderRadius: 20,
        padding: 100,
        justifyContent: 'center',
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
      }
})
