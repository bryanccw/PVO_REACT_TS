import { ReactNode } from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Notification from '../Notification/Notification/Notification';
import { Drawer } from '../';
import ToastProvider, { useToast } from './ToastProvider';
type PropType = {
  timeout?: number;
  children?: ReactNode;
};
describe('ToastProvider Test Case', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Use fake timers to control time
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Run any pending timers to ensure cleanup
    jest.useRealTimers(); // Restore real timers for subsequent tests
  });
  afterEach(cleanup);
  const Comp = (props: PropType) => {
    const { addToast, deleteToast } = useToast();
    return (
      <div style={{ height: 100, width: 300 }} data-testid="toast-test-id">
        <button
          data-testid="add-toast"
          onClick={() =>
            addToast({
              id: '1',
              content: (
                <Notification
                  message={'The bundle price has been updated'}
                  onCloseClick={() => deleteToast('TOAST_ID')}
                />
              ),
              timeout: props.timeout,
            })
          }
        ></button>
      </div>
    );
  };
  const WrapperComp = (props: PropType) => (
    <ToastProvider>
      {props?.children}
      <Comp {...props} />
    </ToastProvider>
  );
  test('ToastProvider is mounted with component', () => {
    const { getByTestId } = render(<WrapperComp />);
    const toast = getByTestId('toast-test-id');
    expect(toast).toBeInTheDocument;
  });
  test('ToastProvider is mounted with Drawer', () => {
    const { getByTestId } = render(
      <WrapperComp>
        <Drawer>
          <div>Drawer Body</div>
        </Drawer>
      </WrapperComp>,
    );
    const toast = getByTestId('toast-test-id');
    expect(toast).toBeInTheDocument;
  });
  test('ToastProvider is mounted with component', () => {
    const { getByTestId } = render(<WrapperComp />);
    const toast = getByTestId('toast-test-id');
    expect(toast).toBeInTheDocument;
  });
  test('ToastProvider is with timeout', () => {
    const { getByTestId } = render(<WrapperComp timeout={1000} />);
    const toast = getByTestId('toast-result-testid');
    expect(toast).toBeInTheDocument;
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(toast).not.toBeInTheDocument;
  });
  test('Notification with onCloseClick', () => {
    const deleteToast = jest.fn();
    const { getByTestId } = render(<WrapperComp />);
    const addElement = getByTestId('add-toast');
    fireEvent.click(addElement);
    const element = getByTestId('notification-close-icon');
    fireEvent.click(element);
    expect(deleteToast).toHaveBeenCalledTimes(0);
  });
});
