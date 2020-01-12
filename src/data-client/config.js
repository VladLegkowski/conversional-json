import * as constants from './index';
import * as component from '../components';

export const componentConfig = {
  [constants.COMPONENTS.BOX_COMPONENT]: component.BoxComponent,
  [constants.COMPONENTS.H1_COMPONENT]: component.H1Component,
  [constants.COMPONENTS.H2_COMPONENT]: component.H2Component,
  [constants.COMPONENTS.LIST_COMPONENT]: component.ListComponent,
  [constants.COMPONENTS.BUTTON_COMPONENT]: component.ButtonComponent,
  [constants.COMPONENTS.LINK_COMPONENT]: component.LinkComponent,
  [constants.COMPONENTS.MODAL_COMPONENT]: component.ModalComponent,
  [constants.COMPONENTS.PARAGRAPH_COMPONENT]: component.ParagraphComponent,
};