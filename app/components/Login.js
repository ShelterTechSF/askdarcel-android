'use strict';

import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, Input } from './shared';
import { formStyles } from '../styles';
import { userLogin } from '../actions';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  _onPassword(password) {
    this.setState({password});
  }

  _onEmail(email) {
    this.setState({email});
  }

  _onSubmit() {
    this.props.userLogin(this.state.email, this.state.password);
    this.setState({email: '', password: ''});
    Actions.main();
  }

  render() {
    return (
      <View style={formStyles.container}>
        <Input 
          label={'Email'}
          placeholder={'name@example.com'}
          value={this.state.email}
          onChangeText={this._onEmail.bind(this)}
        />
        <Input
          secure 
          label={'Password'}
          placeholder={'password'}
          value={this.state.password}
          onChangeText={this._onPassword.bind(this)}
        />
        <Button onPress={this._onSubmit.bind(this)}>
          Login
        </Button>
      </View>
    );
  }
}

export default connect(null, { userLogin })(Login);
