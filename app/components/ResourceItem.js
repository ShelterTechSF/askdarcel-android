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
import { isOpen, hoursToday } from '../utils';

const ResourceItem = ({ resource }) => {
  // A single resource for the resources list
    const schedule = resource.schedule.schedule_days;
    const hoursStr = hoursToday(schedule) || " oops";
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.resourceDetail({ resource })}
      >
        <View style={resourceStyles.listItem}>
          <Card>
            <Text style={resourceStyles.name}>{resource.name}</Text>
            {resource.services.length && <Text>{resource.services[0].name}</Text>}
            <Text>{isOpen(schedule) ? "Open now! " : "Closed Now "}{"- Hours Today: " + hoursStr}</Text>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
}

export default ResourceItem;
