import React from 'react';
import {Box, Icon, Link} from '@chakra-ui/core';
import {ModalContextConsumer} from '../../modal-context/ModalContextConsumer';

function LinkComponent(props) {
  function renderLinkComponent(value) {
    return(
      <Box>
        <Link onClick={value.onOpen} href={props.url} isExternal>
          {props.text} <Icon name="external-link" mx="2px" />
        </Link>
      </Box>
    )
  }
  return (
    <ModalContextConsumer>{value => renderLinkComponent(value)}</ModalContextConsumer>
  )
}

export { LinkComponent };