import React from 'react';
import {Box, Button} from '@chakra-ui/core';
import { ModalContextConsumer } from '../../modal-context';

function ButtonComponent(props) {
  function renderButtonComponent(value) {
    return(
      <Box>
        <Button variantColor="teal" onClick={value.onOpen}>{props.text}</Button>
      </Box>
    )
  }
  return (
    <ModalContextConsumer>{value => renderButtonComponent(value)}</ModalContextConsumer>
  )
}

export { ButtonComponent };