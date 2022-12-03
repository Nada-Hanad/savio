import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

export default function MySecondaryButton({text, color, borderColor, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 60,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 25,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: color,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
