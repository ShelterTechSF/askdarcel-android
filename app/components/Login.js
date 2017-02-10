'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './shared';

class Login extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => Actions.main()}>
          Login
        </Button>
      </View>
    );
  }
}

export default Login;
