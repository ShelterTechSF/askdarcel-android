import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { LinkLauncher } from './shared';
import { stripNumber } from '../utils';
import { linkBarStyles, commonStyles } from '../styles';

class LinkBar extends Component {
  linksToRender() {
    const { resource } = this.props;
    let result = [];
    if(resource.website && resource.website.length) {
      result.push(<LinkLauncher key={"web"} iconName={"public"} url={resource.website} />);
    } 
    if(resource.phones && resource.phones.length && resource.phones[0].number) {
      result.push(<LinkLauncher key={"call"} iconName={"phone"} url={'tel:' + stripNumber(resource.phones[0].number)} />);
    }
    return result;
  }

  render() {
    return (
      <View style={linkBarStyles.container}>
        {this.linksToRender()}
      </View>
    );
  }
}

export default LinkBar;
