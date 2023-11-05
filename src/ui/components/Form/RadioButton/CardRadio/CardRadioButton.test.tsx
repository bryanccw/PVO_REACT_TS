import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { MLPVersion, Theme, IconPropInterface, IconStyle } from '../../../';

import CardRadioButton from './CardRadioButton';

const icon: IconPropInterface = {
  iconName: 'truck',
  iconStyle: IconStyle.SOLID,
};

describe('Card RadioButton render', () => {
  test('Card RadioButton is Mounted', () => {
    const { getByTestId } = render(<CardRadioButton onChange={jest.fn()} />);
    const cardRadioButton = getByTestId('card-radio-test-id');
    expect(cardRadioButton).toBeInTheDocument();
  });

  test('Card RadioButton if label is passed', () => {
    const { container } = render(<CardRadioButton label="label text" onChange={jest.fn()} />);
    expect(container).toHaveTextContent('label text');
  });

  test('Card RadioButton if card description is passed', () => {
    const { container } = render(<CardRadioButton cardDescription="description text" onChange={jest.fn()} />);
    expect(container).toHaveTextContent('description text');
  });

  test('Card RadioButton if red theme is passed', () => {
    const { container } = render(<CardRadioButton theme={Theme.RED} onChange={jest.fn()} />);
    expect(container.firstChild).toHaveClass(Theme.RED);
  });

  test('Card RadioButton component if disabled', () => {
    const { getByTestId } = render(<CardRadioButton disabled onChange={jest.fn()} />);
    const cardRadioButton = getByTestId('card-radio-test-id');
    expect(cardRadioButton).toBeDisabled;
  });

  test('Card RadioButton component', () => {
    const { getByTestId } = render(<CardRadioButton onChange={jest.fn()} />);
    const cardRadioButton = getByTestId('card-radio-test-id');
    expect(cardRadioButton).toBeDisabled;
  });
});
describe('Card RadioButton Test cases with different radioIconOption', () => {
  afterEach(cleanup);
  test('Card RadioButton component with ICON RadioIconTypes ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.ONE} icon={icon} onChange={jest.fn()} />);
    const element = screen.getByTestId('icon-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with IMAGE RadioIconTypes ', () => {
    render(
      <CardRadioButton
        mlpVersion={MLPVersion.ONE}
        image={
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD3Gwd-OqqynWvORdyIcoLVM7uoX-OL38SLWS8a0P6wMWfhnkd'
        }
        onChange={jest.fn()}
      />,
    );
    const element = screen.getByTestId('image-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with SWATCHCOLOR RadioIconTypes ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.ONE} swatchColor={'#9C5457'} onChange={jest.fn()} />);
    const element = screen.getByTestId('swatch-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with SWATCHCOLOR RadioIconTypes with disabled ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.ONE} swatchColor={'#9C5457'} onChange={jest.fn()} disabled />);
    const element = screen.getByTestId('line-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with None RadioIconTypes ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.ONE} onChange={jest.fn()} />);
    const element = screen.getByTestId('card-radio-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with IMAGE RadioIconTypes ', () => {
    render(
      <CardRadioButton
        mlpVersion={MLPVersion.ONE}
        image={
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD3Gwd-OqqynWvORdyIcoLVM7uoX-OL38SLWS8a0P6wMWfhnkd'
        }
        onChange={jest.fn()}
      />,
    );
    const element = screen.getByTestId('image-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with SWATCHCOLOR RadioIconTypes ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.ONE} swatchColor={'#9C5457'} onChange={jest.fn()} />);
    const element = screen.getByTestId('swatch-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with SWATCHCOLOR RadioIconTypes with disabled ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.ONE} swatchColor={'#9C5457'} onChange={jest.fn()} disabled />);
    const element = screen.getByTestId('line-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with None RadioIconTypes', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.ONE} onChange={jest.fn()} />);
    const element = screen.getByTestId('card-radio-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with None RadioIconTypes and MLP style version TWO ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.TWO} onChange={jest.fn()} />);
    const element = screen.getByTestId('card-radio-test-id');
    expect(element).toBeInTheDocument();
  });

  test('Card RadioButton component with SWATCHCOLOR RadioIconTypes with disabled and MLP style version TWO ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.TWO} swatchColor={'#9C5457'} onChange={jest.fn()} disabled />);
    const element = screen.getByTestId('line-test-id');
    expect(element).toBeInTheDocument();
  });
  test('Card RadioButton component with IMAGE RadioIconTypes and MLP style version TWO ', () => {
    render(
      <CardRadioButton
        mlpVersion={MLPVersion.TWO}
        image={
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD3Gwd-OqqynWvORdyIcoLVM7uoX-OL38SLWS8a0P6wMWfhnkd'
        }
        onChange={jest.fn()}
      />,
    );
    const element = screen.getByTestId('image-test-id');
    expect(element).toBeInTheDocument();
  });
  test('Card RadioButton component with value on right side and MLP style version TWO ', () => {
    render(<CardRadioButton mlpVersion={MLPVersion.TWO} value="$37.00" onChange={jest.fn()} />);
    const element = screen.getByTestId('value-test-id');
    expect(element).toBeInTheDocument();
  });
  test('Card RadioButton component with value on right side slong with children elements and MLP style version TWO ', () => {
    render(
      <CardRadioButton mlpVersion={MLPVersion.TWO} value="$37.00" onChange={jest.fn()}>
        <div>Props HTML Template</div>
      </CardRadioButton>,
    );
    const element = screen.getByTestId('children-body-test-id');
    expect(element).toBeInTheDocument();
  });
});
