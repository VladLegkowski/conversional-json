import React from 'react';
import {Text} from '@chakra-ui/core';

function H1Component(props) {
  return <Text fontSize="5xl">{props.text}</Text>
};

export { H1Component };