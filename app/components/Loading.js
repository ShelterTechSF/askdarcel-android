'use strict';

import React from 'react';
import {
  ActivityIndicator
} from 'react-native';

import { commonStyles } from '../styles';

const Loading = (props) => {
  // A spinner to display when data is being fetched
  let size = props.size || 'small';
  return (
    <ActivityIndicator
      size={size}
      style={commonStyles.spinner}
    />
  );
};

export default Loading;
