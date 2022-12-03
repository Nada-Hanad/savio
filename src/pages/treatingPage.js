import * as Animatable from 'react-native-animatable';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Linking} from 'react-native';

export default function TreatingPage() {
  return (
    <SafeAreaView style={styles.main}>
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          top: 70,
          fontWeight: '700',
          fontSize: 20,
        }}>
        Treatement...
      </Text>
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          top: 100,
          fontWeight: '900',
          fontSize: 24,
        }}>
        Room 09
      </Text>

      <Animatable.Image
        animation="pulse"
        iterationCount={'infinite'}
        direction="alternate"
        source={require('../assets/treatRing.png')}
      />

      <Image style={styles.ring} source={require('../assets/treatIcon.png')} />
      <View style={styles.actions}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Done</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:1054`)}>
          <View
            style={[
              styles.button,
              {
                borderWidth: 1.5,
                borderColor: '#EB1010',
                color: '#EB1010',
              },
            ]}>
            <Text style={{color: '#EB1010', fontWeight: 'bold'}}>
              Call Emergency
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#1067EB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    height: 100,
    width: 100,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  swipe: {
    position: 'absolute',
    bottom: 50,
  },
  button: {
    height: 60,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  actions: {
    position: 'absolute',
    bottom: 40,
  },
});
