'use strict';

import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { commonStyles } from '../styles';
import ResourceItem from './ResourceItem';
import { fetchResources, setResource } from '../actions/resourceActions';

class ResourceList extends Component {
  // Single resources for list in Categories view
  
  componentWillMount() {
    let category = this.props.categoryName;
    let categoryId = this.props.categoryId;
    this.props.fetchResources(categoryId);
  }

  _onButtonPress(resource, idx) { 
    this.props.setResource(resource, idx);
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

export default connect(mapStateToProps, { fetchResources, setResource })(ResourceList);
