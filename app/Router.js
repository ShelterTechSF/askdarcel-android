'use strict';

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';
import SignupStart from './components/SignupStart';
import SignupName from './components/SignupName';
import SignupAvatar from './components/SignupAvatar';
import Welcome from './components/Welcome';
import ResourceList from './components/ResourceList';
import ResourceDetail from './components/ResourceDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 55 }}>
      <Scene key={'auth'} title={''} >
        <Scene key={'splash'} component={Splash} title={'Ask Darcel'} />
        <Scene key={'login'} component={Login} title={'Ask Darcel'} />
        <Scene key={'start'} component={SignupStart} title={'Ask Darcel'} />
        <Scene key={'name'} component={SignupName} title={'Ask Darcel'} />
        <Scene key={'avatar'} component={SignupAvatar} title={'Ask Darcel'} />
      </Scene>
      <Scene key={'main'} title={"Ask Darcel"}>
        <Scene 
          key={'welcome'} 
          component={Welcome} 
          title={"Welcome"} />
        <Scene key={'resources'} component={ResourceList} title={'Ask Darcel'} />
        <Scene key={'resourceDetail'} component={ResourceDetail} title={'Ask Darcel'} type={'replace'} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
