import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const MyTextInput = ({placeholder, label, type}) => {
  const [text, onChangeText] = React.useState('');

  return (
    <>
      <Text style={styles.inputLabel}> {label}</Text>
      <TextInput
        secureTextEntry={type === 'password' ? true : false}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 15,
    borderWidth: 0.5,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 10,
    color: 'black',
  },
  inputLabel: {
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 7,
  },
});

export default MyTextInput;
