import {
  ReactNode,
  useRef,
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
  MutableRefObject,
} from 'react';
import { Toast } from './types/propsType';
import styles from './ToastProvider.module.scss';

type Props = {
  children?: ReactNode;
};

const ToastContext = createContext<{
  addToast: (_toast: Toast, _autoClose?: boolean) => void;
  deleteToast: (_index: string) => void;
}>({
  addToast: (_toast: Toast, _autoClose?: boolean) => null,
  deleteToast: (_index: string) => null,
});

const ToastProvider = ({ children }: Props): JSX.Element => {
  const [toasts, setToasts] = useState<Array<Toast>>([]);
  const notificationRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const domDoc = document?.getElementById('nextgen-drawer-component');
    if (domDoc) {
      const notificationComponent = notificationRef.current;
      notificationComponent.style.bottom = `${domDoc.offsetHeight + 16}px`;
    }
  }, []);

  const addToast = useCallback(
    function (toast: Toast, autoClose = true) {
      setToasts(toasts => [...toasts, toast]);
      if (autoClose) {
        setTimeout(() => {
          setToasts(toasts => toasts.slice(1));
        }, 3050);
      }
    },
    [setToasts],
  );

  const deleteToast = useCallback(
    function (id: string) {
      setToasts(toasts => {
        const prevToasts = toasts;
        const index = prevToasts.findIndex(toast => toast.id === id);
        if (index > -1) {
          prevToasts.splice(index, 1);
        }
        return [...prevToasts];
      });
    },
    [setToasts],
  );

  return (
    <>
      <ToastContext.Provider value={{ addToast, deleteToast }}>
        <>{children}</>
        <div
          className={styles['notifications-container']}
          ref={notificationRef}
          data-testid="toast-result-testid"
          // TBD NEED TO CONNECT WITH GCC AND CONFIRM ABOUT POSITION OF TOAST
          // style={toasts[0]?.topPosition ? { top: toasts[0].topPosition } : {}}
        >
          {toasts.map(toast => (
            <div key={toast.id} className={styles['toast-notifcation-wrapper']}>
              {toast.content}
            </div>
          ))}
        </div>
      </ToastContext.Provider>
    </>
  );
};

const useToast = () => {
  const { addToast, deleteToast } = useContext<{
    addToast: (_toast: Toast, _autoClose?: boolean) => void;
    deleteToast: (_index: string) => void;
  }>(ToastContext);
  return { addToast, deleteToast };
};

export { useToast };
export default ToastProvider;
