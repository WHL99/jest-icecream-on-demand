import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("Display image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find image
  const sccopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(sccopImages).toHaveLength(2);

  //confirm alt text of images
  //@ts-ignore
  const altText = sccopImages.map(function (ele) {
    return ele.alt;
  });
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
