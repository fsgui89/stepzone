export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Running",
    price: 899.9,
    image: "/products/nike-air-max-270.jpg",
    description:
      "Conforto e amortecimento para o dia inteiro, com visual esportivo moderno e tecnologia Air.",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    category: "Running",
    price: 999.9,
    image: "/products/adidas-ultraboost.jpg",
    description:
      "Tênis de alta performance com excelente retorno de energia e conforto para corrida.",
  },
  {
    id: 3,
    name: "Puma Suede Classic",
    category: "Casual",
    price: 549.9,
    image: "/products/puma-suede-classic.jpg",
    description:
      "Um clássico urbano da Puma com design atemporal e construção confortável em suede.",
  },
  {
    id: 4,
    name: "New Balance 574",
    category: "Casual",
    price: 699.9,
    image: "/products/new-balance-574.jpg",
    description:
      "Visual retrô, conforto e versatilidade em um dos modelos mais icônicos da New Balance.",
  },
  {
    id: 5,
    name: "Nike Air Force 1",
    category: "Casual",
    price: 799.9,
    image: "/products/nike-air-force-1.jpg",
    description:
      "Clássico absoluto da Nike com design clean, amortecimento e estilo para qualquer ocasião.",
  },
  {
    id: 6,
    name: "Adidas Forum Low",
    category: "Basket",
    price: 749.9,
    image: "/products/adidas-forum-low.jpg",
    description:
      "Inspirado nas quadras de basquete, combina estilo retrô, estabilidade e presença marcante.",
  },
];