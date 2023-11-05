import { ReactNode } from 'react';

export interface FieldWrapperPropsTypes {
  children?: ReactNode | ReactNode[];
  className?: string;
  errorMsg?: string;
}
