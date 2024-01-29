export const DashboardConfig = {
  GET_DETAILS: () => `/admin/dashboard`,
};

export const AuthConfig = {
  LOGIN: () => "/admin/login",
  REGISTER: () => "/admin/register",
};

export const CategoryConfig = {
  GET_CATEGORIES: () => `/v1/category`,
  ADD_CATEGORIES: () => `/v1/category/new`,
};

export const ProductConfig = {
  GET_PRODUCTS: () => `/v1/product`,
  ADD_PRODUCT: () => `/v1/product/new`,
  EDIT_PRODUCT: (id: number) => `/v1/product/${id}`,
  REMOVE_PRODUCT: (id: number) => `/v1/product/${id}`,
};
