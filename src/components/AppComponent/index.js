import React, { useState } from 'react';
import {
  ThemeProvider,
  CSSReset,
  theme,
  Button,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/core';
import { ModalContextProvider } from '../../modal-context';
import { dataOne, dataTwo } from '../../data-client/mock-data';
import { FactoryComponent } from '../FactoryComponent';
import { H1Component } from '../H1Component';
import './App.css';

function AppComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState(null);
  const modalProps = { isOpen, onOpen, onClose }
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ModalContextProvider value={modalProps}>
        <div className="App">
          {data ? <FactoryComponent data={data} /> : <H1Component text="Select a file to display the view" />}
          <ButtonGroup spacing={4} p="10px">
            <Button isDisabled={data === dataOne} variantColor="teal" onClick={() => setData(dataOne)}>JSON One</Button>
            <Button isDisabled={data === dataTwo} variantColor="teal" onClick={() => setData(dataTwo)}>JSON Two</Button>
          </ButtonGroup>
        </div>
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export { AppComponent };
