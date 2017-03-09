import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Service = ({service}) => {
  return (
    <View>
      <Text>{service.name}</Text>
      <Text>{service.long_description}</Text>
    </View>
  );
};

export default Service;