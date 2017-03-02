import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import FlatList from 'react-native/Libraries/Experimental/FlatList';
import ResourceItem from './ResourceItem';
import MapView from 'react-native-maps';
import { Loading, MapComponent } from './shared';
import { fetchResources } from '../actions';

class ResourceList extends Component {
  // Resources for list in search results
  state = {
    markers: []
  }

  componentWillMount() {
    this.props.fetchResources(this.props.categoryId);
    this.generateMarkers([], this.props.location);
    console.log(typeof(FlatList), typeof(ResourceItem));
  }

  generateMarkers(viewableItems = [], userLoc) {
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

    if (userLoc) {
      markers = markers.concat([{
        title: 'You are here', 
        coordinates: {longitude: userLoc.longitude, latitude: userLoc.latitude}
      }]);
    }

    console.log(markers);

    this.setState({ markers });
  }

  onViewableItemsChanged({ viewableItems, changed }) {
    this.generateMarkers(viewableItems, this.props.location);
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

    let { latitude, longitude } = this.props.location;
    let initialRegion = {
      provider: "google",
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    return (
      <View>
        <MapComponent initialRegion={initialRegion} markers={this.state.markers}/>
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
    location: state.user.location
  };
};

export default connect(mapStateToProps, { fetchResources })(ResourceList);
