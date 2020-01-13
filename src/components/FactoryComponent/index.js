import React from 'react';
import {componentConfig} from '../../data-client';

function FactoryComponent({ data }) {
  const { type, children, props } = data;
  const Page = componentConfig[type];
  const components = children.map(component => {
    const View = componentConfig[component.type];
    const pProps = component.props;
    const parentChildren = !component.children ? [] : component.children.map((child) => {
      const Child = componentConfig[child.type];
      const cProps = child.props;
      return(
        <Child key={child.id} {...cProps} />
      )
    });
    return(
      <View
        key={component.id}
        {...pProps}
      >
        {parentChildren.map(view => view)}
      </View>
    )
  });
  return(
    <Page {...props}>
      {components.map(content => content)}
    </Page>
  )
}

export { FactoryComponent };