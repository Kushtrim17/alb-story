import React from "react";
import { render } from "@testing-library/react-native";
import { renderHook, act } from "@testing-library/react-hooks";
import ScreenCaption from "./ScreenCaption";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

describe("ScreenCaption", () => {
  it("should create a ScreenCaption component", () => {
    const { getByText } = render(<ScreenCaption>My Screen Caption</ScreenCaption>);
    const caption = getByText("My Screen Caption");

    expect(caption).toBeDefined();
  });

  it("should create a ScreenCaption component with text which matches the theme color", () => {
    const { getByText } = render(<ScreenCaption>My Screen Caption</ScreenCaption>);
    const caption = getByText("My Screen Caption");
    expect(caption).toBeDefined();

    const { result } = renderHook(() => useColorScheme());
    const theme = result.current;

    const expectedColor = Colors[theme].text;
    expect(caption.props.style[0].color).toBe(expectedColor);
  });

  it("should create a ScreenCaption component that overrides the current theme color", () => {
    const { getByText } = render(<ScreenCaption variant="dark">My Screen Caption</ScreenCaption>);
    const caption = getByText("My Screen Caption");
    expect(caption).toBeDefined();

    const expectedColor = Colors["dark"].text;
    expect(caption.props.style[0].color).toBe(expectedColor);
  });
});
