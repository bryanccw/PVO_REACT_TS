import { render, cleanup, fireEvent } from '@testing-library/react';
import { waitFor } from '@storybook/testing-library';
import { DropDownValidations } from '../types/enums';
import MultiSelect from './MultiSelect';

describe('dropdown Component Test Cases', () => {
  afterEach(cleanup);
  test('dropdown Component mounted', () => {
    const { getByTestId } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" />);
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown component with value', () => {
    const { getByTestId } = render(
      <MultiSelect name="dropdown-name" placeholder="Dropdown" value={'Dropdown Value'} />,
    );
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown  disable={true} ', () => {
    const { container } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" disabled />);
    expect(container.firstChild).toHaveClass('dropdown-container');
  });

  test('dropdown  classname ', () => {
    const { container } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" className="className" />);
    expect(container.firstChild).toHaveClass('dropdown-container');
  });

  test('dropdown  icon on disable={true}', () => {
    const { getByTestId } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" disabled={true} />);
    const dropdown = getByTestId('dropdown-icon-text-id');
    fireEvent.click(dropdown);
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown  disable={true}', () => {
    const { container } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" disabled={true} />);
    expect(container.firstChild).toHaveClass('disabled-container');
  });

  test('dropdown statue= DEFAULT', () => {
    const { container } = render(
      <MultiSelect name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.DEFAULT} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });
  test('dropdown statue= DEFAULT and disabled={true}', () => {
    const { container } = render(
      <MultiSelect name="dropdown-name" placeholder="Dropdown" disabled={true} status={DropDownValidations.DEFAULT} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });

  test('dropdown statue= VALID', () => {
    const { container } = render(
      <MultiSelect name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.VALID} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });

  test('dropdown statue= VALID', () => {
    const { container } = render(
      <MultiSelect name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.INVALID} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });

  test('dropdown component with dropdownLabel', () => {
    render(<MultiSelect name="dropdown-name" placeholder="Dropdown" dropdownLabel={'Field Label'} />);
  });

  test('dropdown component with Message', () => {
    render(<MultiSelect name="dropdown-name" placeholder="Dropdown" message={'Message'} />);
  });

  test('dropdown component if data passed', () => {
    const onSelect = jest.fn();
    render(
      <MultiSelect
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          { id: 1, name: 'Dropdown value 1' },
          { id: 2, name: 'Dropdown value 2' },
          { id: 3, name: 'Dropdown value 3' },
          { id: 4, name: 'Dropdown value 4' },
          { id: 5, name: 'Edge' },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );
  });

  test('dropdown component if disabled', () => {
    const { getByTestId } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" disabled />);
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeDisabled;
  });

  test('dropdown component if visible', () => {
    const { getByTestId } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" />);
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown component if onClick passed with click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<MultiSelect name="dropdown-name" placeholder="Dropdown" onClick={onClick} />);
    const dropdown = getByTestId('dropdown-section-test-id');
    fireEvent.keyPress(dropdown, { key: 'enter', keyCode: 13 });
    fireEvent.click(dropdown);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('dropdown component if li is clicked', () => {
    const onSelect = jest.fn();
    const { getAllByTestId } = render(
      <>
        <div data-testid="outside-click">sample body</div>
        <MultiSelect
          name="dropdown-name"
          placeholder="Dropdown"
          data={[
            { id: 1, name: 'Dropdown value 1' },
            { id: 2, name: 'Dropdown value 2' },
            { id: 3, name: 'Dropdown value 3' },
            { id: 4, name: 'Dropdown value 4' },
            { id: 5, name: 'Edge' },
          ]}
          configData={{ label: 'name', onSelect: onSelect }}
        />
      </>,
    );
    const dropdownlist = getAllByTestId('dropdown-li-element');
    fireEvent.click(dropdownlist[0]);
    expect(onSelect).toHaveBeenCalledTimes(0);
  });

  test('DropDownMultiSelect component on onKeyDown ', () => {
    const { getByTestId } = render(<MultiSelect name="dropdown-name" placeholder={'DropDownMultiSelect'} />);
    const element = getByTestId('dropdown-test-id');
    fireEvent.keyDown(element, { key: 'Enter', code: 13, charCode: 13 });
    expect(element).toBeInTheDocument();
  });

  test('DropDownMultiSelect component on onKeyDown ', () => {
    const { getAllByTestId } = render(
      <MultiSelect
        name="dropdown-name"
        testId={'item'}
        data={[
          { id: 1, name: 'Dropdown value 1' },
          { id: 2, name: 'Dropdown value 2' },
          { id: 3, name: 'Dropdown value 3' },
          { id: 4, name: 'Dropdown value 4' },
          { id: 5, name: 'Edge' },
        ]}
        placeholder={'DropDownMultiSelect'}
      />,
    );
    const element = getAllByTestId('item-li-element');
    fireEvent.keyDown(element[0], { key: 'Enter', code: 13, charCode: 13 });
    expect(element[0]).toBeInTheDocument();
  });

  test('DropDownMultiSelect component when drawer open', async () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <MultiSelect
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          { id: 1, name: 'Dropdown value 1' },
          { id: 2, name: 'Dropdown value 2' },
          { id: 3, name: 'Dropdown value 3' },
          { id: 4, name: 'Dropdown value 4' },
          { id: 5, name: 'Edge' },
        ]}
        status={DropDownValidations.DEFAULT}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );
    const element = getByTestId('dropdown-section-test-id');
    fireEvent.click(element); // Use 'click' instead of 'mouseDown'
    const elementResult = getByTestId('dropdown-results-test-id');

    // Wait for the component to update after the click event
    await waitFor(() => {
      expect(elementResult).toHaveClass('open-dropdown-result');
    });
  });

  test('dropdown component on option select', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <MultiSelect
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          { id: 1, name: 'Dropdown value 1' },
          { id: 2, name: 'Dropdown value 2' },
          { id: 3, name: 'Dropdown value 3' },
          { id: 4, name: 'Dropdown value 4' },
          { id: 5, name: 'Edge' },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );

    // Click the first option to select it
    const optionCheckbox = getByTestId('dropdown-checkbox-0');
    fireEvent.click(optionCheckbox);

    // Check if the onSelect callback is called with the correct selected options
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith([{ id: 1, name: 'Dropdown value 1' }]);
  });
});
