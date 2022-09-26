import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, PanResponder, Animated } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import Canvas from "react-native-canvas"

let p: number = 1

export const create = (props: any) => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();

    const canvasRef: any = React.createRef();
    const canvasTransparentRef: any = React.createRef();
    
    const [ drawFlag, setDrawFlag ] = useState(false);
    const [ startX, setStartX ] = useState("");
    const [ startY, setStartY ] = useState("");
    const [ finishX, setFinishX] = useState("");
    const [ finishY, setFinishY ] = useState("");
    const [ currentX, setCurrentX ] = useState("");
    const [ currentY, setCurrentY ] = useState("");
    const [ count, setCount ] = useState(0);
    const [ storedLines, setStoredLines ] = useState([{
        sx: "",
        sy: "",
        fx: "",
        fy: ""
    }]);

    useEffect (() => {
        canvasRef.current.width = 500;
        canvasRef.current.height = 1000;
        updateCanvas();
    }, []);
    
    function updateCanvas() {
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');

    }

    function onTouch(e: any) {
        setDrawFlag(true);  //フラグをオンにする
      }
    
    function onMove(e: any){
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');

        if (!drawFlag) return;

        if ( currentX == "" ){
            setStartX( e.nativeEvent.locationX );
            setStartY( e.nativeEvent.locationY );
            setCurrentX( e.nativeEvent.locationX );
            setCurrentY( e.nativeEvent.locationY );
        }
        else {
            Redraw();

            ctx.beginPath();

            ctx.lineCap = "round";
            ctx.lineJoin  = "round";
            ctx.lineWidth = 2;
            ctx.strokeStyle = "white";

            ctx.moveTo( Number( startX ), Number( startY ) );
            ctx.lineTo( Number( currentX ), Number( currentY ) );

            ctx.stroke();
            setCurrentX( e.nativeEvent.locationX );
            setCurrentY( e.nativeEvent.locationY );
        }
    }

    const onTouchEnd = (e: any) => {
        setDrawFlag(false);

        setCurrentX("");
        setCurrentY("");

        storedLines.push({
            sx: startX,
            sy: startY,
            fx: currentX,
            fy: currentY
        })
    }

    function Redraw(){
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        if(storedLines.length == 1){
            return;
        }

        for(let i = 1; i < storedLines.length; i++){
            ctx.beginPath();
            ctx.moveTo( Number( storedLines[i].sx ), Number( storedLines[i].sy ) );
            ctx.lineTo( Number( storedLines[i].fx ), Number( storedLines[i].fy ) );
            ctx.stroke();
        }
    }

    function completionButtonAction() {
        canvasRef.current.width = 500;
        canvasRef.current.height = 1000;
        const ctx = canvasRef.current.getContext('2d');
        ctx.strokeStyle = "#FFFFFF"
        ctx.strokeRect(0, 0, 300, 300);
    }

    function clear() {

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

            <Text>{storedLines.length}</Text>
            <Text>{storedLines[(storedLines.length - 1)].fy}</Text>
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
    canvasTransparent: {
        position: 'absolute',
    },
    exampleImageView: {
        flex: 1,
        position: 'absolute',
        
    },
    exampleImage: {
        width: 50,
        height: 50,
    }
    
})


