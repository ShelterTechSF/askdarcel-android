'use strict';

import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

// import styles
import styles from '../styles/main';

import { connect } from 'react-redux';
import { fetchResources, setResource } from '../actions/resourceActions';
import ResourceItem from './ResourceItem';
import dismissKeyboard from 'dismissKeyboard';

@connect((store) => {
  return {
    fetched: store.resource.fetched,
    fetching: store.resource.fetching,
    categoryId: store.category.id,
    categoryName: store.category.name,
    error: store.resource.error,
    resources: store.resource.list,
  };
})

class ResourceList extends Component {
  // Single resources for list in Categories view
  
  componentWillMount() {
    let category = this.props.categoryName;
    let categoryId = this.props.categoryId;
    this.props.dispatch(fetchResources(categoryId));
  }

  getResourceDetails(resource) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: resource.name,
        component: ResourceDetailScreen,
        passProps: resource
      });
    } else {
      dismissKeyboard();
      this.props.navigator.push({
        title: resource.name,
        name: 'resource',
        resource: resource
      });
    }
  }

  _onButtonPress(resource, idx) { 
    console.warn("Pressed " + resource.name);
    this.props.dispatch(setResource(resource, idx));
    this.getResourceDetails(resource);
  }

  render() {
    let resources = this.props.resources
    let resourceResults = resources.map((resource, i) =>  
      <TouchableHighlight onPress={this._onButtonPress.bind(this, resource, i)} key={i}>
        <View>
          <ResourceItem resource={resource} idx={i}/>
        </View>
      </TouchableHighlight>
    )
    return (
      <View>
        <Text style={styles.title}>
          Found {resources.length} results for {this.props.categoryName}
        </Text>
        <ScrollView>
          {resourceResults}
        </ScrollView>
      </View>
    );
  }
}

export default ResourceList;
