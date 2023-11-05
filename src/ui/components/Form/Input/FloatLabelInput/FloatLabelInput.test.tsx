import { render, fireEvent, cleanup } from '@testing-library/react';
import { InputValidations } from '../Input';
import { IconStyle, BreakpointProvider } from '../../../';
import FloatLabelInput from './FloatLabelInput';

const defaultProps = {
  id: 'input-id',
  message: 'Message',
  className: '',
  disabled: false,
  readOnly: false,
};

describe('Float Label Input component', () => {
  afterEach(cleanup);

  test('Input component should be mounted', () => {
    const { getByTestId } = render(<FloatLabelInput name="input-name" />);
    const input = getByTestId('float-input-test-id');
    expect(input).toBeInTheDocument();
  });

  test('Input component with not disabled and cta-textlinkg', () => {
    const { getByTestId } = render(
      <FloatLabelInput name="input-name" disabled ctaTextLink={{ href: '#', text: 'link' }} />,
    );
    const input = getByTestId('float-input-test-id');
    expect(input).toBeInTheDocument();
  });

  test('Input component has value and onChange event', () => {
    const { getByTestId } = render(<FloatLabelInput name="input-name" />);
    const input = getByTestId('float-input-test-id') as HTMLInputElement;
    fireEvent.blur(input);
    fireEvent.change(input, {
      target: { value: 'input text value' },
    });
    expect(input).toHaveValue('input text value');
  });

  test('Input component when status=VALID', () => {
    const { container } = render(
      <FloatLabelInput name="input-name" {...defaultProps} status={InputValidations.VALID} />,
    );
    expect(container.firstChild).toHaveClass('input-validated-valid');
  });
  test('Input component when status=INVALID', () => {
    const { container } = render(
      <FloatLabelInput name="input-name" {...defaultProps} status={InputValidations.INVALID} />,
    );
    expect(container.firstChild).toHaveClass('input-validated-invalid');
  });

  test('Input component with long prefix', () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));
    const { container } = render(
      <BreakpointProvider>
        <FloatLabelInput
          name="input-name"
          {...defaultProps}
          prefix="https://global-dev.amcom-corp-preprod.amway.net/comamshopws/"
          ctaTextLink={{ href: '#', text: 'link' }}
          status={InputValidations.INVALID}
          value="https://global-dev.amcom-corp-preprod.amway.net/comamshopws/"
        />
      </BreakpointProvider>,
    );
    expect(container.firstChild).toHaveClass('input-validated-invalid');
  });
  test('Input component with short prefix', () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));
    const { container } = render(
      <BreakpointProvider>
        <FloatLabelInput
          name="input-name"
          {...defaultProps}
          prefix="prefix"
          status={InputValidations.INVALID}
          ctaTextLink={{ href: '#', text: 'link' }}
          value="12345678901234567890"
        />
      </BreakpointProvider>,
    );
    expect(container.firstChild).toHaveClass('input-validated-invalid');
  });

  test('Input component if mlpVersion set to two and readonly', () => {
    const { getByTestId } = render(<FloatLabelInput name="input-name" {...defaultProps} readOnly={true} />);
    const input = getByTestId('float-input-test-id') as HTMLInputElement;
    expect(input.hasAttribute('readonly') === true).toBeTruthy();
  });

  test('Input component if mlpVersion set to two and disabled', () => {
    const { getByTestId } = render(<FloatLabelInput name="input-name" {...defaultProps} disabled />);
    const input = getByTestId('float-input-test-id') as HTMLInputElement;
    expect(input).toBeDisabled;
  });

  test('Input component if labeled and mlpVersion is false', () => {
    const { getByTestId } = render(<FloatLabelInput name="input-name" {...defaultProps} label="label data" />);
    const inputLabel = getByTestId('input-label-text-test') as HTMLSpanElement;
    expect(inputLabel).toHaveTextContent('label data');
  });
  test('Input component show image when iconImgSrc is passed', () => {
    const { getByTestId } = render(
      <FloatLabelInput name="input-name" {...defaultProps} iconImgSrc="testUrl" label="label data" />,
    );
    const inputIconImg = getByTestId('input-box-img-test-id') as HTMLDivElement;
    expect(inputIconImg).toBeInTheDocument();
    expect(inputIconImg).toHaveClass('icon-image');
    expect(inputIconImg.getAttribute('src')).toBe('testUrl');
  });
  test('Input component show icon when iconImgSrc is not passed', () => {
    const inputIconOnClick = jest.fn();
    const { getByTestId } = render(
      <FloatLabelInput
        name="input-name"
        {...defaultProps}
        inputIcon={{ iconName: 'cart-shopping', iconStyle: IconStyle.SOLID }}
        inputIconOnClick={inputIconOnClick}
        label="label data"
      />,
    );
    const inputIcon = getByTestId('input-box-icon-test-id') as HTMLDivElement;
    expect(inputIcon).toHaveClass('input-box-icon');
    fireEvent.click(inputIcon);
    expect(inputIconOnClick).toHaveBeenCalledTimes(1);
  });
});
