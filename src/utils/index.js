export const setStructure = (products) => {
  return products.map((product) => {
    const data = product.data();
    return { id: product.id, ...data };
  });
};
