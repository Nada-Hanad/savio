import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet, Animated, Easing} from 'react-native';
import CallPage from './src/pages/callPage';
import Details from './src/pages/details';
import History from './src/pages/history';
import Login from './src/pages/login';
import ProfilePage from './src/pages/profilePage';
import TreatingPage from './src/pages/treatingPage';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="Call" component={CallPage} />
        <Stack.Screen name="Treatment" component={TreatingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

function Splash({navigation}) {
  let animatedValue = new Animated.Value(0);
  function handleAnimation() {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    setTimeout(() => {
      handleAnimation();
    }, 500);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });
  return (
    <SafeAreaView style={styles.main}>
      <Animated.Image
        source={require('./src/assets/logo.png')}
        resizeMode="cover"
        style={{
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 0.003],
                outputRange: [0.003, 0.0035],
              }),
            },
          ],
        }}
      />
    </SafeAreaView>
  );
}
