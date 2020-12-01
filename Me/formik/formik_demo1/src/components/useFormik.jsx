import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')// 不少于 2个
    .max(70, 'Too Long!')// 不多于 70个
    .required('Required'),// 不为空
  lastName: Yup.string()
    .min(2, 'Too Short!')// 不少于 2个
    .max(70, 'Too Long!')// 不多于 70个
    .required('Required'),// 不为空
  email: Yup.string()
    .email('Invalid email，must  @ ')
    .required('Required'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName && formik.touched.lastName ? (<div>{formik.errors.lastName}</div>) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;