type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality wireless headphones with noise cancellation.",
    price: 129.99,
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications on the go.",
    price: 89.5,
    image: "https://via.placeholder.com/300x200?text=Smartwatch",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic mouse with customizable RGB lighting.",
    price: 45.0,
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
  },
];

export {products}