import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { LinkLauncher } from './shared';

class LinkBar extends Component {
  render() {
    const { resource } = this.props;
    return (
      <View>
        <LinkLauncher
          url={resource.website} 
          displayText={"website"}
        />
      </View>
    );
  }
}

export default LinkBar;
