import { ErrorMessage, Field, Formik,Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';


const formSchema = Yup.object({
  email: Yup.string().email().required('Must be filled'),
  password: Yup.string().min(8).required('Must be filled'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn({ ...values }));
        // actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" placeholder="Enter your name" />
          <ErrorMessage name="name" component="b" />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="b" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};