import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export const Choice: React.FC = () => {
    return(
        <View style={styles.container}>
            <View style={styles.created}>
                {/* チェックボックスを実装 */}
                <Text style={styles.txt}>Sample1</Text>
            </View>
            <View style={styles.created}>
                {/* チェックボックスを実装 */}
                <Text style={styles.txt}>Sample2</Text>
            </View>
            <View style={styles.created}>
                {/* チェックボックスを実装 */}
                <Text style={styles.txt}>Sample3</Text>
            </View>
            <View style={styles.created}>
                {/* チェックボックスを実装 */}
                <Text style={styles.txt}>Sample4</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
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
        height:40,
    },
})