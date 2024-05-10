const config = {
    headers: { accept: 'application/json', Authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN_PUBLIC}` },
};
export const getAllCategories = async () => {
    try {
        const res = await fetch(process.env.VUE_APP_CATEGORIES_URL, { ...config, method: 'GET' });
        return await res.json();
    }
    catch (e) {
        return `Error: ${e}`;
    }
};
export const getCategoryProducts = async (id) => {
    try {
        const res = await fetch(`${process.env.VUE_APP_PRODUCTS_URL}?category=${id}`, { ...config, method: 'GET' });
        return await res.json();
    }
    catch (e) {
        return `Error: ${e}`;
    }
};
export const getProductDetails = async (id) => {
    try {
        const res = await fetch(`${process.env.VUE_APP_PRODUCTS_URL}/${id}`, { ...config, method: 'GET' });
        return await res.json();
    }
    catch (e) {
        return `Error: ${e}`;
    }
};
//# sourceMappingURL=index.js.map