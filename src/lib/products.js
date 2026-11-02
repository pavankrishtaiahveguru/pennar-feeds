export const products = [
  {
    id: 1,
    name: "Pennar Premium Floating Fish Feed",
    protein: "24%",
    fat: "4%",
    size: "4mm",
    weight: "40kg",
    image: "/images/products/product-1.png",
    theme: "blue",
    description:
      "Quality floating fish feed formulated to support healthy fish growth and efficient pond feeding.",
    features: [
      "Protein: 24%",
      "Fat: 4%",
      "Pellet Size: 4mm",
      "FCR: 1.2 - 1.4",
      "100% floating pellets",
      "Pack: 40kg PP Bag",
    ],
  },
  {
    id: 2,
    name: "Pennar Premium Floating Fish Feed",
    protein: "28%",
    fat: "5%",
    size: "4mm",
    weight: "40kg",
    image: "/images/products/product-2.png",
    theme: "orange",
    description:
      "Higher-protein floating fish feed designed to support fish growth and aquaculture performance.",
    features: [
      "Protein: 28%",
      "Fat: 5%",
      "Pellet Size: 4mm",
      "FCR: 1.2 - 1.4",
      "100% floating pellets",
      "Pack: 40kg PP Bag",
    ],
  },
];

export function getProductById(id) {
  return products.find((product) => String(product.id) === String(id));
}
