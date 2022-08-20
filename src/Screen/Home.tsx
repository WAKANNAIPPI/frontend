import React, { useState } from "react";
import { Animated, View, StyleSheet, TouchableOpacity, } from "react-native";

import {
    GestureHandlerRootView,
    PanGestureHandler,
    PinchGestureHandler,
    State,
  } from 'react-native-gesture-handler';
  
  const baseScale = new Animated.Value(1);
  const pinchScale = new Animated.Value(1);
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  
  // ズームイベント
  const onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: pinchScale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );
  
  // ドラッグイベント
  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );
  
  const defaultPosition = { x: 0, y: 0, scale: 1 };
  
  export default function App({ navigation }: any ) {
    const imagePan = React.createRef();
    const imagePinch = React.createRef();
    const [lastPosition, setLastPosition] = useState(defaultPosition);
    const scale = Animated.multiply(baseScale, pinchScale);
    return (
      <View style={styles.container}>
        <GestureHandlerRootView>
          <PanGestureHandler
            ref={imagePan}
            simultaneousHandlers={imagePinch}
            onGestureEvent={onPanEvent}
            onHandlerStateChange={(event) => {
              if (event.nativeEvent.oldState === State.ACTIVE) {
                // ドラッグ終了時点の値を次の開始地点として設定
                const posX = lastPosition.x + event.nativeEvent.translationX;
                const posY = lastPosition.y + event.nativeEvent.translationY;
                setLastPosition({ x: posX, y: posY, scale: lastPosition.scale });
                translateX.setOffset(posX);
                translateX.setValue(0);
                translateY.setOffset(posY);
                translateY.setValue(0);
              }
            }}>
            <Animated.View>
              <PinchGestureHandler
                ref={imagePinch}
                simultaneousHandlers={imagePan}
                onHandlerStateChange={(event) => {
                  if (event.nativeEvent.oldState === State.ACTIVE) {
                    // ズーム終了時点の値を次の開始スケール値として設定
                    const lastScale =
                    event.nativeEvent.scale < 1 ? 1 : event.nativeEvent.scale;
                    setLastPosition({ ...lastPosition, scale: lastScale });
                    baseScale.setValue(lastScale);
                    pinchScale.setValue(1);
                  }
                }}
                onGestureEvent={onZoomEvent}>
                <TouchableOpacity onPress={() => navigation.navigate('Constellation_Creation')}>
                    <Animated.Image
                        source={require('../Assets/Frame 3.png')}
                        resizeMode="contain"
                        style={[
                            {
                            top: -300,
                            left: -30,
                            width: 100,
                            height: 100,
                            },
                            { transform: [{ scale }, { translateX }, { translateY }] },
                        ]}
                    />
                </TouchableOpacity>
              </PinchGestureHandler>
            </Animated.View>
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