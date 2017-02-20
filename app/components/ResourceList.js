import React, { Component } from 'react'
import {
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { commonStyles, mapStyles, resourceStyles } from '../styles';
import ResourceItem from './ResourceItem';
import { Loading, MapComponent } from './shared';
import { fetchResources } from '../actions';

class ResourceList extends Component {
  // Single resources for list in Categories view
  constructor(props) {
    super(props)
    this.state = {
      markers: []
    }
  }

  componentWillMount() {
    this.props.fetchResources(this.props.categoryId);

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

  onChangeVisibleRows(visible) {
    console.warn("changing rows");
    console.log("changing rows");
    console.log(visible); 
    // Set visible as array of markers on the state
  }

  render() {
    if (this.props.fetching) {
      return <Loading size={'large'} />;
    } 
    let { latitude, longitude } = this.props.location;
    let initialRegion = {
      provider: "google",
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    return (
      <View style={resourceStyles.container}>
        <MapComponent initialRegion={initialRegion} markers={this.state.markers}/>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          onChangeVisibleRows={this.onChangeVisibleRows}
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
    location: state.user.location
  };
};

export default connect(mapStateToProps, { fetchResources })(ResourceList);
