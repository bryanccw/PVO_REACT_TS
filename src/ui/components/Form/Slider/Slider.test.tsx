import { useState } from 'react';
import { render } from '@testing-library/react';
import Slider from './Slider';
const defaultProps = {
  min: 1,
  max: 2,
  value: 1.5,
  step: 0.01,
};

describe('<Slider />', () => {
  const WrapperComponent = () => {
    const [value, setValue] = useState(defaultProps.value);

    return <Slider {...defaultProps} value={value} onChange={e => setValue(Number(e.target.value))} />;
  };
  test('Slider mounted', () => {
    const { getByTestId } = render(<WrapperComponent />);
    const component = getByTestId('slider-test-id');
    expect(component).toBeInTheDocument();
  });
});
