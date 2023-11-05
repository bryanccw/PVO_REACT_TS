import { forwardRef } from 'react';
import { MLPVersion } from '../../';
import { TextAreaPropsType } from './types/propsType';
import { TextAreaValidations } from './types/enums';

import ClassicTextArea from './ClassicTextArea/ClassicTextArea';
import FloatLabelTextArea from './FloatLabelTextArea/FloatLabelTextArea';
/**
 * @description TextArea component provides <TextArea></TextArea> with basic styling;W
 * Props ->
 * className: prop to get custom styling class
 * label: prop to add field label above text area
 * labelInfo: adds tooltip beside label, renders tooltip info if any (MLP VERSION 1)
 * status: defines status of entry if any i.e. default,valid or invalid
 * rows: specifies the visible number of lines in a text area
 * cols: specifies the visible width of a text area
 *
 */

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaPropsType>(
  ({ mlpVersion = MLPVersion.ONE, ...restProps }: TextAreaPropsType, ref) =>
    mlpVersion === MLPVersion.ONE ? (
      <ClassicTextArea {...restProps} forwardedRef={ref} />
    ) : (
      <FloatLabelTextArea {...restProps} forwardedRef={ref} />
    ),
);
TextArea.displayName = 'TextArea';

export default TextArea;
export { TextAreaValidations };
