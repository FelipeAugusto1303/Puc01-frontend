import { api } from "./api";

export const getProducts = async () => {
  return await api.get("produtos");
};

export const getProduct = async (id: number) => {
  return await api.get(`busca_produto?id=${id}`);
};

export const createProduct = async (body: any) => {
  return await api.post("cadastrar_produto", body);
};

export const deleteProduct = async (id: number) => {
  return await api.delete(`deleta_produto?id=${id}`);
};
