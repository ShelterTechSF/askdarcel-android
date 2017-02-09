import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../../styles';

const Button = ({ onPress, children, style }) => {
  const { button, text } = buttonStyles;
  
  return (
    <TouchableOpacity onPress={onPress} style={[button, style]}>
      <Text style={text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
