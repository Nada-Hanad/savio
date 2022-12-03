import React, {useEffect, useState} from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MyButton from '../components/button';
import HistoryCard from '../components/historyCard';
import MySecondaryButton from '../components/secondary';

export default function History({navigation}) {
  const [shiftStarted, setShiftStarted] = useState(false);
  let first = true;

  const dataExample = [
    {
      time: '8pm',
      roomNumber: 'Room 18',
      injury: 'Arm injury',
      problems: 'Late response',
      recommendations: 'example 1',
    },

    {
      time: '1pm',
      roomNumber: 'Room 12',
      injury: 'Head trauma',
      problems: 'Late response',
      recommendations: 'example 1',
    },

    {
      time: '9pm',
      roomNumber: 'Room 08',
      injury: 'Leg injury',
      problems: 'Late response',
      recommendations: 'example 1',
    },

    {
      time: '10pm',
      roomNumber: 'Room 01',
      injury: 'Knee injury',
      problems: 'Late response',
      recommendations: 'example 1',
    },
  ];
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.main}>
        <Image style={styles.img} source={require('../assets/logo.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.avatar}
            source={require('../assets/avatar.jpg')}
          />
        </TouchableOpacity>

        <View style={styles.spacer} />
        <Text style={styles.text}>History</Text>
        {dataExample.map((item, i) => (
          <HistoryCard
            navigation={navigation}
            cardInfo={item}
            index={i}
            key={i}
          />
        ))}
        <View style={styles.spacer2} />
        {!shiftStarted ? (
          <MyButton
            onPress={() => {
              if (first) {
                setTimeout(() => {
                  navigation.navigate('Call');
                }, 7000);
              }
              first = false;
              setShiftStarted(!shiftStarted);
            }}
            text="Start my shift"
            color="white"
            bgColor="#1067EB"
          />
        ) : (
          <MySecondaryButton
            onPress={() => setShiftStarted(!shiftStarted)}
            text="End my shift"
            color="#1067EB"
            borderColor="#1067EB"
          />
        )}
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img: {
    height: 26,
    width: 86,
    position: 'absolute',
    top: 20,
    left: '40%',
  },
  avatar: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 10,
    right: 20,
    borderRadius: 50,
  },
  text: {
    fontWeight: '900',
    fontSize: 30,
    marginLeft: 22,
    marginBottom: 20,
    color: 'black',
  },
  spacer: {
    marginTop: 60,
  },
  spacer2: {
    marginTop: 50,
  },
});
