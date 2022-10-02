import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import { RootStackNavProp } from "../Navigations";
import ScatterChart from "react-native-scatter-chart";
import { chartData } from "../Compoents/dot";

export const HomeScreen: React.FC = () =>{
    const navigation = useNavigation< RootStackNavProp<'Home'> >()
    const {width, height} = Dimensions.get("window");

    return(
        <View style={styles.container}>
            <ScatterChart
                backgroundColor='#282C3E'
                data={chartData}
                style={styles.chart}
                chartHeight={height}
                chartWidth={width}
            />
            <View style={styles.buttonLayout}>
                <TouchableOpacity onPress={() => navigation.navigate('Constellation')} style={styles.button}>
                    <Image
                        source={require('../Assets/Frame1.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={{ color: 'white' }}>Constellation</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
                    <Image
                        source={require('../Assets/Frame2.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={{ color: 'white' }}>Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Projection')} style={styles.button}>
                    <Image
                        source={require('../Assets/Frame3.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={{ color: 'white' }}>Prpjection</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                    <Image
                        source={require('../Assets/Frame4.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={{ color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        position: 'relative',

    },
    chart:{
        position: 'absolute',
        flex:1,
    },
    buttonLayout:{
        position:'absolute',
        flexDirection: 'column',
        alignSelf:'center',
        marginTop: 80,
        marginHorizontal: 16,
    },
    button:{
        flex:1,

    },
})

