import React, { useState } from "react";
import { Animated, View, StyleSheet, TouchableOpacity } from "react-native";

import {
    GestureHandlerRootView,
    PanGestureHandler,
    State,
} from 'react-native-gesture-handler';

const translateX = new Animated.Value(0);
const translateY = new Animated.Value(0);

const onPanEvent = Animated.event(

    [{ nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },},],

    { useNativeDriver: true }
);

const defaultPosition = {x: 0, y: 0, scale: 1 };

export default function HomeApp({ navigation }: any){
    const imagePan = React.createRef();
    const [lastPosition, setLastPosition] = useState(defaultPosition);
    return (
        <View style={styles.container}>
            <GestureHandlerRootView>
                <PanGestureHandler
                    ref={imagePan}
                    onGestureEvent={onPanEvent}
                    onHandlerStateChange={(event) => {
                        if (event.nativeEvent.oldState === State.ACTIVE) {
                            const posX = lastPosition.x + event.nativeEvent.translationX;
                            const posY = lastPosition.y + event.nativeEvent.translationY;
                            setLastPosition({ x: posX, y: posY, scale: lastPosition.scale });
                            translateX.setOffset(posX);
                            translateX.setValue(0);
                            translateY.setOffset(posY);
                            translateY.setValue(0);
                        }
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Constellation_Creation')}>
                        <Animated.Image
                            source={require("../Assets/Frame 3.png")}
                            resizeMode="cover"
                            style={[
                                {
                                    width: 200,
                                    height: 200,
                                },
                                { transform: [{ translateX }, {translateY}] },
                            ]}
                        />
                    </TouchableOpacity>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 500,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});