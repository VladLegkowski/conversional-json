import React from 'react';
import {Box} from '@chakra-ui/core';

function BoxComponent (props) {
  return <Box
    borderWidth={props.borderSize && props.borderSize}
    p="20px"
  >
    {props.children}
  </Box>
};

export { BoxComponent };