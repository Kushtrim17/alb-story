import React from "react";
import { render } from "@testing-library/react-native";
import { renderHook, act } from "@testing-library/react-hooks";
import ScreenCaptionHighlight from "./ScreenCaptionHighlight";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

describe("ScreenCaptionHighlight", () => {
  it("should create a ScreenCaptionHighlight component", () => {
    const { getByText } = render(<ScreenCaptionHighlight>My Screen Caption</ScreenCaptionHighlight>);
    const caption = getByText("My Screen Caption");

    expect(caption).toBeDefined();
  });

  it("should create a ScreenCaptionHighlight component with text which matches the theme color", () => {
    const { getByText } = render(<ScreenCaptionHighlight>My Screen Caption</ScreenCaptionHighlight>);
    const caption = getByText("My Screen Caption");
    expect(caption).toBeDefined();

    const { result } = renderHook(() => useColorScheme());
    const theme = result.current;

    const expectedColor = Colors[theme].text;
    expect(caption.props.style[0].color).toBe(expectedColor);
  });

  it("should create a ScreenCaptionHighlight component that overrides the current theme color", () => {
    const { getByText } = render(<ScreenCaptionHighlight variant="dark">My Screen Caption</ScreenCaptionHighlight>);
    const caption = getByText("My Screen Caption");
    expect(caption).toBeDefined();

    const expectedColor = Colors["dark"].text;
    expect(caption.props.style[0].color).toBe(expectedColor);
  });
});
