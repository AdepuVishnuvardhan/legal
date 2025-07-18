import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const getItems = async () => {
  const response = await axios.get(`${BASE_URL}/items/`);
  return response.data;
};

export const addItem = async (item) => {
  const response = await axios.post(`${BASE_URL}/items/`, item);
  return response.data;
};

export const updateItem = async (id, item) => {
  const response = await axios.put(`${BASE_URL}/items/${id}`, item);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await axios.delete(`${BASE_URL}/items/${id}`);
  return response.data;
};
