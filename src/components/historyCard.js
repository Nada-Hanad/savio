import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HistoryCard = ({cardInfo, index, navigation}) => {
  return (
    <View key={index} style={styles.card}>
      <View>
        <Text> {cardInfo.time}</Text>
        <Text style={styles.roomNumber}>{cardInfo.roomNumber} </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            cardInfo,
          })
        }>
        <Image style={styles.arrow} source={require('../assets/arrow.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  roomNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  arrow: {
    height: 30,
    width: 30,
  },
});

export default HistoryCard;
