'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './shared';

const Splash = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Button onPress={() => Actions.login()}>
        Login
      </Button>
      <Button onPress={() => Actions.start()}>
        Signup
      </Button>
    </View>
  );
}

export default Splash;
