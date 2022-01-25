import { render } from "@testing-library/react-native";
import React from "react";
import HButton from "./HButton";

describe("HButton", () => {
  it("it should display the HButton", () => {
    const { getByTestId } = render(<HButton label="Example Button" onPress={() => console.log("button clicked")} />);

    const button = getByTestId("hButton");
    expect(button).toBeDefined();
  });
});
