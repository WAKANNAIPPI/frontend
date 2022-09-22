import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, PanResponder } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { useNavigation } from "@react-navigation/native";
import Canvas from "react-native-canvas"

export const create: React.FC = () => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();
    const canvasRef = useRef(null);
    let number: string = "hoge";
    
    const getContext = (): CanvasRenderingContext2D => {
        const canvas: any = canvasRef.current;

        return canvas.getContext('2d');
    }

    const [ drawFlag, setCount ] = useState(false);
    const [ previousX, setCountX ] = useState("");
    const [ previousY, setCountY ] = useState("");
    const [ currentX, setCountCX ] = useState("");
    const [ currentY, setCountCY ] = useState("");
    const [ color, setColor ] = useState("white");
    
    useEffect (() => {
        const ctx: CanvasRenderingContext2D = getContext();
        ctx.strokeStyle = "#FFFFFF"
        ctx.strokeRect(0, 0, 300, 300);
    });


    function onTouch(e: any) {
        setCount(true);  //フラグをオンにする
        setCountX( e.nativeEvent.locationX );
        setCountY( e.nativeEvent.locationY );
      }
    
    function onMove(e: any){

        if (!drawFlag) return;

        const ctx: CanvasRenderingContext2D = getContext();

        ctx.beginPath();

        if (currentX == ""){
            setCountCX( previousX );
            setCountCY( previousY );
        }   
        else {
            setCountX( e.nativeEvent.locationX );
            setCountY( e.nativeEvent.locationY );
            ctx.moveTo( Number( previousX ), Number( previousY ) );
        }

        ctx.lineTo( Number( currentX ), Number( currentY )) ;
        ctx.lineCap = "round";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();

        setCountCX( previousX );
        setCountCY( previousY );
    }

    const onTouchEnd = () => {
        setCountX("");
        setCountY("");
        setCountCX("");
        setCountCY("");
    }

    function completionButtonAction() {
    }

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
                onPress={completionButtonAction}
                style={styles.completion}
            >
                    <Text style={styles.completionText}>
                        完了
                    </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.paint}>
            <View
                style = {styles.canvas}
                onTouchStart = {onTouch}
                onTouchMove = {onMove}
                onTouchEnd = {onTouchEnd}
            >
            <Canvas style={styles.canvas1} ref = {canvasRef} />
                
            <Text>{Number(number)}</Text>
            </View>
        </View>

        <View style={styles.create}>
            <TouchableOpacity
                style={styles.starsView}
            >
                <Image
                    style={styles.starsImage}
                    source={require('../Assets/Create/Star1.png')}
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
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#806BFF'
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 100,
        top: 20,
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
        top: 20,
        marginLeft: 100,
    },
    completionText: {
    },
    paint: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#232946",
    },
    canvas: {
        flex: 1,
    },
    create: {
        flex: 0.15,
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
        marginLeft: 30,
        marginEnd: 10,
    },
    returnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    goView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    goText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    canvas1: {
        width: 300,
        height: 300,
    }
})


