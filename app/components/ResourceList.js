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

import { Actions } from 'react-native-router-flux';

// import styles
import { commonStyles } from '../styles';

import { connect } from 'react-redux';
import { fetchResources, setResource } from '../actions/resourceActions';
import ResourceItem from './ResourceItem';
import dismissKeyboard from 'dismissKeyboard';

class ResourceList extends Component {
  // Single resources for list in Categories view
  
  componentWillMount() {
    let category = this.props.categoryName;
    let categoryId = this.props.categoryId;
    this.props.dispatch(fetchResources(categoryId));
  }

  getResourceDetails(resource) {
    // if (Platform.OS === 'ios') {
    //   this.props.navigator.push({
    //     title: resource.name,
    //     component: ResourceDetailScreen,
    //     passProps: resource
    //   });
    // } else {
    //   dismissKeyboard();
    //   this.props.navigator.push({
    //     title: resource.name,
    //     name: 'resource',
    //     resource: resource
    //   });
    // }
  }

  _onButtonPress(resource, idx) { 
    this.props.dispatch(setResource(resource, idx));
    Actions.resourceDetail();
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
        <Text style={commonStyles.title}>
          Found {resources.length} results for {this.props.categoryName}
        </Text>
        <ScrollView>
          {resourceResults}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetched: state.resource.fetched,
    fetching: state.resource.fetching,
    categoryId: state.category.id,
    categoryName: state.category.name,
    error: state.resource.error,
    resources: state.resource.list,
  };
};

export default connect(mapStateToProps)(ResourceList);
