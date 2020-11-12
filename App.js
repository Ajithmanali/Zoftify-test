/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/screens/Home';
import {Details} from './src/screens/Details';
import {SplashScreen} from './src/screens/SplashScreen';
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerLeft: null}}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
