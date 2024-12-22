import { useState } from "react";

export function PackingList({ items, deleteItem, selectItem, cleanItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems = items.slice();

  if (sortBy === "description")
    sortItems.sort((a, b) => a.itemName.localeCompare(b.itemName));
  else sortItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item._id}
            deleteItem={deleteItem}
            selectItem={selectItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by itemName</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <span>
          <button onClick={cleanItems}>ClearList</button>
        </span>
      </div>
    </div>
  );
}
function Item({ item, deleteItem, selectItem }) {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={item.isPacked}
        onChange={() => selectItem(item._id)}
      ></input>
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.itemName}
      </span>
      <button onClick={() => deleteItem(item._id)}>❌</button>
    </li>
  );
}
