import { InputHTMLAttributes } from 'react';
export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  max: number | string;
  min: number | string;
  value: string | ReadonlyArray<string> | number;
  step: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
