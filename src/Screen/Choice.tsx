import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { ProjectionStackNavProp } from "../Navigations";
import { completionFlag, consteName } from "../Screen/create";

export let consteProFlag: boolean = false;

export const Choice: React.FC = () => {
    const navigation = useNavigation<ProjectionStackNavProp<'Choice'>>();

    const [ coloring, setColoring ] = useState('');

    function sampleButtonAction() { //黒で選択済み
        if (coloring == 'black'){
            consteProFlag = false;
            setColoring('white')
        }
        else {
            consteProFlag = true;
            setColoring('black')
        }
    }

    if (!consteName){
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Projection')}}>
                    <Text style={{ color:'white', fontSize:32, padding: 5}}>完了</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            {(coloring == 'black') ?
                <TouchableOpacity style={[styles.created, {backgroundColor: coloring}]} onPress={sampleButtonAction} >
                    <Text style={[styles.txt, {color: 'white'}]}>{consteName}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={[styles.created, {backgroundColor: 'white'}]} onPress={sampleButtonAction}>
                    <Text style={[styles.txt, {color: 'black'}]}>{consteName}</Text>
                </TouchableOpacity>
            }
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Projection')}>
                <Text style={{ color:'white', fontSize:32, padding: 5}}>完了</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        margin: 20,
        flex:1,
    },
    created:{
        margin: 25,
        width: 150,
        height: 65,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt:{
        margin: 10,
        fontSize: 32,
    },
    btn: {
        backgroundColor:'#43C58C',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 100,
        margin:50,
        width:150,
        height:55,
    },
})