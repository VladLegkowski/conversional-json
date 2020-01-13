import React from 'react';
import {List, ListItem} from '@chakra-ui/core';

function ListComponent(props) {
  return (
    <List styleType="disc">
      {props.li.map(child => (
        <ListItem key={child}>{child}</ListItem>
      ))}
    </List>
  )
};

export { ListComponent };