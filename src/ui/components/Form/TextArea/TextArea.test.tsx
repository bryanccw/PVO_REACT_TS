import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MLPVersion } from '../../';
import TextArea from './TextArea';

//Test suite checks Text Area is rendered in the DOM

describe('Text area is rendered', () => {
  test('text area component is present', () => {
    render(<TextArea name="test case 1" cols={2} rows={3} />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement).toBeInTheDocument();
  });
});

//Test suite checks for props and css added for the component
describe('Text area component has added props & styles', () => {
  test('text area with MLPVERSION 1', () => {
    render(<TextArea name="test case 2" cols={2} rows={3} />);
    expect(document.querySelector('.textarea-field')).toBeInTheDocument();
  });
  test('text area with MLPVERSION 2', () => {
    render(<TextArea mlpVersion={MLPVersion.TWO} name="test case 2" cols={2} rows={3} />);
    expect(document.querySelector('.textarea-field')).toBeInTheDocument();
  });
});
