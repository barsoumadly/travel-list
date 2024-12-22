export function Stats({ items }) {
  const itemPack = items.filter((item) => item.isPacked);
  if (itemPack.length === 0)
    return (
      <footer className="stats">
        {" "}
        <em>Start adding some items to your Packing list 💼</em>
      </footer>
    );
  else {
    const complete = Math.trunc((itemPack.length / items.length) * 100);

    return (
      <footer className="stats">
        <em>
          {complete !== 100
            ? `You have ${items.length} items on your list and you already packed ${itemPack.length} (${complete}%)`
            : "You got everything! Ready to go 🚀"}
        </em>
      </footer>
    );
  }
}
