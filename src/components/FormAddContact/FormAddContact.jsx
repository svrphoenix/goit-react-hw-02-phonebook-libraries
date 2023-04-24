import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Title } from 'components/Title/Title';
import {
  StyledForm,
  FormContainer,
  Input,
  ErrMessage,
  Button,
} from './FormAddContact.styled';

const numberPattern =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.string()
    .matches(numberPattern, 'Phone number is not valid')
    .required('Required field!'),
});

export const FormAddContact = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Title title="Add contact" />
        <FormContainer>
          <div>
            <label>
              Name
              <Input
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />{' '}
              <ErrMessage name="name" component="p" />
            </label>
          </div>
          <div>
            <label>
              Phone number
              <Input
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrMessage name="number" component="p" />
            </label>
          </div>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </StyledForm>
    </Formik>
  );
};
