import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import FlatList from 'react-native/Libraries/Experimental/FlatList';
import ResourceItem from './ResourceItem';
import { Loading, MapComponent } from './shared';
import { fetchResources } from '../actions';

class ResourceList extends Component {
  // Resources for list in search results
  state = {
    markers: []
  }

  componentWillMount() {
    this.generateMarkers([]);
  }

  generateMarkers(viewableItems = []) {
    let markers = viewableItems.map(viewable => {
      if (!viewable.item.address) {
        return null;
      }
      let coordinates = {
        longitude: viewable.item.address.longitude, 
        latitude: viewable.item.address.latitude
      };
      return {title: viewable.item.name, coordinates }
    });

    markers.filter(val => {return val !== null;} );
    this.setState({ markers });
  }

  onViewableItemsChanged({ viewableItems, changed }) {
    this.generateMarkers(viewableItems, this.props.userLocation);
  }

  renderItemComponent({item, index}) {
    return <ResourceItem resource={item} />;
  }

  render() {
    // Returns empty FlatList to stop onViewableItemsChanged from crashing the app when no list is rendered
    if (this.props.fetching) {
      return (
        <View>
          <Loading size={'large'} />
          <FlatList data={[]} ItemComponent={this.renderItemComponent} />
        </View>
      );
    }

    let { latitude, longitude } = this.props.userLocation || {latitude: 37.7759, longitude: -122.414};
    let initialRegion = {
      provider: "google",
      latitude,
      longitude,
    };

    return (
      <View>
        <MapComponent initialRegion={initialRegion} 
                      markers={this.state.markers} 
                      userLocation={this.props.userLocation}/>
        <FlatList 
          data={this.props.resources} 
          renderItem={this.renderItemComponent}
          onViewableItemsChanged={this.onViewableItemsChanged.bind(this)}  />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.resource.fetching,
    categoryId: state.category.id,
    categoryName: state.category.name,
    error: state.resource.error,
    resources: state.resource.list,
    userLocation: state.user.location
  };
};

export default connect(mapStateToProps, { fetchResources })(ResourceList);
