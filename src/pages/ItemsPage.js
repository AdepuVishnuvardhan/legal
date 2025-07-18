import React, { useEffect, useState } from 'react';
import { getItems, addItem, deleteItem } from '../api/items';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      alert('Failed to fetch items');
    }
  };

  const handleAdd = async () => {
    try {
      await addItem(newItem);
      setNewItem({ name: '', description: '' });
      fetchItems();
    } catch (error) {
      alert('Failed to add item');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      alert('Failed to delete item');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Add Item</h3>
      <input
        placeholder="Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newItem.description}
        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ItemsPage;
