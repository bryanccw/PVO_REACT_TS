import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { DropDown } from '../';
import Modal, { ButtonAlignment, TextAlign } from './Modal';
describe('Modal Component', () => {
  afterEach(cleanup);
  it('modal component with headline', () => {
    const { getByTestId } = render(<Modal headline={'Modal Headline'} primaryButtonLabel={''} />);
    const element = getByTestId('modal-healine-test-id');
    expect(element).toBeInTheDocument();
  });

  it('modal component with content', () => {
    const { getByTestId } = render(
      <Modal headline={'Modal Headline'} primaryButtonLabel={''}>
        <label htmlFor={'Field Label'}>content</label>
      </Modal>,
    );
    const element = getByTestId('content-test-id');
    expect(element).toBeInTheDocument();
  });

  it('modal component with headline center', () => {
    const { getByTestId } = render(
      <Modal
        headline={'Modal Headline'}
        textAlign={TextAlign.CENTER}
        primaryButtonLabel={''}
        buttonAlignment={ButtonAlignment.HORIZONTAL}
      />,
    );
    const element = getByTestId('modal-healine-test-id');
    expect(element).toBeInTheDocument();
  });

  it('modal component with headline left', () => {
    const { getByTestId } = render(
      <Modal headline={'Modal Headline'} textAlign={TextAlign.LEFT} primaryButtonLabel={''} />,
    );
    const element = getByTestId('modal-healine-test-id');
    expect(element).toBeInTheDocument();
  });

  it('modal component with headline center and wrapper class', () => {
    const { getByTestId } = render(
      <Modal headline={'Modal Headline'} textAlign={TextAlign.LEFT} primaryButtonLabel={''} />,
    );
    const element = getByTestId('modal-healine-test-id');
    expect(element).toBeInTheDocument();
  });

  it('modal component primary button', () => {
    const { getByTestId } = render(<Modal headline={'Modal Headline'} primaryButtonLabel="Primary" />);
    const element = getByTestId('primary-button-test-id');
    expect(element).toBeInTheDocument();
  });
  it('modal component  with secondary button', () => {
    const { getByTestId } = render(
      <Modal headline={'Modal Headline'} secondaryButtonLabel="Secondary" primaryButtonLabel={''} />,
    );
    const element = getByTestId('secondary-button-test-id');
    expect(element).toBeInTheDocument();
  });
  it('modal component  with Close Icon', () => {
    const { getByTestId } = render(
      <Modal headline={'Modal Headline'} secondaryButtonLabel="Secondary" closeIcon={true} primaryButtonLabel={''} />,
    );
    const element = getByTestId('close-icon-test-id');
    expect(element).toBeInTheDocument();
  });

  it('click on primarybutton callback', () => {
    const mockCloseCallback = jest.fn();
    const { getByTestId } = render(
      <Modal headline={'Modal Headline'} onPrimaryButtonClick={mockCloseCallback} primaryButtonLabel={'Primary'} />,
    );
    const element = getByTestId('primary-button-test-id');
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });

  it('click on secondary callback', () => {
    const mockCloseCallback = jest.fn();
    const { getByTestId } = render(
      <Modal
        headline={'Modal Headline'}
        secondaryButtonLabel="Secondary"
        closeIcon={true}
        onSecondaryButtonClick={mockCloseCallback}
        primaryButtonLabel={''}
      />,
    );
    const element = getByTestId('secondary-button-test-id');
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });

  it('click on onClose callback', () => {
    const mockCloseCallback = jest.fn();
    const { getByTestId } = render(
      <Modal
        headline={'Modal Headline'}
        secondaryButtonLabel="Secondary"
        closeIcon={true}
        onClose={mockCloseCallback}
        primaryButtonLabel={''}
      />,
    );
    const element = getByTestId('close-icon-test-id');
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });

  it('modal with textlink ', () => {
    const { getByTestId } = render(
      <Modal
        headline={'Modal Headline'}
        closeIcon={true}
        textLinkProps={{ text: 'Tertiary', href: 'test_URL' }}
        primaryButtonLabel={''}
      />,
    );
    const element = getByTestId('test-link-test-id');
    expect(element).toBeInTheDocument();
  });
  it('modal with custom primary and secondary button  ', () => {
    const { getByTestId } = render(
      <Modal
        headline={'Modal Headline'}
        closeIcon={true}
        primaryButtonLabel={''}
        primaryButton={<div data-testid="custom-button-primary">PrimaryButton</div>}
        secondaryButton={<div data-testid="custom-button-secondary">SecondaryButton</div>}
      />,
    );
    const elementP = getByTestId('custom-button-primary');
    const elementS = getByTestId('custom-button-secondary');
    expect(elementP).toBeInTheDocument();
    expect(elementS).toBeInTheDocument();
  });
  it('modal with dropdown ', () => {
    const onSelect = jest.fn();
    const { getByTestId, getAllByTestId } = render(
      <Modal
        headline={'Modal Headline'}
        closeIcon={true}
        primaryButtonLabel={''}
        primaryButton={<div data-testid="custom-button-primary">PrimaryButton</div>}
        secondaryButton={<div data-testid="custom-button-secondary">SecondaryButton</div>}
      >
        <DropDown
          name="dropdown-name"
          placeholder="Dropdown"
          data={[
            { id: 1, name: 'item 1' },
            { id: 2, name: 'item 2' },
            { id: 3, name: 'item 3' },
          ]}
          configData={{ label: 'name', onSelect: onSelect }}
          value="item 2"
          onChange={() => null}
        />
      </Modal>,
    );
    const dropdownInput = getByTestId('dropdown-test-id');
    fireEvent.click(dropdownInput);
    const liElement = getAllByTestId('dropdown-result-test-id');
    expect(liElement[0]).toBeInTheDocument();
  });
});
