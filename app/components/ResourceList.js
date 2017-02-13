'use strict';

import React, { Component } from 'react'
import {
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux';

import { commonStyles } from '../styles';
import ResourceItem from './ResourceItem';
import Loading from './Loading';
import { fetchResources, setResource } from '../actions/resourceActions';

class ResourceList extends Component {
  // Single resources for list in Categories view

  componentWillMount() {
    let categoryId = this.props.categoryId;
    this.props.fetchResources(categoryId);

    this.createDataSource(this.props.resources);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resources) {
      this.createDataSource(nextProps.resources);
    }
  }

  createDataSource(resources) {
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    });

    this.dataSource = ds.cloneWithRows(resources);
  }

  renderRow(resource) {
    return <ResourceItem resource={resource} />;
  }

  render() {
    if (this.props.fetching) {
      return <Loading size={'large'} />;
    } 

    return (
      <View>
        <Text style={commonStyles.title}>
          Found {this.props.resources.length} results for {this.props.categoryName}
        </Text>
        <ListView 
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
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
