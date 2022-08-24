import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

type Props = {};

const SignUpForm = (props: Props) => {
  const signupFormik = useFormik({
    initialValues: {
      signupUsername: "",
      signupEmail: "",
      signupPassword: "",
      signupConfirmPassword: "",
    },
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.signupUsername}.`);
    },
    validationSchema: Yup.object({
      signupUsername: Yup.string()
        .label("username")
        .required()
        .max(30, "Must be 30 characters or less")
        .min(3, "Must be more than 3 characters long"),
      signupEmail: Yup.string().label("email").email(),
      signupPassword: Yup.string()
        .label("password")
        .required("Please enter your password.")
        .max(30, "Must be 30 characters or less")
        .min(5, "Must be more than 5 characters long"),
      signupConfirmPassword: Yup.string()
        .label("password")
        .required("Please retype your password.")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
    }),
  });
  return (
    <form onSubmit={signupFormik.handleSubmit} className="sign-up-form">
      <h3>Sign Up</h3>

      <div>
        <input
          id="signupUsername"
          type="text"
          placeholder="Username"
          className={`${
            signupFormik.touched.signupUsername &&
            signupFormik.errors.signupUsername
              ? "border-red"
              : "border-gray"
          }`}
          onChange={signupFormik.handleChange}
          onBlur={signupFormik.handleBlur}
          value={signupFormik.values.signupUsername}
        />
        {signupFormik.touched.signupUsername &&
          signupFormik.errors.signupUsername && (
            <span className="text-red">
              {signupFormik.errors.signupUsername}
            </span>
          )}
      </div>

      <div>
        <Tippy
          arrow={false}
          delay={1000}
          placement="right"
          content="providing an email address is obligatory, but if you do not provide it, it makes it impossible to recover your account in case you lose your password"
        >
          <input
            id="signupEmail"
            type="email"
            placeholder="Email Address"
            className={`${
              signupFormik.touched.signupEmail &&
              signupFormik.errors.signupEmail
                ? "border-red"
                : "border-gray"
            }`}
            onChange={signupFormik.handleChange}
            onBlur={signupFormik.handleBlur}
            value={signupFormik.values.signupEmail}
          />
        </Tippy>
        {signupFormik.touched.signupEmail &&
          signupFormik.errors.signupEmail && (
            <span className="text-red">{signupFormik.errors.signupEmail}</span>
          )}
      </div>

      <div>
        <input
          id="signupPassword"
          type="password"
          placeholder="Password"
          className={`${
            signupFormik.touched.signupPassword &&
            signupFormik.errors.signupPassword
              ? "border-red"
              : "border-gray"
          }`}
          onChange={signupFormik.handleChange}
          onBlur={signupFormik.handleBlur}
          value={signupFormik.values.signupPassword}
        />
        {signupFormik.touched.signupPassword &&
          signupFormik.errors.signupPassword && (
            <span className="text-red">
              {signupFormik.errors.signupPassword}
            </span>
          )}
      </div>
      <div>
        <input
          id="signupConfirmPassword"
          type="password"
          placeholder="Retype Password"
          className={`${
            signupFormik.touched.signupConfirmPassword &&
            signupFormik.errors.signupConfirmPassword
              ? "border-red"
              : "border-gray"
          }`}
          onChange={signupFormik.handleChange}
          onBlur={signupFormik.handleBlur}
          value={signupFormik.values.signupConfirmPassword}
        />
        {signupFormik.touched.signupConfirmPassword &&
          signupFormik.errors.signupConfirmPassword && (
            <span className="text-red">
              {signupFormik.errors.signupConfirmPassword}
            </span>
          )}
      </div>

      <input type="submit" value="Register" />
    </form>
  );
};
export default SignUpForm;
