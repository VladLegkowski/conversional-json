import React from 'react';
import {Box, Button, Icon, Link} from '@chakra-ui/core';
import {ModalContextConsumer} from '../../modal-context/ModalContextConsumer';

function LinkComponent(props) {
  return (
    <ModalContextConsumer>
      {value => (
        <Box>
          <Link onClick={value.onOpen} href={props.url} isExternal>
            {props.text} <Icon name="external-link" mx="2px" />
          </Link>
        </Box>
      )}
    </ModalContextConsumer>
  )
}

export { LinkComponent };