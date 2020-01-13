import React from 'react';
import { Text } from '@chakra-ui/core';

function H2Component(props) {
  return <Text fontSize="3xl">{props.text}</Text>
};

export { H2Component };