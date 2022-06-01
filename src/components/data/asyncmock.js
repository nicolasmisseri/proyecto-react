const products = [
  {
    id: "1",
    name: "Pelota Molten",
    price: 61.54,
    category: "pelota",
    img: "https://http2.mlstatic.com/D_NQ_NP_970958-MLA45227783699_032021-O.webp",
    stock: 25,
    description: "La pelota oficial de la FIBA",
  },
  {
    id: "2",
    name: "Zapatillas Jordan",
    price: 46.5,
    category: "zapatillas",
    img: "https://http2.mlstatic.com/D_NQ_NP_861984-MLA49147139238_022022-O.webp",
    stock: 16,
    description: "Excelentes zapatillas para jugar basket",
  },
  {
    id: "3",
    name: "Aro Basket",
    price: 48.79,
    category: "aro",
    img: "https://http2.mlstatic.com/D_NQ_NP_959206-MLA48251870268_112021-O.webp",
    stock: 10,
    description: "Aro de acrílico profesional",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
