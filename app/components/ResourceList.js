'use strict';

import React, { Component } from 'react'
import {
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { commonStyles } from '../styles';
import ResourceItem from './ResourceItem';
import Loading from './Loading';
import { fetchResources, setResource } from '../actions/resourceActions';

class ResourceList extends Component {
  // Single resources for list in Categories view
  constructor(props) {
    super(props)
    this._onButtonPress = this._onButtonPress.bind(this);
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    });

    this.state = {
      dataSource : ds.cloneWithRows(this.props.resources)
    }
  }
  
  componentWillMount() {
    let categoryId = this.props.categoryId;
    this.props.fetchResources(categoryId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resources) {
      const ds = new ListView.DataSource({ 
        rowHasChanged: (r1, r2) => r1 !== r2 
      });
      this.setState({
        dataSource : ds.cloneWithRows(nextProps.resources)
      });
    }
  }

  _onButtonPress(resource) {  
    this.props.setResource(resource);
    Actions.resourceDetail();
  }

  renderRow(resource) {
    return (
      <TouchableHighlight onPress={this._onButtonPress.bind(this, resource)} key={resource.id}>
        <Text>{resource.name}</Text>
      </TouchableHighlight>
    );
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
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
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
