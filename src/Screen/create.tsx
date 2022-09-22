import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, PanResponder } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { useNavigation } from "@react-navigation/native";
import Canvas from "react-native-canvas"

export const create = () => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();
    const canvasRef: any = React.createRef();
    
    const [ drawFlag, setCount ] = useState(false);
    const [ previousX, setCountX ] = useState("");
    const [ previousY, setCountY ] = useState("");
    const [ currentX, setCountCX ] = useState("");
    const [ currentY, setCountCY ] = useState("");
    const [ count, set ] = useState(0);
    
    useEffect (() => {
        canvasRef.current.width = 300;
        canvasRef.current.height = 300;
        updateCanvas();
    }, []);
    
    function updateCanvas() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.strokeStyle = "#FFFFFF"
        ctx.strokeRect(0, 0, 300, 300);
    }

    function onTouch(e: any) {
        const ctx = canvasRef.current.getContext('2d');
        setCount(true);  //フラグをオンにする
        setCountX( e.nativeEvent.locationX );
        setCountY( e.nativeEvent.locationY );
        ctx.moveTo( Number(previousX), Number(previousY) )
        set(count + 1);
      }
    
    function onMove(e: any){

        if (!drawFlag) return;

        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');

        ctx.beginPath();

        if (currentX == ""){
            setCountCX( previousX );
            setCountCY( previousY );
        }   
        else {
            setCountX( e.nativeEvent.locationX );
            setCountY( e.nativeEvent.locationY );
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
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        setCountX("");
        setCountY("");
        setCountCX("");
        setCountCY("");
        setCount(false);
    }

    function completionButtonAction() {
        canvasRef.current.width = 300;
        canvasRef.current.height = 300;
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
            <Text></Text>
            <View
                style = {styles.canvas}
                onTouchStart = {onTouch}
                onTouchMove = {onMove}
                onTouchEnd = {onTouchEnd}
            >
            <Canvas ref = {canvasRef} />
                
            <Text>{count}</Text>
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
        top: 120,
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
})


