import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './shared';
import { resourceStyles } from '../styles';

const ResourceItem = ({ resource }) => {
  // A single resource for the resources list
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.resourceDetail({ resource })}
      >
        <View style={resourceStyles.listItem}>
          <Card>
            <Text style={resourceStyles.name}>{resource.name}</Text>
            {resource.services.length && <Text>{resource.services[0].name}</Text>}
            <Text>Hours</Text>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
}

export default ResourceItem;
