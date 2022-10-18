import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StarrySky } from "../Compoents/dot";
import { useNavigation } from "@react-navigation/native";
import { ProjectionStackNavProp } from "../Navigations";


export const Projection: React.FC = () => {
    const proNavigation = useNavigation<ProjectionStackNavProp<'Projection'>>();

    return (
        <View style={styles.container}>
            <StarrySky color="black" />
            <View style={styles.body}>
                <View style={{                      
                        position: 'absolute',
                        backgroundColor: "#806BFF", 
                        bottom: 430, width: 400, height: 100, end: -79, paddingLeft: 30, paddingTop: 30,
                        justifyContent: 'center', alignItems: 'flex-start'
                        }}>
                    <TouchableOpacity onPress={(() => {proNavigation.goBack()})}>
                        <Text style={{color: 'white', fontSize: 35 }}>＜</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.selbtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => proNavigation.navigate('ProjectionScreen')}>
                        <Text style={styles.txt}>プロジェクタ投影用画面</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.choice}>
                    <TouchableOpacity style={styles.btn} onPress={() => proNavigation.navigate('Choice')}>
                        <Text style={styles.txt}>星座を選択</Text>
                    </TouchableOpacity>
                </View>
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