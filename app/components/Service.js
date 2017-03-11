import React from 'react';
import { Text } from 'react-native';

import { Card } from './shared';

const Service = ({service}) => {
  return (
    <Card>
      <Text>{service.name}</Text>
      <Text>{service.long_description}</Text>
    </Card>
  );
};

export default Service;