import React from 'react';
import styled from 'styled-components';
import FormCard from './FormCard';

const FormContainer = ({ addItem, items, editItem, deleteItem }) => {
  return (
    <Wrapper>
      <FormCard
        addItem={addItem}
        items={items}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </Wrapper>
  );
};

export default FormContainer;

const Wrapper = styled.section`
  height: 80vh;
  margin: 2rem;
  /* background-color: var(--primary-30); */
`;
