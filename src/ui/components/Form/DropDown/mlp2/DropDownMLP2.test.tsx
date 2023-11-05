import { render, cleanup, fireEvent } from '@testing-library/react';
import { DropDownValidations } from '../types/enums';
import { Theme } from '../../../types/enums';
import DropDown from './DropDownMLP2';

const value = 'Dropdown Value';
describe('MLP 2 dropdown Component Test Cases', () => {
  afterEach(cleanup);
  test('dropdown Component mounted', () => {
    const { getByTestId } = render(<DropDown name="dropdown-name" placeholder="Dropdown" />);
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown component with value', () => {
    const { getByTestId } = render(<DropDown name="dropdown-name" placeholder="Dropdown" />);
    const dropdown = getByTestId('dropdown-test-id');
    const dropdownIcon = getByTestId('dropdown-icon-test-id');
    fireEvent.change(dropdown, {
      target: { value: value },
    });
    fireEvent.keyDown(dropdown, { key: 'Enter', code: 13, charCode: 13 });
    fireEvent.keyDown(dropdownIcon, { key: 'Enter', code: 13, charCode: 13 });
    expect(dropdown).toHaveValue(value);
  });

  test('dropdown disable={false} ', () => {
    const { getByTestId } = render(<DropDown name="dropdown-name" placeholder="Dropdown" disabled />);
    const dropdown = getByTestId('dropdown-test-id') as HTMLInputElement;
    expect(dropdown).toBeDisabled;
  });

  test('dropdown theme ', () => {
    const { container } = render(<DropDown name="dropdown-name" placeholder="Dropdown" theme={Theme.BLACK} />);
    expect(container.firstChild).toHaveClass(Theme.BLACK);
  });
  test('dropdown classname ', () => {
    const { getByTestId } = render(
      <DropDown name="dropdown-name" placeholder="Dropdown" className="sample-test-class" />,
    );
    const dropdown = getByTestId('dropdown-test-id') as HTMLInputElement;
    expect(dropdown).toHaveClass('sample-test-class');
  });
  test('dropdown statue = VALID', () => {
    const { container } = render(
      <DropDown name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.VALID} />,
    );
    expect(container.childNodes[0]).toHaveClass(`dropdown-validated-${DropDownValidations.VALID}`);
  });

  test('dropdown statue = INVALID', () => {
    const { container } = render(
      <DropDown name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.INVALID} />,
    );
    expect(container.childNodes[0]).toHaveClass(`dropdown-validated-${DropDownValidations.INVALID}`);
  });

  test('dropdown component with dropdownLabel', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <DropDown name="dropdown-name" placeholder="Dropdown" dropdownLabel="Field Label" onClick={onClick} />,
    );
    const dropdownLabel = getByTestId('dropdown-label-test-id');
    fireEvent.click(dropdownLabel);
    expect(dropdownLabel).toHaveClass('dropdown-label');
  });

  test('dropdown component with Message', () => {
    const { getByTestId } = render(<DropDown name="dropdown-name" placeholder="Dropdown" message="Message" />);
    const dropdownMessage = getByTestId('dropdown-message-test-id');
    expect(dropdownMessage).toHaveTextContent('Message');
  });
  test('dropdown component if data passed', () => {
    const onSelect = jest.fn();
    const { getByTestId, getAllByTestId } = render(
      <DropDown
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          { id: 1, name: 'item 1' },
          { id: 2, name: 'item 2' },
          { id: 3, name: 'item 3' },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
        value="item 4"
        onChange={() => null}
      />,
    );
    const dropdownInput = getByTestId('dropdown-test-id');
    fireEvent.click(dropdownInput);
    const liElement = getAllByTestId('dropdown-result-test-id');
    expect(liElement[0]).toBeInTheDocument();
  });

  test('dropdown component if data passed and item is disabled', () => {
    const onSelect = jest.fn();
    const { getAllByTestId } = render(
      <DropDown
        testId="dropMLP2"
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          {
            name: 'item 1',
            isDisabled: true,
          },
          {
            name: 'item 2',
          },
          {
            name: 'item 3',
          },
        ]}
        configData={{
          label: 'name',
          disableItemKey: 'isDisabled',
          onSelect: onSelect,
        }}
      />,
    );

    const [dropdown] = getAllByTestId('dropMLP2-result-test-id');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown.className.trim()).toBe('disabled');
    fireEvent.click(dropdown);
    expect(dropdown).toBeInTheDocument();
    fireEvent.keyPress(dropdown, { key: 'enter', keyCode: 13 });
    expect(dropdown).toBeInTheDocument();
  });
  test('dropdown component if data passed with input value', () => {
    const onSelect = jest.fn();
    const { getByTestId, getAllByTestId } = render(
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
      />,
    );
    const dropdownInput = getByTestId('dropdown-test-id');
    fireEvent.click(dropdownInput);
    const liElement = getAllByTestId('dropdown-result-test-id');
    expect(liElement.length).toBe(1);
  });
  test('dropdown component if data passed with input value and disabledFilter', () => {
    const onSelect = jest.fn();
    const { getByTestId, getAllByTestId } = render(
      <DropDown
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          { id: 1, name: 'item 1' },
          { id: 2, name: 'item 2' },
          { id: 3, name: 'item 3' },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
        disabledFilter
        value="item 2"
        onChange={() => null}
      />,
    );
    const dropdownInput = getByTestId('dropdown-test-id');
    fireEvent.click(dropdownInput);
    const liElement = getAllByTestId('dropdown-result-test-id');
    expect(liElement.length).toBe(3);
  });
  test('dropdown component if li is clicked', () => {
    const onSelect = jest.fn();
    const { getAllByTestId, getByTestId } = render(
      <DropDown
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          {
            name: 'item 1',
          },
          {
            name: 'item 2',
          },
          {
            name: 'item 3',
          },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );
    const dropdownInput = getByTestId('dropdown-test-id');
    fireEvent.click(dropdownInput);
    const dropdownlist = getAllByTestId('dropdown-result-test-id');
    fireEvent.click(dropdownlist[0]);
    fireEvent.keyDown(dropdownlist[0], {
      key: 'Enter',
      code: 13,
      charCode: 13,
    });
    expect(onSelect).toHaveBeenCalledTimes(2);
  });
  test('dropdown component if clicked outside', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <>
        <div data-testid="outside-element-test-id">test div</div>
        <DropDown
          name="dropdown-name"
          placeholder="Dropdown"
          data={[
            {
              name: 'item 1',
            },
            {
              name: 'item 2',
            },
            {
              name: 'item 3',
            },
          ]}
          configData={{ label: 'name', onSelect: onSelect }}
        />
      </>,
    );

    const dropdownInput = getByTestId('dropdown-test-id');
    fireEvent.focus(dropdownInput);

    const outsideElement = getByTestId('outside-element-test-id');
    fireEvent.click(outsideElement);
  });
  test('dropdown component if icon clicked', () => {
    const onSelect = jest.fn();
    const { getAllByTestId, getByTestId } = render(
      <DropDown
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          {
            name: 'item 1',
          },
          {
            name: 'item 2',
          },
          {
            name: 'item 3',
          },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );

    const dropdownIcon = getByTestId('dropdown-icon-test-id');
    fireEvent.click(dropdownIcon);
    fireEvent.keyDown(dropdownIcon, { key: 'Enter', code: 13, charCode: 13 });
    const dropdownlist = getAllByTestId('dropdown-result-test-id');
    fireEvent.click(dropdownlist[0]);
    expect(dropdownlist[0]).toBeInTheDocument();
  });
});
