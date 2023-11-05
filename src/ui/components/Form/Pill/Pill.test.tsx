import * as React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Theme, IconStyle } from '../../';
import Pill, { PillStyle, PillType } from './Pill';

describe('Pills Button', () => {
  afterEach(cleanup);
  it('should create a pills button with title.', () => {
    render(<Pill title="Vanilla" />);
    const pillButtonElement = screen.getByRole('button');
    expect(pillButtonElement).toHaveTextContent('Vanilla');
  });

  it('disabled Pill button', () => {
    render(<Pill title="Vanilla" disabled={true} />);
    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeDisabled();
  });
  it('chip Pill button.', () => {
    const { container } = render(<Pill title="Vanilla" pillStyle={PillStyle.CHIP} />);
    expect(container.childNodes[0].childNodes[0]).toHaveClass('chip');
  });
  it('chip Pill button with right icon.', () => {
    const { container } = render(
      <Pill title="Vanilla" pillStyle={PillStyle.CHIP} rightIcon={{ iconName: 'circle-xmark' }} />,
    );
    expect(container.childNodes[0].childNodes[0]).toHaveClass('chip');
  });
  it('chip Pill button with right icon and solid chip.', () => {
    const { container } = render(
      <Pill
        title="Vanilla"
        pillStyle={PillStyle.CHIP}
        pillType={PillType.SOLID}
        rightIcon={{ iconName: 'circle-xmark' }}
      />,
    );
    expect(container.childNodes[0].childNodes[0]).toHaveClass('chip');
  });
  it('chip Pill button with right icon white theme.', () => {
    const { container } = render(
      <Pill title="Vanilla" pillStyle={PillStyle.CHIP} rightIcon={{ iconName: 'circle-xmark' }} theme={Theme.WHITE} />,
    );
    expect(container.childNodes[0].childNodes[0]).toHaveClass('chip');
  });
  it('selected Pill button', () => {
    const { container } = render(<Pill title="Vanilla" selected={true} />);
    expect(container.childNodes[0]).toHaveClass('pill-selected');
  });
  it('disabled  and selected Pill button', () => {
    const { container } = render(<Pill title="Vanilla" disabled={true} selected={true} />);
    expect(container.childNodes[0]).toHaveClass('pill-selected');
  });
  it('swatch Pill button', () => {
    const { getByTestId } = render(<Pill colorCode="#9C5457" />);
    const element = getByTestId('swatch-pill-test-id');
    expect(element).toBeInTheDocument();
  });
  it('empty Pill button', () => {
    const { getByTestId } = render(<Pill title="" colorCode="" imgSrc="" />);
    const element = getByTestId('empty-pill-test-id');
    expect(element).toBeInTheDocument();
  });

  it('empty Pill button', () => {
    const { getByTestId } = render(<Pill title="" colorCode="" imgSrc="" disabled={true} selected={true} />);
    const element = getByTestId('empty-pill-test-id');
    expect(element).toBeInTheDocument();
  });
  it('Disabled swatch Pill button', () => {
    render(<Pill colorCode="#9C5457" disabled={true} />);
    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeDisabled();
  });
  it('Selected swatch Pill button', () => {
    const { container } = render(<Pill colorCode="#9C5457" selected={true} />);
    expect(container.childNodes[0]).toHaveClass('pill-selected');
  });
  it('Selected and disabled  swatch Pill button', () => {
    const { container } = render(<Pill colorCode="#9C5457" selected={true} disabled={true} />);
    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeDisabled();
    expect(container.childNodes[0]).toHaveClass('pill-selected');
  });
  it('Image Pill button', () => {
    const { getByTestId } = render(
      <Pill imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" />,
    );
    const element = getByTestId('image-pill-test-id');
    expect(element).toBeInTheDocument();
  });
  it('selected Image Pill button', () => {
    const { container } = render(
      <Pill
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
        selected={true}
      />,
    );
    expect(container.childNodes[0]).toHaveClass('pill-selected');
  });

  it('onPillClick event on pill ', () => {
    const mockCloseCallback = jest.fn();
    render(<Pill title="Vanilla" onPillClick={mockCloseCallback} />);
    const button = screen.getByTestId('pill-test-id');
    fireEvent.click(button);
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });
  it('onPillClick event on Swatch pill ', () => {
    const mockCloseCallback = jest.fn();
    render(<Pill colorCode="#9C5457" onPillClick={mockCloseCallback} />);
    const button = screen.getByTestId('swatch-pill-test-id');
    fireEvent.click(button);
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });
  it('onPillClick event on empty pill ', () => {
    const mockCloseCallback = jest.fn();
    render(<Pill title="" colorCode="" imgSrc="" onPillClick={mockCloseCallback} />);
    const button = screen.getByTestId('empty-pill-test-id');
    fireEvent.click(button);
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });
  it('onPillClick event on Image pill ', () => {
    const mockCloseCallback = jest.fn();
    render(
      <Pill
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
        onPillClick={mockCloseCallback}
      />,
    );
    const button = screen.getByTestId('image-pill-test-id');
    fireEvent.click(button);
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });

  it('should create a pills button with leftIcon and closeButton', () => {
    const { container } = render(
      <Pill title="My Pills Button" icon={{ iconName: 'calendar', iconStyle: IconStyle.SOLID }} />,
    );
    const svgLeftElement = container.querySelector('.fa-calendar');
    expect(svgLeftElement).toBeInTheDocument();
  });
});
