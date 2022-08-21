import react, { useRef } from 'react';
import { 
  Animated,
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  InteractionManager
} from 'react-native';
import Swiper from 'react-native-swiper';


  export default function App({navigation}: any){

    return (
      <Swiper loop={false}>
        <View style={styles.container}>
                  <Image 
                        source={require('../Assets/Frame3.png')}
                        resizeMode="cover"
                        style={[
                          {
                            width: 100,
                            height: 100,
                            top: -100,
                            left: -100,
                          },
                        ]}
                  />
                  <Image 
                        source={require('../Assets/Frame4.png')}
                        resizeMode="cover"
                        style={[
                          {
                            width: 100,
                            height: 100,
                            top: 0,
                            left: 0,
                          },
                        ]}
                  />
                  <Image 
                        source={require('../Assets/Frame5.png')}
                        resizeMode="cover"
                        style={[
                          {
                            width: 100,
                            height: 100,
                            top: 100,
                            left: 100,
                          },
                        ]}
                  />
        </View>
      </Swiper>
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