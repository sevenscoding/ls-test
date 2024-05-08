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

export const getProducts = () => {
  console.log('get');
};
