export type Event = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
};

const events: Event[] = [
  {
    id: 1,
    name: "Konser Musik Akbar",
    slug: "konser-musik-akbar",
    description:
      "Sebuah konser musik yang menampilkan artis-artis ternama dari seluruh dunia.",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Workshop Koding Profesional",
    slug: "workshop-koding-profesional",
    description:
      "Belajar membuat aplikasi web dari dasar hingga mahir dengan para ahli di bidangnya.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Festival Makanan Nusantara",
    slug: "festival-makanan-nusantara",
    description:
      "Nikmati berbagai kuliner khas dari seluruh penjuru Indonesia dalam satu tempat.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Pameran Teknologi Inovatif",
    slug: "pameran-teknologi-inovatif",
    description:
      "Temukan inovasi teknologi terbaru dari startup dan perusahaan teknologi ternama.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export { events };