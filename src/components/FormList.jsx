import React from 'react';
import styled from 'styled-components';

const FormList = ({ items, editItem, deleteItem }) => {
  return (
    <Wrapper>
      <input
        className="check-box"
        type="checkbox"
        checked={items.completed}
        onChange={() => editItem(items.id)}
      />
      <p
        className="item"
        style={{
          textTransform: 'capitalize',
          textDecoration: items.completed && 'line-through',
        }}
      >
        {items.name}
      </p>
      <button
        className="btn"
        type="button"
        onClick={() => deleteItem(items.id)}
      >
        Delete
      </button>
    </Wrapper>
  );
};

export default FormList;

const Wrapper = styled.div`
  /* background-color: green; */
  display: grid;
  grid-template-columns: 35px 1fr 6rem;
  padding-top: 1rem;
  input[type='checkbox'] {
    width: 24px;
    height: 24px;
  }
  .btn {
    width: 5.5rem;
    align-self: flex-end;
  }
`;
