import React, {
  PropTypes,
} from 'react';
import {
  Text,
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => (
  <Text
    style={{ color: props.selected ? 'red' : 'black', backgroundColor: '#aaa', }}
  >
    {props.title}
  </Text>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
