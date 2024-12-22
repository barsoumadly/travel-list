import axios from "axios";

const BASICURL = "https://citiesapi2-8wiemvn9.b4a.run/api";

async function createItem(item) {
  try {
    await axios.post(`${BASICURL}/items`, item);
  } catch (error) {
    console.log(error);
  }
}

async function getItems() {
  try {
    const response = await axios.get(`${BASICURL}/items`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function updateItem(id, item) {
  try {
    await axios.patch(`${BASICURL}/items/${id}`, item);
  } catch (error) {
    console.log(error);
  }
}

async function deleteItem(id) {
  try {
    await axios.delete(`${BASICURL}/items/${id}`);
  } catch (error) {
    console.log(error);
  }
}

async function deleteItems() {
  try {
    await axios.delete(`${BASICURL}/items`);
  } catch (error) {
    console.log(error);
  }
}

export { createItem, getItems, updateItem, deleteItem, deleteItems };
