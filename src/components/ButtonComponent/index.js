import React from 'react';
import {Box, Button} from '@chakra-ui/core';
import { ModalContextConsumer } from '../../modal-context';

function ButtonComponent(props) {
  return (
    <ModalContextConsumer>
      {value => (
        <Box>
          <Button variantColor="teal" onClick={value.onOpen}>{props.text}</Button>
        </Box>
      )}
    </ModalContextConsumer>

  )
};

export { ButtonComponent };