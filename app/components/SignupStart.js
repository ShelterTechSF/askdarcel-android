'use strict';

import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './shared';

const SignupStart = () => {
  return (
    <View>
      <Button onPress={() => Actions.name()}>
        Get Started
      </Button>
    </View>
  );
}

export default SignupStart;
