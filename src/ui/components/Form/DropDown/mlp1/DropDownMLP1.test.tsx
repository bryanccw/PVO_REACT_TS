import { render, cleanup, fireEvent } from '@testing-library/react';
import { DropDownValidations } from '../types/enums';
import DropDownMLP1 from './DropDownMLP1';

describe('dropdown Component Test Cases', () => {
  afterEach(cleanup);
  test('dropdown Component mounted', () => {
    const { getByTestId } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" />);
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown component with value', () => {
    const { getByTestId } = render(
      <DropDownMLP1 name="dropdown-name" placeholder="Dropdown" value={'Dropdown Value'} />,
    );
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown  disable={true} ', () => {
    const { container } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" disabled />);
    expect(container.firstChild).toHaveClass('dropdown-container');
  });

  test('dropdown  classname ', () => {
    const { container } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" className="className" />);
    expect(container.firstChild).toHaveClass('dropdown-container');
  });

  test('dropdown  icon on disable={true}', () => {
    const { getByTestId } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" disabled={true} />);
    const dropdown = getByTestId('dropdown-icon-text-id');
    fireEvent.click(dropdown);
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown  disable={true}', () => {
    const { container } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" disabled={true} />);
    expect(container.firstChild).toHaveClass('disabled-container');
  });

  test('dropdown statue= DEFAULT', () => {
    const { container } = render(
      <DropDownMLP1 name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.DEFAULT} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });
  test('dropdown statue= DEFAULT and disabled={true}', () => {
    const { container } = render(
      <DropDownMLP1 name="dropdown-name" placeholder="Dropdown" disabled={true} status={DropDownValidations.DEFAULT} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });

  test('dropdown statue= VALID', () => {
    const { container } = render(
      <DropDownMLP1 name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.VALID} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });

  test('dropdown statue= VALID', () => {
    const { container } = render(
      <DropDownMLP1 name="dropdown-name" placeholder="Dropdown" status={DropDownValidations.INVALID} />,
    );
    expect(container.childNodes[0]).toHaveClass('dropdown-container');
  });

  test('dropdown component with dropdownLabel', () => {
    render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" dropdownLabel={'Field Label'} />);
  });

  test('dropdown component with Message', () => {
    render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" message={'Message'} />);
  });

  test('dropdown component if data passed is in Document and withClass `dropdown-container`', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <DropDownMLP1
        testId="dropMLP1"
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

    const dropdown = getByTestId('dropMLP1-ref-test-id');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown.className.trim()).toBe('dropdown-container');
  });

  test('dropdown component if data passed and item is disabled', () => {
    const onSelect = jest.fn();
    const { getAllByTestId } = render(
      <DropDownMLP1
        testId="dropMLP1"
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

    const [dropdown] = getAllByTestId('dropMLP1-li-element');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown.className.trim()).toBe('disabled');
    fireEvent.click(dropdown);
    expect(dropdown).toBeInTheDocument();
    fireEvent.keyPress(dropdown, { key: 'enter', keyCode: 13 });
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown component if disabled', () => {
    const { getByTestId } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" disabled />);
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeDisabled;
  });

  test('dropdown component if visible', () => {
    const { getByTestId } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" />);
    const dropdown = getByTestId('dropdown-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown component if onClick passed with click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<DropDownMLP1 name="dropdown-name" placeholder="Dropdown" onClick={onClick} />);
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
        <DropDownMLP1
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
    const dropdownlist = getAllByTestId('dropdown-li-element');
    fireEvent.keyDown(dropdownlist[0], { key: 'enter', keyCode: 13 });
    fireEvent.click(dropdownlist[0]);
    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  test('DropDownMLP1 component on onClick ', () => {
    const { getByTestId } = render(<DropDownMLP1 name="dropdown-name" placeholder={'DropDownMLP1'} />);
    const element = getByTestId('dropdown-test-id');
    fireEvent.keyDown(element, { key: 'Enter', code: 13, charCode: 13 });
    expect(element).toBeInTheDocument();
  });
  test('DropDownMLP1 component when drawer open ', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <DropDownMLP1
        name="dropdown-name"
        placeholder="Dropdown"
        data={[
          {
            name: 'item 1',
          },
          {
            name: 'item 2',
          },
        ]}
        status={DropDownValidations.DEFAULT}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );
    const element = getByTestId('dropdown-section-test-id');
    fireEvent.mouseDown(element);
    const elementResult = getByTestId('dropdown-results-test-id');
    expect(elementResult).toHaveClass('open-dropdown-result');
  });
});
