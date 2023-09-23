import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

const pokeData = {
  name: "Pikachu",
  image: "www.pokeimages.com/pikachu.png",
};

describe("Given a Card component", () => {
  beforeEach(() =>
    render(<Card name={pokeData.name} image={pokeData.image} />)
  );

  describe("When it's been rendered receiving a pokemon named Pikachu", () => {
    test("Then it should show the name Pikachu inside an 'h3' heading", () => {
      const pokeName = screen.getByRole("heading", {
        name: `${pokeData.name}`,
        level: 3,
      });

      expect(pokeName).toBeInTheDocument();
    });
  });

  describe("When it's been rendered receiving the url of a pokemon image", () => {
    test("Then it should show the image related to the url", () => {
      const pokeImage = screen.getByRole("img") as HTMLImageElement;

      expect(pokeImage).toBeInTheDocument();
    });
  });
});
