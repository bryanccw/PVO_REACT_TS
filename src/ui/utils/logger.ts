/* eslint-disable */
import type { DynamicObjectInterface } from '../../sdk/type';

class LoggerService {
  static log(...args: DynamicObjectInterface) {
    console.log(...args);
  }
}

export { LoggerService };
