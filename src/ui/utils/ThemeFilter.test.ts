import { Theme } from '../../types/enums';
import { filterIconTheme, filterTextLinkTheme } from './ThemeFilter';

describe('Theme Filter Methods', () => {
  it('validate filterIconTheme with theme `ACTION`', () => {
    expect(filterIconTheme(Theme.ACTION)).toBe(Theme.WHITE);
  });

  it('validate filterIconTheme with theme `PURPLE`', () => {
    expect(filterIconTheme(Theme.PURPLE)).toBe(Theme.PURPLE);
  });

  it('validate filterTextLinkTheme with theme `GRAY`', () => {
    expect(filterTextLinkTheme(Theme.GRAY)).toBe(Theme.BLACK);
  });

  it('validate filterTextLinkTheme with theme `WHITE`', () => {
    expect(filterTextLinkTheme(Theme.WHITE)).toBe(Theme.BLACK);
  });
  it('validate filterTextLinkTheme with theme `PURPLE`', () => {
    expect(filterTextLinkTheme(Theme.PURPLE)).toBe(Theme.PURPLE);
  });
});
