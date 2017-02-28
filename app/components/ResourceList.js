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
  }

  renderItemComponent({item, index}) {
    return <ResourceItem resource={item} />;
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
      <View>
        <MapComponent initialRegion={initialRegion} />
        <FlatList data={this.props.resources} ItemComponent={this.renderItemComponent}  />
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
