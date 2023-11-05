import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextAreaValidations } from '../types/enums';

import ClassicTextArea from './ClassicTextArea';

const text =
  'updated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated textupdated text';
//Test suite checks Text Area is rendered in the DOM
describe('Text area is rendered', () => {
  test('text area component is present', () => {
    render(<ClassicTextArea name="test case 1" cols={2} rows={3} />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement).toBeInTheDocument();
  });
});

//Test suite checks for props and css added for the component
describe('Text area component has added props & styles', () => {
  test('text area is visible', () => {
    render(<ClassicTextArea name="test case 2" cols={2} rows={3} />);
    expect(document.querySelector('.textarea-field')).toBeInTheDocument();
  });

  test('text area has label prop defiened', () => {
    render(<ClassicTextArea name="test case 4" label="Enter text" cols={2} rows={3} />);
    expect(document.querySelector('label')).toBeInTheDocument();
  });

  test('text area has labelInfo as tooltip defiened', () => {
    render(<ClassicTextArea name="test case 5" label="Enter text" labelInfo="label info text" cols={2} rows={3} />);
    expect(document.querySelector('span')).toBeInTheDocument();
  });

  test('text area is disabled', () => {
    render(<ClassicTextArea name="test case 6" disabled={true} />);
    expect(document.querySelector('.disabled')).toBeInTheDocument();
  });

  test('text area is resizable', () => {
    render(<ClassicTextArea name="test case 3" resize={false} cols={2} rows={3} />);
    expect(document.querySelector('.resize')).toBeInTheDocument();
  });

  test('text area is read-only', () => {
    render(<ClassicTextArea name="test case 7" readOnly={true} />);
    expect(document.querySelector('.read-only')).toBeInTheDocument();
  });

  test('text area has added class attribute', () => {
    render(<ClassicTextArea name="test case 8" className="text-area-class" />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement).toHaveClass('text-area-class');
  });

  test('text area tooltip text matches', () => {
    render(<ClassicTextArea name="test tooltip" label="Enter text" labelInfo="test info" />);
    expect(screen.getByText('test info')).toBeVisible();
  });

  test('text area value has changed', () => {
    render(<ClassicTextArea name="change event" label="Enter text" />);
    const textAreaElement = screen.getByRole('textbox') as HTMLAreaElement;
    fireEvent.change(textAreaElement, {
      target: {
        value: text,
      },
    });
    expect(textAreaElement).toHaveValue(text);
  });

  test('Text area is VALID', () => {
    render(
      <ClassicTextArea name="test valid" label="Enter text" status={TextAreaValidations.VALID} labelInfo="test info" />,
    );
    expect(document.querySelector('.textarea-validated-valid')).toBeInTheDocument();
  });
  test('Text area is INVALID', () => {
    render(
      <ClassicTextArea
        name="test invalid"
        label="Enter text"
        status={TextAreaValidations.INVALID}
        labelInfo="test info"
      />,
    );
    expect(document.querySelector('.textarea-validated-invalid')).toBeInTheDocument();
  });
});
