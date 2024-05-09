const config = {
  headers: { accept: 'application/json', Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN_PUBLIC}` },
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(process.env.VUE_APP_CATEGORIES_URL, { ...config, method: 'GET' });
    return await res.json();
  } catch (e) {
    return e;
  }
};

export const getCategory = async (id?: string) => {
  try {
    const res2 = await fetch(`${process.env.VUE_APP_PRODUCTS_URL}/products?category=${id}`, { ...config, method: 'GET' });
    const data = await res2.json();
    console.log('----');
    console.log(data);
    return data;
  } catch (e) {
    return e;
  }
};

export const getProducts = () => {
  console.log('get');
};
