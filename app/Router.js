'use strict';

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import ResourceList from './components/ResourceList';
import ResourceDetail from './components/ResourceDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key={'main'} title={"Ask Darcel"} initial>
        <Scene 
          key={'welcome'} 
          component={Welcome} 
          title={"Welcome"} />
        <Scene key={'resources'} component={ResourceList} title={'Ask Darcel'} />
        <Scene key={'resourceDetail'} component={ResourceDetail} title={'Ask Darcel'} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
