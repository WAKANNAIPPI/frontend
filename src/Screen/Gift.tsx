import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export const Gift: React.FC = () => {
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.btn}>
                <Image
                            source={require('../Assets/Create/blue.png')}
                            style={{ width: 50, height: 50,  margin: 5 }} />
                <Text style={styles.txt}>青い星×３</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Image
                            source={require('../Assets/Create/red.png')}
                            style={{ width: 50, height: 50,  margin: 5 }} />
                <Text style={styles.txt}>赤い星×３</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Image
                            source={require('../Assets/Create/yellow.png')}
                            style={{ width: 50, height: 50,  margin: 5 }} />
                <Text style={styles.txt}>黄色い星×３</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Image
                            source={require('../Assets/Create/rare.png')}
                            style={{ width: 50, height: 50,  margin: 5 }} />
                <Text style={styles.txt}>レアな星×３</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.receive}>
                <Text style={{ color: 'white' , padding: 15,}}>受け取る</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        margin: 70,
    },
    btn:{
        backgroundColor: '#BDBAFA',
        flexDirection:'row',
        alignItems: 'center', 
        borderRadius: 100,
        width:300,
        hight:70,
        margin: 10,
    },
    txt:{
        padding: 15,
    },
    receive:{
        backgroundColor: '#806BFF',
        alignItems: 'center',
        borderRadius: 100,
        width: 300,
        hight: 70,
        margin: 10,
        marginTop: 50,
        

    }
})