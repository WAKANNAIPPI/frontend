import react, { useRef, useState } from 'react';
import { 
  Animated,
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Dimensions,
  InteractionManager,
  PanResponder,
  LayoutAnimation,
  UIManager,
  ImageSourcePropType
} from 'react-native';
import {
  
} from 'react-native-gesture-handler'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

const defaultPosition: any[] =
[
  {x: 0, y: -80},
  {x: -100, y: -60},
  {x: -60, y: -20},
  {x: 0, y: 0},
  {x: 60, y: -20},
  {x: 100, y: -60}, 
]


export default function App() {

const transX = [
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
]
const transY = [
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
  new Animated.Value(0),
]

let i: number[] = [6, 7, 8, 9, 10, 11]; 
let n: number[] = new Array(4); 

const resetPosition = () => {
  Animated.spring(
    transX[0], // Auto-multiplexed
    { toValue: 0, 
      useNativeDriver: true,
  } // Back to zero
  ).start();

  Animated.spring(
    transY[0], // Auto-multiplexed
    { toValue: 0, 
      useNativeDriver: true,
  } // Back to zero
  ).start();
}
const rotate = (i: number) => {
  n[0] = (i - 1) % 6; 
  n[1] = i % 6;
  n[2] = (i + 1) % 6;
  n[3] = (i + 2) % 6;  

  const go_x = () => transX[n[1]].interpolate({
    inputRange: [-100, 0, 100],
    outputRange: [defaultPosition[n[3]].x, defaultPosition[n[2]].x, defaultPosition[n[1]].x]
  })

  const go_y = () => transY[n[1]].interpolate({
    inputRange: [-100, 0, 100],
    outputRange: [defaultPosition[n[3]].y, defaultPosition[n[2]].y, defaultPosition[n[1]].y]
  })

  go_x();
  go_y();
}

const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (event, gesture) => true,
  onPanResponderMove:
    Animated.event([
      null,
      {
        dx: transX[0] // x,are Animated.Value
      },
    ]),
  onPanResponderRelease: (event, gesture) => {
    if (gesture.dx < SWIPE_THRESHOLD){
      resetPosition();
    }
    else {
      rotate(i[0]);
      rotate(i[1]);
      rotate(i[2]);
      rotate(i[3]);
      rotate(i[4]);
      rotate(i[5]);
      i[0]++;
      i[1]++;
      i[2]++;
      i[3]++;
      i[4]++;
      i[5]++;
    }
    }
});

    return (
      <>
        <Animated.View style={styles.container}>
                  <Animated.Image 
                        source={require('../Assets/Frame3.png')}
                        resizeMode="cover"
                        style={[
                          {
                            transform: [{ translateX: transX[0] }, { translateY: transY[0] }],
                          },
                          {
                            width: 100,
                            height: 100,
                            top: 400,
                            left: 0,
                          },
                        ]}
                        {...panResponder.panHandlers}
                  />
                  <Animated.Image 
                        source={require('../Assets/Frame4.png')}
                        resizeMode="cover"
                        style={[
                          {
                            transform: [{ translateX: transX[1] }, { translateY: transY[1] }],
                          },
                          {
                            width: 100,
                            height: 100,
                            top: 250,
                            left: -140
                          },
                        ]}
                        {...panResponder.panHandlers}
                  />
                  <Animated.Image 
                        source={require('../Assets/Frame5.png')}
                        resizeMode="cover"
                        style={[
                          {
                            transform: [{ translateX: transX[2] }, { translateY: transY[2] }],
                          },
                          {
                            width: 100,
                            height: 100,
                            top: 50,
                            left: -120
                          },
                        ]}
                        {...panResponder.panHandlers}
                  />
                  <Animated.Image 
                        source={require('../Assets/Frame6.png')}
                        resizeMode="cover"
                        style={[
                          {
                            transform: [{ translateX: transX[3] }, { translateY: transY[3] }],
                          },
                          {
                            width: 100,
                            height: 100,
                            top: -100,
                            left: 0
                          },
                        ]}
                        {...panResponder.panHandlers}
                  />
                  <Animated.Image 
                        source={require('../Assets/Frame7.png')}
                        resizeMode="cover"
                        style={[
                          {
                            transform: [{ translateX: transX[4] }, { translateY: transY[4] }],
                          },
                          {
                            width: 100,
                            height: 100,
                            top: -150,
                            left: 120
                          },
                        ]}
                        {...panResponder.panHandlers}
                  />
                  <Animated.Image 
                        source={require('../Assets/Frame8.png')}
                        resizeMode="cover"
                        style={[
                          {
                            transform: [{ translateX: transX[5] }, { translateY: transY[5] }],
                          },
                          {
                            width: 100,
                            height: 100,
                            top: -150,
                            left: 140
                          },
                        ]}
                        {...panResponder.panHandlers}
                  />
        </Animated.View>
      </>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
});