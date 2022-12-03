import React, {useEffect} from 'react';

import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MyButton from '../components/button';
import MyTextInput from '../components/input';
import MySecondaryButton from '../components/secondary';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.main}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <Text style={styles.title}>Login</Text>
      <MyTextInput label="Username" placeholder="Enter your username..." />
      <MyTextInput type="password" label="Password" placeholder="•••••••••" />
      <View style={styles.buttons}>
        <MyButton
          onPress={() => navigation.navigate('History')}
          text="Sign In"
          bgColor="#1067EB"
          color="white"
        />
        <MySecondaryButton text="Sign Up" color="black" borderColor="black" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 30,
    marginLeft: 22,
    marginBottom: 55,
    color: 'black',
  },
  buttons: {
    marginTop: 50,
  },
  img: {
    height: 26,
    width: 86,

    position: 'absolute',
    top: 20,
    left: '40%',
  },
});
