import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RootStackNavProp } from "../Navigations";
import { StarsStackNavProp } from "../Navigations";
import { CreatedConstellation } from "../Compoents/createdConstellation";
import { completionFlag } from "../Screen/create";

export const Constellation: React.FC = () => {
    const [ createdConsteFlag, setCreatedConsteFlag ] = useState(false);
    const navigation = useNavigation< RootStackNavProp<'Constellation'> >();
    const starsNavigation = useNavigation< StarsStackNavProp<'Constellation'> >();

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
                {createdConsteFlag ?

                <TouchableOpacity 
                    style={styles.list}
                >
                    <CreatedConstellation />
                </TouchableOpacity>

                    :
                    <View></View>
                }
            </View>
            <View
                style={styles.editArea}
            >
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => starsNavigation.navigate("create")}
                >
                    <Image
                        source={require("../Assets/Constellation/edit.png")}
                        style={styles.editImage}
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
    editArea: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        marginLeft: 200,
        marginBottom: 30,
    },
    editImage: {
        width: 60,
        height: 60,
    },
});
