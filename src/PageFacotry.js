import React from 'react';
import {useDisclosure} from '@chakra-ui/core';
import {componentConfig} from './data-client';

function PageFactory({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { type, children, props } = data;
  const modalStates = { isOpen, onClose };
  const View = componentConfig[type];
  const components = children.map(comp => {
    const Parent = componentConfig[comp.type];
    const parentBaseProps = comp.props;
    const isModal = comp.type === 'MODAL_COMPONENT';
    const pProps = isModal ? {...parentBaseProps, modalStates} : parentBaseProps;
    const parentChildren = !comp.children ? [] : comp.children.map((child) => {
      const Child = componentConfig[child.type];
      const childBaseProps = child.props;
      const modalOpener = (child.type === 'BUTTON_COMPONENT' || child.type === 'LINK_COMPONENT');
      const cProps = modalOpener ? { ...childBaseProps, onOpen } : childBaseProps;
      return(
        <Child key={child.id} {...cProps} />
      )
    });
    return(
      <Parent
        key={comp.id}
        {...pProps}
      >
        {parentChildren.map(view => view)}
      </Parent>
    )
  });
  return(
    <View {...props}>
      {components.map(content => content)}
    </View>
  )
}

export { PageFactory };