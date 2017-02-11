'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Input } from './shared';

class SignupName extends Component {
  render() {
    return (
      <View>
        <Input 
          label={'Name'}
          placeholder={'Bob Bobson'}
        />
        <Button onPress={() => Actions.main()}>
          Continue
        </Button>
      </View>
    );
  }
}

export default SignupName;
