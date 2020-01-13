import React from 'react';
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay} from '@chakra-ui/core';
import { ModalContextConsumer } from '../../modal-context';

function ModalComponent(props) {
  return (
    <ModalContextConsumer>
      {value => (
          <Modal
            isOpen={value.isOpen}
            onClose={value.onClose}
          >
            <ModalOverlay />
            <ModalContent
              minW={props.width}
              minH={props.height}
            >
              <ModalCloseButton />
              <ModalBody>
                {props.children}
              </ModalBody>
            </ModalContent>
          </Modal>
        )
      }

    </ModalContextConsumer>
  )
}

export { ModalComponent };