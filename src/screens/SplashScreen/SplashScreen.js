import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import {styles} from './styles';
export const SplashScreen = ({navigation}) => {
  const logoAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
    Animated.timing(logoAnim, {
      duration: 3000,
      toValue: 1,
      delay: 2500,
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.1,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2500,
      useNativeDriver: true,
    }).start();
  }, [logoAnim, moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={{width: 100, height: 100, opacity: logoAnim}}
          source={require('../../../assets/images/logo.png')}
        />
        <Animated.View style={{flexDirection: 'row', marginLeft: moveAnim}}>
          <Animated.Text style={[styles.logoText]}>Z</Animated.Text>
          <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            oftify
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
