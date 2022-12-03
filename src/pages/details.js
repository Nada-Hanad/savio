import {useRoute} from '@react-navigation/native';
import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Details({navigation}) {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.main}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.backArrow}
          source={require('../assets/backArrow.png')}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.detailCard,
          {
            marginTop: 120,
            borderColor: '#1067EB',
          },
        ]}>
        <Text style={styles.text}>{route.params.cardInfo.roomNumber}</Text>
        <Text style={styles.textBold}>{route.params.cardInfo.injury}</Text>
      </View>
      <View
        style={[
          styles.detailCard,
          {
            borderColor: '#E70A0A',
          },
        ]}>
        <Text
          style={[
            styles.textBold,
            {
              fontSize: 17,
            },
          ]}>
          Problems
        </Text>
        <Text style={styles.text}>{route.params.cardInfo.problems}</Text>
      </View>
      <View
        style={[
          styles.detailCard,
          {
            borderColor: '#168804',
          },
        ]}>
        <Text
          style={[
            styles.textBold,
            {
              fontSize: 17,
            },
          ]}>
          Recommendations
        </Text>
        <Text style={styles.text}>{route.params.cardInfo.recommendations}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  img: {
    height: 26,
    width: 86,
    position: 'absolute',
    top: 20,
    left: '40%',
  },
  backArrow: {
    height: 25,
    width: 30,
    position: 'absolute',
    top: 25,
    left: 20,
  },
  detailCard: {
    height: 100,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 20,
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  textBold: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
