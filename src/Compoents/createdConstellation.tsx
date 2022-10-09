import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { replaceStoredStars, replaceStoredLines } from "../Screen/create";
import Canvas from 'react-native-canvas';

const originalConsteRef: any = React.createRef();

export function CreatedConstellation(config: any) {
    
    if (config.listing){
        let starIdPath: any[] = [];

        function StarsRedraw() {
            for (let i = 1; i < replaceStoredStars.length; i++){ //storedStarsLengthは2から
                switch(replaceStoredStars[i].starItemId) {
                    case 1:
                        starIdPath.push(require("../Assets/Create/red.png"));
                        break;
                    case 2:
                        starIdPath.push(require("../Assets/Create/blue.png"));
                        break;
                    case 3:
                        starIdPath.push(require("../Assets/Create/yellow.png"));
                        break;
                    case 4:
                        starIdPath.push(require("../Assets/Create/rare.png"));
                        break;
                }
            };

            return (
                <>
                    { starIdPath.map( (element, index) => {
                        return (
                            <View 
                                key={index}
                            >
                                <Image
                                    style={{
                                        transform: [
                                            //座標調整含む
                                            { translateX: ((replaceStoredStars[index + 1].starLocationX) / 8.5) + 35},
                                            { translateY: ((replaceStoredStars[index + 1].starLocationY) / 8.5) + 35},
                                        ],
                                        width: 25,      
                                        height: 25,
                                        position: 'absolute'
                                    }}
                                    source={element}
                                />
                            </View>
                        )
                    })}
                </>
            )
        }

        return (
            <View
                style={styles.listingContainer}
            >
                <StarsRedraw />
            </View>
        )
    }

    else {
        let starIdPath: any[] = [];

        useEffect (() => {
            const ctx: CanvasRenderingContext2D = originalConsteRef.current.getContext('2d');
            originalConsteRef.current.width =  600;
            originalConsteRef.current.height = 600;
            ctx.strokeStyle = "white",
            ctx.lineWidth = 1
            Redraw();
        });

        function Redraw(){
            const ctx: CanvasRenderingContext2D = originalConsteRef.current.getContext('2d');
            ctx.clearRect(0, 0, originalConsteRef.current.width, originalConsteRef.current.height);
            if(replaceStoredLines.length == 1){
                return;
            }

            for(let i = 1; i < replaceStoredLines.length; i++){
                ctx.beginPath();
                ctx.moveTo( Number( replaceStoredLines[i].sx ), Number( replaceStoredLines[i].sy ) );
                ctx.lineTo( Number( replaceStoredLines[i].fx ), Number( replaceStoredLines[i].fy ) );
                ctx.stroke();
            }
        }

        function StarsRedraw() {
            for (let i = 1; i < replaceStoredStars.length; i++){ //storedStarsLengthは2から
                switch(replaceStoredStars[i].starItemId) {
                    case 1:
                        starIdPath.push(require("../Assets/Create/red.png"));
                        break;
                    case 2:
                        starIdPath.push(require("../Assets/Create/blue.png"));
                        break;
                    case 3:
                        starIdPath.push(require("../Assets/Create/yellow.png"));
                        break;
                    case 4:
                        starIdPath.push(require("../Assets/Create/rare.png"));
                        break;
                }
            };

            return (
                <>
                    { starIdPath.map( (element, index) => {
                        return (
                            <View 
                                key={index}
                            >
                                <Image
                                    style={{
                                        transform: [
                                            { translateX: (replaceStoredStars[index + 1].starLocationX) / 1.5},
                                            { translateY: (replaceStoredStars[index + 1].starLocationY) / 1.5},
                                        ],
                                        width: 50,      
                                        height: 50,
                                        position: 'absolute'
                                    }}
                                    source={element}
                                />
                            </View>
                        )
                    })}
                </>
            )
        }

        return (
        <View
            style={styles.notListingContainer}
        >
            <Canvas ref={originalConsteRef}/>
            <StarsRedraw />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    listingContainer: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        margin: 12,
        width: 100,
        height: 100,
    },
    notListingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})