import React from 'react';
import {componentConfig} from '../../data-client';

function FactoryComponent({ data }) {
  const { type, children, props } = data;
  const View = componentConfig[type];
  const components = children.map(comp => {
    const Parent = componentConfig[comp.type];
    const pProps = comp.props;
    const parentChildren = !comp.children ? [] : comp.children.map((child) => {
      const Child = componentConfig[child.type];
      const cProps = child.props;
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

export { FactoryComponent };