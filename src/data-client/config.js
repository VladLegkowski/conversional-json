import * as constants from './index';
import {
  BoxComponent,
  H1Component,
  H2Component,
  ListComponent,
  ButtonComponent,
  LinkComponent,
  ModalComponent,
  ParagraphComponent
} from '../components';

export const componentConfig = {
  [constants.COMPONENTS.BOX_COMPONENT]: BoxComponent,
  [constants.COMPONENTS.H1_COMPONENT]: H1Component,
  [constants.COMPONENTS.H2_COMPONENT]: H2Component,
  [constants.COMPONENTS.LIST_COMPONENT]: ListComponent,
  [constants.COMPONENTS.BUTTON_COMPONENT]: ButtonComponent,
  [constants.COMPONENTS.LINK_COMPONENT]: LinkComponent,
  [constants.COMPONENTS.MODAL_COMPONENT]: ModalComponent,
  [constants.COMPONENTS.PARAGRAPH_COMPONENT]: ParagraphComponent,
};