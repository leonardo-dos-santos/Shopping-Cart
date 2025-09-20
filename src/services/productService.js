// Product service to fetch data from FakeStore API

export const getProducts = async (limit = 10) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};