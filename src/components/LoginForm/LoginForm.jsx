import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const addContactSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrpap}>
          <ErrorMessage className={css.error} name="email" component="span" />
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder=""
            id={`email${id}`}
          />
          <label className={css.label} htmlFor={`email${id}`}>
            Email
          </label>
        </div>
        <div className={css.wrpap}>
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder=""
            id={`password${id}`}
          />
          <label className={css.label} htmlFor={`password${id}`}>
            Password
          </label>
        </div>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
