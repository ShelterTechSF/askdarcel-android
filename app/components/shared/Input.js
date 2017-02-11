import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { inputStyles } from '../../styles';

const Input = ({ label, placeholder, value, onChange, secure, style }) => {

  return (
    <View style={[inputStyles.container, style]}>
      <Text style={inputStyles.label}>{label}</Text>
      <TextInput 
        secureTextEntry={secure}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChange}
        style={inputStyles.input}
      />
    </View>
  );
};

export { Input };