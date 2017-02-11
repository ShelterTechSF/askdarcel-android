import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../../styles';

const Button = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyles.button, style]}>
      <Text style={buttonStyles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
