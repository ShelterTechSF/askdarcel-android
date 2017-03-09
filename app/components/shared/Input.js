import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { inputStyles } from '../../styles';

const Input = ({ label, placeholder, value, onChangeText, secure, style }) => {
  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secure}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };