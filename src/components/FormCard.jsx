import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import FormList from './FormList';
import hero from '../assets/hero.svg';
const FormCard = ({ addItem, items, editItem, deleteItem }) => {
  const [newItemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) {
      toast.error('please provide a value');
      return;
    }
    addItem(newItemName);
    setItemName('');
  };
  return (
    <Wrapper>
      <div className="article">
        <div className="header">
          <h3>To Do List App</h3>
          <div className="img-container">
            <img src={hero} alt="hero" className="img" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="form-input"
            value={newItemName}
            onChange={(event) => {
              setItemName(event.target.value);
            }}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        <div>
          {items.map((items) => {
            return (
              <FormList
                items={items}
                key={items.id}
                editItem={editItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FormCard;

const Wrapper = styled.article`
  /* background-color: red; */
  .article {
    background-color: var(--secondary-20);
    height: 35rem;
    width: 25rem;
    margin: 4rem auto;
  }
  .form {
    display: flex;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }
  .img-container {
    width: 10rem;
    height: 5rem;
  }
`;
