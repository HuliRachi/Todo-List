import React, { useState } from 'react';
import FormContainer from './components/FormContainer';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];

    if (newItems.length === 7)
      return toast.error('You cant add more than 7 items');
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to the list');
  };
  const editItem = (itemId) => {
    const newItems = items.map((items) => {
      if (items.id === itemId) {
        const newItem = { ...items, completed: !items.completed };
        return newItem;
      }
      return items;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const deleteItem = (itemId) => {
    const newItems = items.filter((items) => {
      return itemId !== items.id;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item deleted');
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <FormContainer
        addItem={addItem}
        items={items}
        editItem={editItem}
        deleteItem={deleteItem}
      />
      ;
    </>
  );
};

export default App;
