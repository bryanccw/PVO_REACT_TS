import { render, cleanup, fireEvent } from '@testing-library/react';
import { BreakpointProvider, ViewPortSizes, IconStyle } from '../';
import NotificationBar from './NotificationBar';

describe('NotificationBar Component Test Cases', () => {
  afterEach(cleanup);
  test('NotificationBar Component is mounted', () => {
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar iconClickHandler={() => 0} message="test message" />
      </BreakpointProvider>,
    );
    expect(getByTestId('notification-message').innerHTML).toBe('test message');
  });
  test('NotificationBar Component when screen size is tablet', () => {
    global.innerWidth = ViewPortSizes.MEDIUM;
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar iconClickHandler={() => 0} message="test message with size MD" />
      </BreakpointProvider>,
    );
    expect(getByTestId('notification-message').innerHTML).toBe('test message with size MD');
  });
  test('NotificationBar Component when screen size is High resolution', () => {
    global.innerWidth = ViewPortSizes.XLARGE;
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar iconClickHandler={() => 0} message="test message with size XLARGE" />
      </BreakpointProvider>,
    );
    expect(getByTestId('notification-message').innerHTML).toBe('test message with size XLARGE...');
  });
  test('NotificationBar Component has a close icon by default', () => {
    const iconClickHandler = jest.fn();
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar iconClickHandler={iconClickHandler} message="test message" />
      </BreakpointProvider>,
    );
    const icon = getByTestId('notification-icon');
    fireEvent.click(icon);
    expect(iconClickHandler).toHaveBeenCalled();
  });
  test('NotificationBar Component can render a link text', () => {
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar
          iconClickHandler={() => 0}
          message="test message"
          linkText={'TEST LINK'}
          linkRedirect={'http://www.google.com'}
        />
      </BreakpointProvider>,
    );
    expect(getByTestId('link-text')).toBeInTheDocument();
  });
  test('NotificationBar Component renders a custom icon', () => {
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar iconClickHandler={() => 0} message="test message" icon={'chain'} iconStyle={IconStyle.SOLID} />
      </BreakpointProvider>,
    );
    expect(getByTestId('notification-icon')).toBeInTheDocument();
  });
  test('NotificationBar Component displays a view more button', () => {
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar
          iconClickHandler={() => 0}
          message="test message is a test message to verify the view more button. test message is a test message to verify the view more button.test message is a test message to verify the view more button."
        />
      </BreakpointProvider>,
    );
    expect(getByTestId('view-more')).toBeInTheDocument();
  });
  test('NotificationBar Component displays full message when view more button is clicked', () => {
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar
          iconClickHandler={() => 0}
          message="test message is a test message to verify the view more button. test message is a test message to verify the view more button.test message is a test message to verify the view more button."
        />
      </BreakpointProvider>,
    );
    fireEvent(
      getByTestId('view-more'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(getByTestId('notification-message').innerHTML).toBe(
      'test message is a test message to verify the view more button. test message is a test message to verify the view more button.test message is a test message to verify the view more button.',
    );
  });
  test('NotificationBar Component displays a action button', () => {
    const { getByTestId } = render(
      <BreakpointProvider>
        <NotificationBar ctaLabel="Reload Page" message="Something went wrong try again!" ctaClickHandler={() => ''} />
      </BreakpointProvider>,
    );
    expect(getByTestId('action-link')).toBeInTheDocument();
  });
});
