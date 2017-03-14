import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { LinkLauncher } from './shared';
import { stripNumber } from '../utils';

class LinkBar extends Component {
  linksToRender() {
    const { resource } = this.props;
    let result = [];
    if(resource.website && resource.website.length) {
      result.push(<LinkLauncher key={"web"} displayText={"website"} url={resource.website} />);
    } 
    if(resource.phones && resource.phones.length && resource.phones[0].number) {
      result.push(<LinkLauncher key={"call"} displayText={"call"} url={'tel:' + stripNumber(resource.phones[0].number)} />);
    }
    return result;
  }

  render() {
    return (
      <View>
        {this.linksToRender()}
      </View>
    );
  }
}

export default LinkBar;
