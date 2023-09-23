import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Given the Header component", () => {
  describe("When it's been rendered", () => {
    test("Then it should show the pokemon logo image", () => {
      const expectedImageSrc = "img/pokemon-logo.svg";

      render(<Header />);
      const image = screen.getByRole("img") as HTMLImageElement;

      expect(image.src).toContain(expectedImageSrc);
    });
  });
});
