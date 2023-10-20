import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormBtn, Label, StyledField } from './PhoneBook.styled';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAddContact } from 'redux/PhoneBook/operations';
import { selectContacts } from 'redux/PhoneBook/selectors';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
    .required('This is required!')
    .min(1, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(/^\+?[0-9]{1,3}-?[0-9]+$/, 'Invalid number')
    .required('This is required!')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
});

export const PhoneBook = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const checkName = values.name;
        
        if (
          contacts.some(
            contact => contact.name.toLowerCase() === checkName.toLowerCase()
          )
        ) {
          alert(`${checkName} already recorded in the directory`);
          return;
        }
        dispatch(fetchAddContact({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <Label htmlFor="name">
          name
          <StyledField name="name" placeholder="name" />
          <ErrorMessage name="name" component="div" />
        </Label>

        <Label htmlFor="number">
          number
          <StyledField name="number" placeholder="number" />
          <ErrorMessage name="number" component="div" />
        </Label>

        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
