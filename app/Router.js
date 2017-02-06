import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import WelcomeScreen from './components/WelcomeScreen';
import ResourcesScreen from './components/ResourcesScreen';
import ResourceDetailScreen from './components/ResourceDetailScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key={'main'} title={"Ask Darcel"} initial>
        <Scene 
          key={'welcome'} 
          component={WelcomeScreen} 
          title={"Welcome"} />
        <Scene key={'resources'} component={ResourcesScreen} title={'Ask Darcel'} />
        <Scene key={'resourceDetail'} component={ResourceDetailScreen} title={'Ask Darcel'} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
