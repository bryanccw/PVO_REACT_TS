import { Button, ButtonStyles, Theme, FAIcon, IconStyle } from '../';
import type { PanelProps } from './types/propTypes';
import styles from './Panel.module.scss';

const Panel = (props: PanelProps) => {
  const { header, footer, children } = props;

  const {
    title,
    showIcon = false,
    iconName,
    iconSize = 'fa-lg',
    showBackButton = true,
    backButtonOnClick,
    customAction,
  } = header;

  const {
    visible: customVisible = false,
    label: customLabel,
    disabled: customDisabled = false,
    onClick: customOnClick,
  } = customAction || {};
  const { primaryButton, secondaryButton, visible: footerVisible = true } = footer || {};

  const handleBackButton = (e: React.KeyboardEvent | React.MouseEvent | React.TouchEvent) => {
    backButtonOnClick && backButtonOnClick(e);
  };

  const customClickHandler = (e: React.KeyboardEvent | React.MouseEvent | React.TouchEvent) => {
    customOnClick && !customDisabled && customOnClick(e);
  };
  return (
    <div className={styles['panel-container']} data-testid="panel-container">
      <section className={styles['header']} data-testid="panel-header">
        {showBackButton && (
          <div
            className={styles['header-back']}
            onClick={handleBackButton}
            onKeyDown={handleBackButton}
            role="button"
            tabIndex={0}
            aria-label="Click to perform an action"
            data-testid="panel-header-back"
          >
            <FAIcon iconName="chevron-left" iconStyle={IconStyle.SOLID} className="fa-lg" />
          </div>
        )}
        <div className={styles['header-title']}>
          <div className={styles['text']} data-testid="panel-header-title">
            {title}
          </div>
          {showIcon && iconName && (
            <FAIcon
              iconName={iconName}
              theme={Theme.ORANGE}
              iconStyle={IconStyle.SOLID}
              className={iconSize}
              data-testid="panel-header-icon"
            />
          )}
        </div>
        {customVisible && customLabel && (
          <div className={styles['header-custom']} data-testid="panel-header-custom">
            <div
              className={`${styles['button']} ${styles[customDisabled ? 'disabled' : '']}`}
              onClick={customClickHandler}
              onKeyDown={customClickHandler}
              role="button"
              aria-label="Click to perform an action"
              tabIndex={0}
              data-testid="panel-header-custom-button"
            >
              {customLabel}
            </div>
          </div>
        )}
      </section>
      <section className={styles['content']} data-testid="panel-content">
        {children}
      </section>
      {footerVisible && (
        <section className={styles['footer']} data-testid="panel-footer">
          {secondaryButton?.visible && (
            <Button
              title={secondaryButton.label}
              onClick={secondaryButton.onClick}
              disabled={secondaryButton.disabled}
              buttonStyle={ButtonStyles.OUTLINE}
              data-testid="panel-footer-secondary-button"
            />
          )}
          {primaryButton?.visible && (
            <Button
              title={primaryButton.label}
              onClick={primaryButton.onClick}
              disabled={primaryButton.disabled}
              buttonStyle={ButtonStyles.SOLID}
              data-testid="panel-footer-primary-button"
            />
          )}
        </section>
      )}
    </div>
  );
};

export default Panel;
