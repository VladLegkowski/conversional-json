import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/core';
import { ModalContextConsumer } from '../../modal-context';

const BASE_MODAL = 'baseModal';

function ButtonComponent(props) {
  const [modal, setModal] = useState(null);
  useEffect(() => {
    setModal(props.modalName)
  }, [props.modalName]);
  function renderButtonComponent(value) {
    if(modal === BASE_MODAL) {
      return(
        <Box>
          <Button
            variantColor="teal"
            onClick={value.onOpen}>{props.text}</Button>
        </Box>
      )
    }
    return(
      <Box>
        <Button
          variantColor="green"
          onClick={() => console.log('I Am Normal Button')}>{props.text}</Button>
      </Box>
    )
  }
  return (
    <ModalContextConsumer>{value => renderButtonComponent(value)}</ModalContextConsumer>
  )
}

export { ButtonComponent };