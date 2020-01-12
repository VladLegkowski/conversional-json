import {
  Box, Button, Icon, Link,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text
} from '@chakra-ui/core';
import React from 'react';

function ModalComponent(props) {
  return (
    <Modal
      isOpen={props.modalStates.isOpen}
      onClose={props.modalStates.onClose}
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
function BoxComponent (props) {
  return <Box
    className={props.className && props.className}
    borderWidth={props.borderSize && props.borderSize}
    p="20px"
  >
    {props.children}
  </Box>
};
function H1Component(props) {
  return <Text fontSize="5xl">{props.text}</Text>
};
function H2Component(props) {
  return <Text fontSize="3xl">{props.text}</Text>
};
function ListComponent(props) {
  return (
    <List styleType="disc">
      {props.li.map(child => (
        <ListItem key={child}>{child}</ListItem>
      ))}
    </List>
  )
};
function ButtonComponent(props) {
  return (
    <Box>
      <Button variantColor="teal" onClick={props.onOpen}>{props.text}</Button>
    </Box>
  )
};
function LinkComponent(props) {
  return (
    <Box>
      <Link onClick={props.onOpen} href={props.url} isExternal>
        {props.text} <Icon name="external-link" mx="2px" />
      </Link>
    </Box>
  )
}

function ParagraphComponent(props) {
  return (
    <p>{props.text}</p>
  )
}

export { BoxComponent, ModalComponent, H1Component, H2Component, ListComponent, ButtonComponent, LinkComponent, ParagraphComponent }