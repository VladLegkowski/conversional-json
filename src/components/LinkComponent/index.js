import React, {useEffect, useState} from 'react';
import { Box, Icon, Link } from '@chakra-ui/core';
import { ModalContextConsumer } from '../../modal-context/ModalContextConsumer';

const URL_MODAL = 'urlModal';

function LinkComponent(props) {
  const [modal, setModal] = useState(null);
  useEffect(() => {
    setModal(props.modalName)
  }, [props.modalName]);
  function renderLinkComponent(value) {
    if(modal === URL_MODAL) {
      return(
        <Box>
          <Link onClick={value.onOpen} href={props.url} isExternal>
            {props.text} <Icon name="external-link" mx="2px" />
          </Link>
        </Box>
      )
    }
    return(
      <Box>
        <Link color="gray.500" href={props.url} isExternal>
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