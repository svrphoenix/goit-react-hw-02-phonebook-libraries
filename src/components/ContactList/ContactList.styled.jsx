import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Contact = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  :hover,
  :focus {
    color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 0);
    border-color: rgb(255, 255, 255);
  }
`;
