import { Theme } from '../components';

/**
 * @description Filter theme values that are not supported by the child component(Icon)
 * @param theme Incoming Prop
 * @returns theme
 */
function filterIconTheme(theme?: Theme) {
  if (theme === Theme.ACTION) {
    return Theme.WHITE;
  }
  return theme;
}

/**
 * @description Filter theme values that are not supported by the child component(Text Link)
 * @param theme Incoming Prop
 * @returns theme
 */
function filterTextLinkTheme(theme?: Theme) {
  if (theme === Theme.GRAY || theme === Theme.WHITE) {
    return Theme.BLACK;
  }
  return theme;
}

/**
 * @description Filter theme values that are not supported by the child component(Tab Icon)
 * @param theme Incoming Prop
 * @returns theme
 */
function filterTabIconTheme(theme: Theme) {
  return theme === Theme.WHITE ||
    theme === Theme.SUCCESS ||
    theme === Theme.ERROR ||
    theme === Theme.WARNING ||
    theme === Theme.ACTION ||
    theme === Theme.GRAY
    ? Theme.BLACK
    : theme;
}

export { filterIconTheme, filterTextLinkTheme, filterTabIconTheme };
