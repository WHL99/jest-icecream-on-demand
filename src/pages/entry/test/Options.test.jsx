import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("Display image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find image
  const sccopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(sccopImages).toHaveLength(2);

  //confirm alt text of images
  //@ts-ignore
  const altText = sccopImages.map((ele) => {
    return ele.alt;
  });
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Display image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map((ele) => {
    return ele.alt;
  });
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
