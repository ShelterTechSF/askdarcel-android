import React from 'react';
import { View } from 'react-native';
import { cardStyles } from '../../styles';

const Card = (props) => {
  return (
    <View style={[cardStyles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

export { Card };
