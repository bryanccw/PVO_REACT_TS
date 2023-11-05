import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Theme } from '../../../types/enums';
import BubbleNotification from './BubbleNotification';
const { SUCCESS, WARNING } = Theme;

const message = 'Some Test Message';

describe('Bubble Notification Component', () => {
  afterEach(cleanup);
  const commonArgs = {
    className: '',
    message: message,
    messageCount: 0,
  };

  test('Bubble Notification mounted', () => {
    const { container } = render(<BubbleNotification {...commonArgs} theme={Theme.SUCCESS} />);
    expect(container.firstChild).toHaveClass('bubble-container');
  });
  test('Bubble Notification with messageCount', () => {
    const { getByTestId } = render(<BubbleNotification {...commonArgs} theme={Theme.SUCCESS} messageCount={3} />);
    const element = getByTestId('bubble-test-id');
    expect(element.childNodes[0].textContent).toBe('3');
  });
  test('Bubble Notification with messageCount and message', () => {
    const { getByTestId } = render(
      <BubbleNotification {...commonArgs} theme={Theme.SUCCESS} messageCount={3} message={message} />,
    );
    const element = getByTestId('bubble-test-id');
    expect(element.childNodes[1].textContent).toBe(message);
  });
  test('Bubble Notification with Custom ClassName', () => {
    const { getByTestId } = render(
      <BubbleNotification {...commonArgs} theme={Theme.SUCCESS} messageCount={3} className="test-className" />,
    );
    const element = getByTestId('bubble-test-id');
    expect(element).toHaveClass('test-className');
  });
  test('Bubble Notification with Theme SUCCESS', () => {
    //by default SUCCESS is passed
    const { getByTestId } = render(<BubbleNotification {...commonArgs} theme={Theme.SUCCESS} messageCount={3} />);
    const element = getByTestId('bubble-test-id');
    expect(element).toHaveClass(SUCCESS);
  });
  test('Bubble Notification with Theme WARNING', () => {
    const { getByTestId } = render(<BubbleNotification {...commonArgs} messageCount={3} theme={WARNING} />);
    const element = getByTestId('bubble-test-id');
    expect(element).toHaveClass(WARNING);
  });
  test('Bubble Notification with Theme ERROR', () => {
    const { getByTestId } = render(<BubbleNotification {...commonArgs} messageCount={3} theme={Theme.ERROR} />);
    const element = getByTestId('bubble-test-id');
    expect(element).toHaveClass(Theme.ERROR);
  });
  test('Bubble Notification with Theme ACTION', () => {
    const { getByTestId } = render(<BubbleNotification {...commonArgs} messageCount={3} theme={Theme.ACTION} />);
    const element = getByTestId('bubble-test-id');
    expect(element).toHaveClass(Theme.ACTION);
  });
});
