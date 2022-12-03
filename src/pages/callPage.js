import * as Animatable from 'react-native-animatable';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SwipeButton from 'rn-swipe-button';

export default function CallPage({navigation}) {
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
        Emergency Call
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
      <Text
        style={{
          width: 300,
          textAlign: 'center',
          color: 'white',
          position: 'absolute',
          bottom: 140,
          fontWeight: '800',
          fontSize: 22,
        }}>
        Head : possible internal bleeding
      </Text>
      <Animatable.Image
        animation="pulse"
        iterationCount={'infinite'}
        direction="alternate"
        source={require('../assets/call.png')}
      />
      <Image style={styles.ring} source={require('../assets/ring.png')} />
      <View style={styles.swipe}>
        <SwipeButton
          disabled={false}
          //disable the button by doing true (Optional)
          swipeSuccessThreshold={70}
          height={50}
          //height of the button (Optional)
          width={200}
          //width of the button (Optional)
          title="Respond"
          //Text inside the button (Optional)
          //thumbIconImageSource={thumbIcon}
          //You can also set your own icon (Optional)
          onSwipeSuccess={() => {
            navigation.navigate('Treatment');
          }}
          //After the completion of swipe (Optional)
          railFillBackgroundColor="#fff" //(Optional)
          railFillBorderColor="#fff" //(Optional)
          thumbIconBackgroundColor="#EB5F10" //(Optional)
          thumbIconBorderColor="#EB5F10" //(Optional)
          railBackgroundColor="#fff" //(Optional)
          railBorderColor="#fff" //(Optional)
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#EB5F10',
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
});
