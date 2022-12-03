import * as Animatable from 'react-native-animatable';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProfilePage({navigation}) {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        style={styles.backBut}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.backArrow}
          source={require('../assets/backArrow.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.profileCard}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    padding: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    height: 25,
    width: 30,
  },
  backBut: {
    position: 'absolute',
    top: 25,
    left: 20,
  },
  title: {
    fontWeight: '900',
    fontSize: 30,
    color: 'black',
  },
  profileCard: {
    height: 160,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 50,
    position: 'relative',
  },
});
