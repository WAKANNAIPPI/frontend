import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Modal, Pressable } from 'react-native';
import { NavigationHelpersContext, useFocusEffect, useNavigation } from "@react-navigation/native";
import { RootStackNavProp } from "../Navigations";
import { StarsStackNavProp } from "../Navigations";
import { CreatedConstellation } from "../Compoents/createdConstellation";
import { completionFlag } from "../Screen/create";

export const Constellation: React.FC = () => {
    const navigation = useNavigation< RootStackNavProp<'Constellation'> >();
    const starsNavigation = useNavigation< StarsStackNavProp<'Constellation'> >();

    const [ createdConsteDrawFlag, setCreatedConsteDrawFlag ] = useState(false);
    const [ consteModalVisible, setConsteModalVisible ] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            if (completionFlag) {
                setCreatedConsteDrawFlag(true);
            }
            else {
                setCreatedConsteDrawFlag(false);
            }
        }, [])
    )
    
    function originalConsteEditButtonAction() {
        setConsteModalVisible(!consteModalVisible)
        starsNavigation.navigate('create')
    }

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
                    <CreatedConstellation listing={false}/>
                </View>

                <View style={modalStyles.modalFooter}>
                {/* サーバーとの接続時、表示している星座の削除 */}
                <TouchableOpacity
                        style={modalStyles.modalDeleteButton}
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
