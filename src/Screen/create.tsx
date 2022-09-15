import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { useNavigation } from "@react-navigation/native"

export const create: React.FC = () => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();
    return (
        <>

        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Constellation')}
                style={styles.backButton}
            >
                    <Text style={styles.direction}>
                        ＜
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Constellation')}
                style={styles.completion}
            >
                    <Text style={styles.completionText}>
                        完了
                    </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.pallet}>
        </View>

        <View style={styles.create}>
            <TouchableOpacity
                style={styles.starsView}
            >
                <Image
                    style={styles.starsImage}
                    source={require('../Assets/Create/Star1')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.expansionView}
            >
                <Image
                    style={styles.expansionImage}
                    source={require('../Assets/Create/expansion.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.reductionView}
            >
                <Image
                    style={styles.reductionImage}
                    source={require('../Assets/Create/reduction.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.returnView}
            >
                <Text
                    style={styles.returnText}
                >
                    ←
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.goView}
            >
                <Text
                    style={styles.goText}
                >
                    →
                </Text>
            </TouchableOpacity>
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#806BFF'
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
    },
    direction: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    completion: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 75,
        backgroundColor: '#43C58C',
        borderRadius: 30,
        marginLeft: 100,
    },
    completionText: {
    },
    pallet: {
        flex: 1,
        backgroundColor: "white",
    },
    create: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#806BFF'
    },
    starsView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
    },
    starsImage: {
        width: 30,
        height: 30,
    },
    expansionView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
    },
    expansionImage: {
        width: 30,
        height: 30,
    },
    reductionView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 50,
    },
    reductionImage: {
        width: 30,
        height: 30,
    },
    returnView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
    },
    returnText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    goView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    goText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
})


