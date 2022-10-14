import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StarrySky } from "../Compoents/dot";
import { useNavigation } from "@react-navigation/native";
import { ProjectionStackNavProp } from "../Navigations";
import { RootStackNavProp } from "../Navigations";
import { CreatedConstellation } from "../Compoents/createdConstellation"
import { consteProFlag } from "./Choice";

export const ProjectionScreen: React.FC = () => {
    const proNavigation = useNavigation<ProjectionStackNavProp<'Projection'>>();
    const homeNavigation = useNavigation<RootStackNavProp<'Home'>>();
    const [ consteFlag, setConsteFlag ] = useState(false)

    useEffect(() => {
        setConsteFlag(consteProFlag)
    }, [])

    return (
        <View style={styles.container}>
            <StarrySky color="black" />
            <View style={styles.body}>
                <View style={{
                    position: 'absolute', 
                    bottom: 300, width: 400, height: 100, end: -200, paddingLeft: 30, paddingTop: 30,
                    justifyContent: 'center', alignItems: 'flex-start'
                }}>
                        <TouchableOpacity onPress={() => {homeNavigation.navigate('Home')}}>
                            <Text style={{color: 'white', fontSize: 35 }}>＜</Text>
                        </TouchableOpacity>
                </View>
                {consteFlag ?
                    <View style={{position: 'absolute'}}>
                        <CreatedConstellation listing={false}/>
                    </View>
                :
                    <></>
                } 
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    body:{
        position: "absolute",
        alignSelf:'center',
        marginTop:400,
    },
    btn:{
        backgroundColor: '#806BFF',
        borderRadius: 20,
        width: 220,
        height: 40,

    },
    txt:{
        color:'white',
        padding: 10,
        alignSelf:'center'
    },
    choice:{
        padding: 10,
    },
    selbtn:{
        padding: 10,
    },
    
})