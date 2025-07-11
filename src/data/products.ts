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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5968PicqgKEOmA9jPVyIGucUsNBZobqDdpw&s",
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications on the go.",
    price: 89.5,
    image:
      "https://static.retailworldvn.com/Products/Images/12249/329366/smartwatch-xiaomi-smart-band-9-arctic-blue-thumb-600x600.jpg",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic mouse with customizable RGB lighting.",
    price: 45.0,
    image: "https://www.softcom.co.id/wp-content/uploads/2020/04/G-PRO-a-1.jpg",
  },
];

export { products };
