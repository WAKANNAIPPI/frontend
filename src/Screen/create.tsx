import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, PanResponder, Animated } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import Canvas from "react-native-canvas"

export const create = (props: any) => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();

    const canvasRef: any = React.createRef();
    
    const [ drawFlag, setDrawFlag ] = useState(false);
    const [ startX, setStartX ] = useState("");
    const [ startY, setStartY ] = useState("");
    const [ currentX, setCurrentX ] = useState("");
    const [ currentY, setCurrentY ] = useState("");
    const [ starsCount, setStarsCount ] = useState(0);
    const [ starsListFlag, setStarsListFlag ] = useState(false);
    const [ starsPutFlag, setStarsPutFlag ] = useState(false);
    const [ storedLines, setStoredLines ] = useState([{
        sx: "",
        sy: "",
        fx: "",
        fy: ""
    }]);

    useEffect (() => {
        canvasRef.current.width = 1000;
        canvasRef.current.height = 1000;
    }, []);
    
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

        //線座標を新しい配列要素に保存
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
    }

    function starsButtonAction() {
        if (starsCount % 2 == 0){
            setStarsListFlag(true);
        }
        else {
            setStarsListFlag(false);
        }
        setStarsCount(starsCount + 1);
    }

    function StarsItemList() {
            return (
                <View
                    style={styles.starsListContainer}
                >
                    <View
                        style={styles.starsListView}
                    >
                        <TouchableOpacity
                            onPress={() => StarsSelectButtonAction(1)}
                        >
                            <Image
                                source={require("../Assets/Frame1.png")}
                                style={styles.exImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
    }

    function StarsSelectButtonAction(props: any){
        setStarsPutFlag(true);

    }

    function Stars(props: any){

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

            </View>
            {starsListFlag
                ? <StarsItemList/>
                : <></>
            }
        </View>


        <View style={styles.create}>
            <TouchableOpacity
                style={styles.starsView}
                onPress={starsButtonAction}
            >
                <Image
                    style={styles.starsImage}
                    source={require('../Assets/Create/Star1.png')}
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
        marginEnd: 140,
    },
    starsImage: {
        width: 35,
        height: 35,
    },
    returnView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginEnd: 20,
    },
    returnText: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    goView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    goText: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    starsListContainer: {
        flex: 1,
        position: 'absolute',
    },
    starsListView: {
        flex: 1,
        alignItems: 'center',
        justify: 'stretch',
        backgroundColor: '#806BFF',
        direction: 'inherit',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 525,
        marginEnd: 50,
        width: 300,
        height: 70,
    },
    exImage: {
        marginEnd: 10,
        width: 50,
        height: 50
    }
})


