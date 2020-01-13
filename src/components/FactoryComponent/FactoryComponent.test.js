import React from 'react';
import { render } from '@testing-library/react';
import { dataOne, dataTwo } from '../../data-client/mock-data';
import { FactoryComponent } from './index';

jest.mock('../ButtonComponent', () => ({
  ButtonComponent: props => {
    if (props.modalName) {
      return <button className="modal-button">{props.text}</button>;
    }
    return <button>{props.text}</button>;
  }
}));
jest.mock('../LinkComponent', () => ({
  LinkComponent: props => {
    if (props.modalName) {
      return <a className="modal-link">{props.text}</a>;
    }
    return <a>{props.text}</a>;
  }
}));

describe('FactoryComponent', () => {
  test('Renders Correctly with JSON data-one', () => {
    const { container } = render(<FactoryComponent data={dataOne} />);
    expect(container).toMatchInlineSnapshot(`
      .emotion-6 {
        margin: 10px;
        padding: 20px;
      }

      .emotion-0 {
        font-family: body;
        font-size: 5xl;
      }

      .emotion-1 {
        font-family: body;
        font-size: 3xl;
      }

      .emotion-5 {
        list-style-type: disc;
        list-style-position: inside;
      }

      <div>
        <div
          class="emotion-6"
        >
          <p
            class="emotion-0"
          >
            Our benefits
          </p>
          <p
            class="emotion-1"
          >
            This is why you will love our product
          </p>
          <ul
            class="emotion-5"
          >
            <li
              class="emotion-2"
            >
              free to use
            </li>
            <li
              class="emotion-2"
            >
              superfast
            </li>
            <li
              class="emotion-2"
            >
              and pretty, too!
            </li>
          </ul>
        </div>
      </div>
    `);
  });
  test('Renders Correctly with JSON data-one', () => {
    const { container } = render(<FactoryComponent data={dataTwo} />);
    expect(container).toMatchInlineSnapshot(`
      .emotion-2 {
        border-width: 2px;
        margin: 10px;
        padding: 20px;
      }

      .emotion-0 {
        border-width: 1px;
        margin: 10px;
        padding: 20px;
      }

      <div>
        <div
          class="emotion-2"
        >
          <div
            class="emotion-0"
          >
            <button
              class="modal-button"
            >
              Click me to open the modal
            </button>
            <a
              class="modal-link"
            >
              I open a link but I should also open the modal.
            </a>
          </div>
          <div
            class="emotion-0"
          >
            <button>
              I am normal button
            </button>
            <a>
              I am a normal Link component.
            </a>
          </div>
        </div>
      </div>
    `);
  });
});
