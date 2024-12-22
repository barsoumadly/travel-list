import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { deleteItem, deleteItems, getItems, updateItem } from "../store";

export default function App() {
  const [items, setItems] = useState([]);
  useEffect(function () {
    async function data() {
      const allItems = await getItems();
      setItems(allItems);
    }
    data();
  }, []);

  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item._id !== id));

    async function deleteElement(id) {
      await deleteItem(id);
    }
    deleteElement(id);
  }

  function handelSelectItem(id) {
    const updateItems = items.map((item) =>
      item._id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    const [currentItem] = updateItems.filter((item) => item._id === id);
    setItems(updateItems);

    async function update() {
      await updateItem(id, currentItem);
    }
    update();
  }

  function handelClean() {
    const confirm = window.confirm("Are you want to delete all items?");
    if (confirm) setItems([]);

    async function deleteElements() {
      await deleteItems();
    }
    deleteElements();
  }
  return (
    <div className="app">
      <Logo />
      <Form AddItems={handelAddItem} />
      <PackingList
        items={items}
        deleteItem={handelDeleteItem}
        selectItem={handelSelectItem}
        cleanItems={handelClean}
      />
      <Stats items={items} />
    </div>
  );
}
