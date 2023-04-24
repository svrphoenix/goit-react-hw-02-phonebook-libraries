import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  padding: 1rem;
  width: 30rem;
  border: 1px solid black;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  display: inline-block;
  width: 10rem;
  cursor: pointer;
  border-radius: 0.25rem;
  border: 0.0625rem solid gray;
  :hover,
  :focus {
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 255);
  }
`;

export const Input = styled(Field)`
  display: block;
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
