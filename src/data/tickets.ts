export type Ticket = {
  id: string;
  eventId: number;
  type: "VIP" | "Regular";
  price: number;
  quantity: number;
};

const tickets: Ticket[] = [
  {
    id: "t1",
    eventId: 1,
    type: "VIP",
    price: 500000,
    quantity: 100,
  },
  {
    id: "t2",
    eventId: 1,
    type: "Regular",
    price: 250000,
    quantity: 500,
  },
  {
    id: "t3",
    eventId: 2,
    type: "Regular",
    price: 100000,
    quantity: 200,
  },
  {
    id: "t4",
    eventId: 3,
    type: "Regular",
    price: 75000,
    quantity: 300,
  },
  {
    id: "t5",
    eventId: 3,
    type: "VIP",
    price: 150000,
    quantity: 50,
  },
  {
    id: "t6",
    eventId: 4,
    type: "Regular",
    price: 50000,
    quantity: 400,
  },
  {
    id: "t7",
    eventId: 4,
    type: "VIP",
    price: 120000,
    quantity: 80,
  },
];

export { tickets };
