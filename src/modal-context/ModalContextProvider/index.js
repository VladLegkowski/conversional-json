import React from 'react';
import { Provider } from '../context';

function ModalContextProvider({ value, children }) {
  return <Provider value={value}>{children}</Provider>
}

export { ModalContextProvider };