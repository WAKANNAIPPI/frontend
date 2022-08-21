import react, { useRef } from 'react';
import { 
  Animated,
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
  
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  export default function App({navigation}: any ) {
    return (
      <View style={styles.container}>
              <TouchableOpacity 
                onPress={() => {navigation.navigate('Constellation_Creation')}}
                activeOpacity={1}  
              >
                  <Image
                        source={require('../Assets/Frame3.png')}
                        resizeMode="cover"
                        style={[
                            {
                            width: 100,
                            height: 100,
                            top: -100,
                            left: -50,
                            },
                        ]}
                  />
              </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});
