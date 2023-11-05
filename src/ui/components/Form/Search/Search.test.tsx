import { render, fireEvent, cleanup } from '@testing-library/react';
import { MLPVersion, Theme } from '../../';
import Search from './Search';

const defaultProps = {
  value: 'test data',
  onChange: () => null,
  onSearch: () => null,
};
describe('Search Component Test Cases', () => {
  afterEach(cleanup);
  test('Search Component mounted', () => {
    const { getByTestId } = render(<Search {...defaultProps} />);
    const search = getByTestId('search-test-id');
    expect(search).toBeInTheDocument();
  });
  test('Search Component with label, labelInfo and message', () => {
    const { getByTestId } = render(
      <Search {...defaultProps} label="Test" labelInfo="test" message="message" required />,
    );
    const search = getByTestId('search-test-id');
    expect(search).toBeInTheDocument();
    expect(search).toBeRequired();
  });
  test('Search Component with theme ERROR', () => {
    const { getByTestId } = render(<Search {...defaultProps} theme={Theme.ERROR} />);
    const search = getByTestId('search-test-id');
    expect(search).toBeInTheDocument();
  });

  test('Search component has value and onChange event', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Search {...defaultProps} onChange={onChange} />);
    const search = getByTestId('search-test-id');
    fireEvent.focus(search);
    fireEvent.change(search, {
      target: { value: 'search content' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('Search component if value and placeholder passed', () => {
    render(<Search {...defaultProps} value="" placeholder="your search" />);
  });
  test('Search component if data passed', () => {
    const onSelect = jest.fn();
    render(
      <Search
        {...defaultProps}
        data={[
          {
            name: 'item 1',
            id: 1,
          },
          {
            name: 'item 2',
            id: 2,
          },
          {
            name: 'item 3',
            id: 3,
          },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );
  });
  test('Search component if disabled', () => {
    const { getByTestId } = render(<Search {...defaultProps} disabled />);
    const search = getByTestId('search-test-id');
    expect(search).toBeDisabled;
  });
  test('Search component has value and onClear event', () => {
    const onClear = jest.fn();
    const { getByTestId } = render(<Search {...defaultProps} onClear={onClear} />);
    const clear = getByTestId('clear-icon-test-id');
    fireEvent.click(clear);
    expect(onClear).toHaveBeenCalledTimes(1);
  });
  test('Search component if onSearch passed with keydown', () => {
    const onSearch = jest.fn();
    const { getByTestId } = render(<Search {...defaultProps} onSearch={onSearch} />);
    const search = getByTestId('search-test-id');
    fireEvent.keyDown(search, { key: 'Enter', code: 13, charCode: 13 });
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
  test('Search component with search results', () => {
    const onSearch = jest.fn();
    const onSelect = jest.fn();

    const { getByTestId, getAllByTestId } = render(
      <Search
        {...defaultProps}
        onSearch={onSearch}
        data={[
          {
            name: 'item 1',
            id: 1,
          },
          {
            name: 'item 2',
            id: 2,
          },
          {
            name: 'item 3',
            id: 3,
          },
        ]}
        configData={{ label: 'name', onSelect: onSelect }}
      />,
    );
    const search = getByTestId('search-test-id');
    fireEvent.keyDown(search, { key: 'Enter', code: 13, charCode: 13 });
    expect(onSearch).toHaveBeenCalledTimes(1);

    const searchResult = getAllByTestId('search-result-testid');
    fireEvent.keyDown(searchResult[0], {
      key: 'Enter',
      code: 13,
      charCode: 13,
    });
    fireEvent.click(searchResult[0], { key: 'Enter', code: 13, charCode: 13 });
    expect(onSelect).toHaveBeenCalledTimes(2);
  });
  test('Search component, MLP2 - searchBar variant test', () => {
    const { container, getByTestId } = render(<Search {...defaultProps} mlpVersion={MLPVersion.TWO} />);
    expect(container.querySelector('.search-mlp2')).toBeInTheDocument();
    // Magnify-glass icon should present in left
    expect(getByTestId('search-mlp2-icon-test-left-id')).toBeInTheDocument();
  });
});
