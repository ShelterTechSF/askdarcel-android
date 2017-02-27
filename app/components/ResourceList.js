import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native';
import FlatList from 'react-native/Libraries/Experimental/FlatList';

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
  }

  renderItemComponent({resource, index}) {
    /** Don't get layout.height, just get layout. It already contains {height, x, y, width} so we don't need to compute */
    return (
      <ResourceItem resource={resource} />
    );

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
        <FlatList
          data={this.props.resources}
          itemComponent={this.renderItemComponent} 
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
