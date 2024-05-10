const config = {
  headers: { accept: 'application/json', Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN_PUBLIC}` },
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(process.env.VUE_APP_CATEGORIES_URL, { ...config, method: 'GET' });
    const data = await res.json();
    return data?.items;
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
    return 'Some Error';
  }
};

export const getCategoryProducts = async (id?: string | string[]) => {
  try {
    const res = await fetch(`${process.env.VUE_APP_PRODUCTS_URL}?category=${id}`, { ...config, method: 'GET' });
    const data = await res.json();
    return data?.items;
  } catch (e) {
    return `Error: ${e}`;
  }
};

export const getProductDetails = async (id?: string | string[]) => {
  try {
    const res = await fetch(`${process.env.VUE_APP_PRODUCTS_URL}/${id}`, { ...config, method: 'GET' });
    return await res.json();
  } catch (e: unknown) {
    return `Error: ${e}`;
  }
};
