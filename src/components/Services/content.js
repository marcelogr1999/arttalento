import { PenNibStraight, Cards, Printer } from "phosphor-react";

const iconSize = 32;

export const services = [
  {
    icon: <PenNibStraight size={iconSize} />,
    title: "Corte a Laser",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    icon: <Cards size={iconSize} />,
    title: "Acrílicos",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    icon: <Printer size={iconSize} />,
    title: "Impressão Digital",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
];
