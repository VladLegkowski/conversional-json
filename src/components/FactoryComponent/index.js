import React from 'react';
import { componentConfig } from '../../data-client';

function FactoryComponent({ data }) {
  const { type, children, props } = data;
  const Page = componentConfig[type];
  const views = children.map(view => {
    const View = componentConfig[view.type];
    const pProps = view.props;
    const components = !view.children ? [] : view.children.map((component) => {
      const Component = componentConfig[component.type];
      const cProps = component.props;
      return(
        <Component key={component.id} {...cProps} />
      )
    });
    return(
      <View
        key={view.id}
        {...pProps}
      >
        {components.map(view => view)}
      </View>
    )
  });
  return(
    <Page {...props}>
      {views.map(content => content)}
    </Page>
  )
}

export { FactoryComponent };