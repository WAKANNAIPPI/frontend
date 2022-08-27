import react, { useRef, useState } from 'react';
import { 
  Text,
  Animated,
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Dimensions,
  InteractionManager,
  PanResponder,
} from 'react-native';

export default function App({navigation}: any){

  return (
      <Animated.View style={styles.container}>
        <TouchableOpacity
          style = {[
            {
              transform: [{translateX: 0}, {translateY: 400}, {scale: 1.5}]
            },
          ]}
          onPress = {() => navigation.navigate('Constellation_Creation')}
        >
                <Animated.Image 
                      source={require('../Assets/Frame3.png')}
                      style={[
                        {
                          width: 100,
                          height: 100,
                        },
                      ]}
                />
        </TouchableOpacity>
        <TouchableOpacity
          style = {[
            {
              transform: [{translateX: -140}, {translateY: 250}]
            },
          ]}        
          onPress = {() => navigation.navigate('Constellation_Creation')}
        >
                <Animated.Image 
                      source={require('../Assets/Frame4.png')}
                      resizeMode="cover"
                      style={[
                        {
                          width: 100,
                          height: 100,
                        },
                      ]}
                />
        </TouchableOpacity>
        <TouchableOpacity
          style = {[
            {
              transform: [{translateX: -120}, {translateY: 50}]
            },
          ]}
          onPress = {() => navigation.navigate('Constellation_Creation')}
        >
                <Animated.Image 
                      source={require('../Assets/Frame5.png')}
                      resizeMode="cover"
                      style={[
                        {
                          width: 100,
                          height: 100,
                        },
                      ]}
                />
          </TouchableOpacity>
          <TouchableOpacity
          style = {[
            {
              transform: [{translateX: 0}, {translateY: -100}]
            },
          ]}
          onPress = {() => navigation.navigate('Constellation_Creation')}
          >
                <Animated.Image 
                      source={require('../Assets/Frame6.png')}
                      resizeMode="cover"
                      style={[
                        {
                          width: 100,
                          height: 100,
                        },
                      ]}
                />
          </TouchableOpacity>
          <TouchableOpacity
          style = {[
            {
              transform: [{translateX: 120}, {translateY: -150}]
            },
          ]}
          onPress = {() => navigation.navigate('Quiz')}
          >
          <Animated.Image 
                      source={require('../Assets/Frame7.png')}
                      resizeMode="cover"
                      style={[
                        {
                          width: 100,
                          height: 100,
                        },
                      ]}
                />
          </TouchableOpacity>
          <TouchableOpacity
          style = {[
            {
              transform: [{translateX: 140}, {translateY: -150}]
            },
          ]}
            onPress = {() => navigation.navigate('Constellation_Creation')}
          >
                <Animated.Image 
                      source={require('../Assets/Frame8.png')}
                      resizeMode="cover"
                      style={[
                        {
                          width: 100,
                          height: 100,
                        },
                      ]}
                />
          </TouchableOpacity>
      </Animated.View>  
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