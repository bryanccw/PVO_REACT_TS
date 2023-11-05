import { cleanup } from '@testing-library/react';
import attendeeService from '../attendeeService';

describe('Attendee Service', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('shipping details with empty url .', () => {
    return attendeeService.getAttendees().then(res => {
      expect(res).toBeTruthy();
    });
  });
});
