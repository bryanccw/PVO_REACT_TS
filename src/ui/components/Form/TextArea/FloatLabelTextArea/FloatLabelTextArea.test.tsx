import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextAreaValidations } from '../TextArea';
import FloatLabelTextArea from './FloatLabelTextArea';

//Test suite checks Text Area is rendered in the DOM

describe('Text area is rendered', () => {
  test('text area component is present', () => {
    render(<FloatLabelTextArea name="test case 1" cols={2} rows={3} />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement).toBeInTheDocument();
  });
});

//Test suite checks for props and css added for the component
describe('Text area component has added props & styles', () => {
  test('text area is visible', () => {
    render(<FloatLabelTextArea name="test case 2" cols={2} rows={3} />);
    expect(document.querySelector('.textarea-field')).toBeInTheDocument();
  });

  test('text area has label prop defiened', () => {
    render(<FloatLabelTextArea name="test case 4" label="Enter text" cols={2} rows={3} />);
    expect(document.querySelector('label')).toBeInTheDocument();
  });

  test('text area is disabled', () => {
    render(<FloatLabelTextArea name="test case 6" disabled={true} />);
    expect(document.querySelector('.disabled')).toBeInTheDocument();
  });

  test('text area is resizable', () => {
    render(<FloatLabelTextArea name="test case 3" resize={false} cols={2} rows={3} />);
    expect(document.querySelector('.resize')).toBeInTheDocument();
  });

  test('text area is read-only', () => {
    render(<FloatLabelTextArea name="test case 7" readOnly={true} />);
    expect(document.querySelector('.read-only')).toBeInTheDocument();
  });

  test('text area has added class attribute', () => {
    render(<FloatLabelTextArea name="test case 8" className="text-area-class" />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement).toHaveClass('text-area-class');
  });

  test('text area value has changed', () => {
    render(<FloatLabelTextArea name="change event" label="Enter text" />);
    const textAreaElement = screen.getByRole('textbox') as HTMLAreaElement;
    fireEvent.change(textAreaElement, {
      target: { value: 'updated text' },
    });
    expect(textAreaElement).toHaveValue('updated text');
  });

  test('Text area is VALID', () => {
    render(<FloatLabelTextArea name="test valid" label="Enter text" status={TextAreaValidations.VALID} />);
    expect(document.querySelector('.textarea-validated-valid')).toBeInTheDocument();
  });

  test('Text area if label value is not passed.', () => {
    render(<FloatLabelTextArea name="test valid" status={TextAreaValidations.VALID} />);
    expect(document.querySelector('label')).not.toBeInTheDocument();
  });
});
