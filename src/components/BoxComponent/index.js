import React from 'react';
import { Box } from '@chakra-ui/core';

function BoxComponent (props) {
  return <Box
    borderWidth={props.borderSize && props.borderSize}
    m="10px"
    p="20px"
  >
    {props.children}
  </Box>
};

export { BoxComponent };