import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { RootStackNavProp } from "../Navigations";
import ScatterChart from "react-native-scatter-chart";
import { chartData } from "../Compoents/dot";


export const HomeScreen: React.FC = () =>{
    const navigation = useNavigation< RootStackNavProp<'Home'> >()

    return(
        <View style={styles.container}>
            <ScatterChart
                backgroundColor='#282C3E'
                data={chartData}
                height={500}
                unitY=''
                style={styles.chart}
            />
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('Constellation')}>
                    <Image
                        source={require('../Assets/Frame1.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text>Constellation</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                    <Image
                        source={require('../Assets/Frame2.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text>Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Projection')}>
                    <Image
                        source={require('../Assets/Frame3.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text>Prpjection</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <Image
                        source={require('../Assets/Frame4.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text>Account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                    <Image
                        source={require('../Assets/Frame5.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text>Help</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#282C3E',
        // 要修正！　画面サイズに合わせて設定
    },
    chart:{
    },
    button:{
        flexDirection: 'row',
        position:'absolute',
        padding:50,
    }
})

