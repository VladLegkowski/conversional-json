import React from 'react';
import { Consumer } from '../context';

function ModalContextConsumer(props) {
  return <Consumer>{value => props.children(value)}</Consumer>;
}

export { ModalContextConsumer };