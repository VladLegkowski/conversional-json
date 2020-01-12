import React, { useState } from 'react';
import {
  ThemeProvider,
  CSSReset,
  theme,
  Button,
  ButtonGroup
} from '@chakra-ui/core';
import { dataOne, dataTwo } from './data-client';
import { PageFactory } from './PageFacotry';
import { H1Component } from './components';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
    <div className="App">
        {data ? <PageFactory data={data} /> : <H1Component text="Select a file to display the view" />}
        <ButtonGroup spacing={4} p="10px">
          <Button isDisabled={data === dataOne} variantColor="teal" onClick={() => setData(dataOne)}>JSON One</Button>
          <Button isDisabled={data === dataTwo} variantColor="teal" onClick={() => setData(dataTwo)}>JSON Two</Button>
        </ButtonGroup>
    </div>
    </ThemeProvider>
  );
}

export default App;
