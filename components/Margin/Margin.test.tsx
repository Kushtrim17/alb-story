import React from 'react';
import { render } from '@testing-library/react-native';
import Margin from './Margin';

describe("Margin", () => {
  it("should create a Margin component with default margin of 20, when no size is defined", () => {
    const { getByTestId } = render(<Margin />);
    const margin = getByTestId("margin");

    expect(margin).toBeDefined();
    expect(margin.props.style[1].margin).toBe(20);
  });

  it("should create a Margin component with margin of 30", () => {
    const { getByTestId } = render(<Margin size={30} />);
    const margin = getByTestId("margin");

    expect(margin).toBeDefined();
    expect(margin.props.style[1].margin).toBe(30);
  });
});
