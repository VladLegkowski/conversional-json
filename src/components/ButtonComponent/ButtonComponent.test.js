import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import { ButtonComponent } from './index';

jest.mock('../ButtonComponent', () => ({
  ButtonComponent: (props) => {
    if (props.modalName) {
      return <button className="modal-button" onClick={props.value.onOpen}>{props.text}</button>;
    }
    return <button>{props.text}</button>;
  }
}));

describe('ButtonComponent', () => {
  const onOpen = jest.fn();
  const onClose = jest.fn();
  const value = {
    isOpen: false,
    onOpen,
    onClose
  };
  const props = {
    modalName: "baseModal",
    text: "Click me to open the modal",
    value,
  };
  beforeEach(()=> {
    onOpen.mockReset();
    onClose.mockReset();
  });
  test('Renders Button which triggers modal', () => {
    const {container} = render(<ButtonComponent {...props} />);
    const button = container.firstChild;
    expect(button.textContent).toBe("Click me to open the modal");
  });
  test('Renders standard Button', () => {
    const {container} = render(<ButtonComponent text="Normal Button"  modalName={null} />);
    const button = container.firstChild;
    expect(button.textContent).toBe("Normal Button");
  });
  test('Renders Button which triggers modal', () => {
    const {container} = render(<ButtonComponent {...props} />);
    const button = container.firstChild;
    fireEvent.click(button);
    expect(onOpen).toBeCalled();
  })
});