import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Panel from './Panel';
import type { PanelProps } from './types/propTypes';

const mockBackButton = jest.fn();
const mockCustomButton = jest.fn();
const mockPrimaryButton = jest.fn();
const mockSecondaryButton = jest.fn();

const defaultProps: PanelProps = {
  header: {
    title: 'Panel Title',
    showIcon: true,
    iconName: 'circle-exclamation',
    backButtonOnClick: mockBackButton,
    customAction: {
      label: 'Delete',
      onClick: mockCustomButton,
      visible: true,
    },
  },
  children: <div style={{ height: '900px', backgroundColor: '#f0f0f0' }}>Content</div>,
  footer: {
    visible: true,
    primaryButton: {
      label: 'Save',
      onClick: mockPrimaryButton,
      visible: true,
    },
    secondaryButton: {
      label: 'Cancel',
      onClick: mockSecondaryButton,
      visible: true,
    },
  },
};

describe('Component Panel', () => {
  test('Render Panel', () => {
    render(<Panel {...defaultProps} />);

    expect(screen.getByTestId('panel-container')).toBeInTheDocument();
    expect(screen.getByTestId('panel-header')).toBeInTheDocument();
    expect(screen.getByTestId('panel-header-title')).toBeInTheDocument();
    expect(screen.getByTestId('panel-header-back')).toBeInTheDocument();
    expect(screen.getByTestId('panel-header-icon')).toBeInTheDocument();
    expect(screen.getByTestId('panel-content')).toBeInTheDocument();
    expect(screen.getByTestId('panel-footer')).toBeInTheDocument();
    expect(screen.getByTestId('panel-footer-primary-button')).toBeInTheDocument();
    expect(screen.getByTestId('panel-footer-secondary-button')).toBeInTheDocument();

    const backButton = screen.getByTestId('panel-header-back');
    fireEvent.click(backButton);
    expect(mockBackButton).toHaveBeenCalled();

    const customButton = screen.getByTestId('panel-header-custom-button');
    fireEvent.click(customButton);
    expect(mockCustomButton).toHaveBeenCalled();

    const primaryButton = screen.getByTestId('panel-footer-primary-button');
    fireEvent.click(primaryButton);
    expect(mockPrimaryButton).toHaveBeenCalled();

    const secondaryButton = screen.getByTestId('panel-footer-secondary-button');
    fireEvent.click(secondaryButton);
    expect(mockSecondaryButton).toHaveBeenCalled();
  });

  test('Test optional settings - flag on/off', () => {
    const props: PanelProps = {
      ...defaultProps,
      header: {
        ...defaultProps.header,
        showIcon: false,
        customAction: {
          visible: false,
        },
      },
      footer: {
        visible: false,
      },
    };
    render(<Panel {...props} />);

    expect(screen.queryByTestId('panel-header-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('panel-header-custom-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('panel-footer')).not.toBeInTheDocument();
  });

  test('Test optional settings - property not provided', () => {
    const props: PanelProps = {
      ...defaultProps,
      header: {
        title: 't',
      },
    };
    render(<Panel {...props} />);

    expect(screen.queryByTestId('panel-header-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('panel-header-custom')).not.toBeInTheDocument();
  });

  test('Test optional settings - custom button disabled', () => {
    const props: PanelProps = {
      header: {
        ...defaultProps.header,
        customAction: {
          ...defaultProps.header.customAction,
          disabled: true,
        },
      },
      children: defaultProps.children,
    };
    render(<Panel {...props} />);

    expect(screen.queryByTestId('panel-header-custom-button')).toHaveClass('disabled');
  });
});
