import * as React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { Theme, IconStyle } from '../../';
import Notification from './Notification';
const { SUCCESS, WARNING, ERROR, ACTION, BLACK } = Theme;

const message = 'Some Test Message';
const description = 'Some Details Test Message';

describe('Notification Component', () => {
  afterEach(cleanup);
  const commonArgs = {
    message: message,
    hasBoldText: true,
    hasNotificationIcon: true,
    textLink: { text: '', href: '' },
    // className: '',
    description: '',
  };
  test('Notification mounted', () => {
    const { container } = render(<Notification {...commonArgs} theme={Theme.SUCCESS} />);
    expect(container.firstChild).toHaveClass('notification-container');
  });
  test('Notification with message and descriptions', () => {
    const { container, getByText } = render(
      <Notification {...commonArgs} theme={Theme.SUCCESS} description={description} />,
    );
    const defaultDetailsnotification = getByText(description);
    expect(defaultDetailsnotification).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('detailed-notififation');
  });
  test('Notification with hasNotificationIcon false', () => {
    const { container } = render(
      <Notification {...commonArgs} theme={Theme.SUCCESS} message={message} hasNotificationIcon={false} />,
    );
    expect(container.firstChild?.firstChild).toHaveClass('sub-continer');
  });
  test('Notification with more than 5 z-index', () => {
    const { container } = render(
      <Notification {...commonArgs} theme={Theme.SUCCESS} zIndex={6} message={message} hasNotificationIcon={false} />,
    );
    expect(container.firstChild?.firstChild).toHaveClass('sub-continer');
  });
  test('Notification with text-link', () => {
    const { container } = render(
      <Notification
        {...commonArgs}
        theme={Theme.SUCCESS}
        textLink={{ text: 'TextLink ', href: 'playground-notification' }}
        message={message}
        hasNotificationIcon={false}
      />,
    );
    expect(container.firstChild?.firstChild).toHaveClass('sub-continer');
  });
  test('Notification with custom icon', () => {
    const { container } = render(
      <Notification
        {...commonArgs}
        theme={Theme.SUCCESS}
        customIcon={{ iconName: 'spinner', iconStyle: IconStyle.REGULAR }}
        message={message}
        hasNotificationIcon={false}
      />,
    );
    expect(container.getElementsByClassName('fa-spinner')).toBeDefined();
  });
  test('Notification with hasBoldText false', () => {
    render(<Notification {...commonArgs} theme={Theme.SUCCESS} message={message} hasBoldText={false} />);
    const element = screen.getByTestId('notification-info-testid');
    expect(element.childNodes[0]).toHaveClass('no-bold-text');
  });
  test('Notification with onCloseClick', () => {
    const onCloseClick = jest.fn();
    const { getByTestId } = render(
      <Notification {...commonArgs} theme={Theme.SUCCESS} message={message} onCloseClick={onCloseClick} />,
    );
    const element = getByTestId('notification-close-icon');
    fireEvent.click(element);
    expect(onCloseClick).toHaveBeenCalledTimes(1);
  });
  test('Notification with Theme SUCCESS', () => {
    //by default SUCCESS is passed
    const { container } = render(<Notification {...commonArgs} theme={Theme.SUCCESS} message={message} />);
    expect(container.firstChild).toHaveClass(SUCCESS);
  });
  test('Notification with Theme WARNING', () => {
    const { container } = render(<Notification {...commonArgs} message={message} theme={WARNING} />);
    expect(container.firstChild).toHaveClass(WARNING);
  });
  test('Notification with Theme ERROR', () => {
    const { container } = render(<Notification {...commonArgs} message={message} theme={ERROR} />);
    expect(container.firstChild).toHaveClass(ERROR);
  });
  test('Notification with Theme ACTION', () => {
    const { container } = render(<Notification {...commonArgs} message={message} theme={ACTION} />);
    expect(container.firstChild).toHaveClass(ACTION);
  });
  test('Notification with Theme BLACK', () => {
    const { container } = render(<Notification {...commonArgs} message={message} theme={BLACK} />);
    expect(container.firstChild).toHaveClass(BLACK);
  });
});
