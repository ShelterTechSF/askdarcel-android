import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { resourceStyles } from '../styles';

const ResourceItem = ({ resource }) => {
  // A single resource for the resources list
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.resourceDetail({ resource })}
      >
        <View style={resourceStyles.listItem}>
          <Text style={resourceStyles.name}>{resource.long_description}</Text>
          <Text style={resourceStyles.info}>{resource.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
}

export default ResourceItem;
