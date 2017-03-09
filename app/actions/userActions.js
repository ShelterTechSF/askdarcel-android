import {
  GET_USER_LOCATION,
  GET_USER_LOCATION_FULFILLED,
  GET_USER_LOCATION_ERROR,
  UPDATE_USER_LOCATION,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST
} from './actionTypes';
import {
  AsyncStorage,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { API_URL } from '../config';

export function getUserLocation() {
  return function(dispatch) {
    dispatch({type: GET_USER_LOCATION});
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          time: position.timestamp
        }
        dispatch({type: GET_USER_LOCATION_FULFILLED, payload: loc});
      },
      (error) =>{
        dispatch({type: GET_USER_LOCATION_ERROR, payload: error});
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  };
};

export function updateUserLocation(location) {
  return {
    type: UPDATE_USER_LOCATION,
    payload: location
  };
};

async function setStorage(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}

export function userLogin(email, password)  {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST});

    fetch(API_URL + '/admin/auth/sign_in', {
      method: 'post',
      headers: {
        "Content-type": "application/json", 
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(response => {
      console.warn("got a response with status", response.status);
      if( response.status === 200) {
        dispatch({type: LOGIN_SUCCESS, payload: {email}});
        const headers = response.headers;
        this.setStorage('userToken', headers.get('access-token'));
      } else if( response.status === 401) {
        console.warn("Oh no!");
        Alert.alert(
          'Problem with Login', 
          'Your email or password was incorrect', 
          [ {text: 'Continue Without Login', onPress: () => Actions.main()},  
            {text: 'Try Again', onPress: () => Actions.login()}, 
          ],
           { cancelable: false }
        );
        dispatch({type: LOGIN_ERROR, payload: 'Incorrect email or password.'});
      }
    })
    .catch(error => {
      console.log('err', error);
    })
  }
}
