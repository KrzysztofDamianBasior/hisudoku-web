import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import ForgetPasswordModal from "../ForgetPasswordModal/ForgetPasswordModal";

type Props = {};

const SignInForm = (props: Props) => {
  const [forgetPasswordModalOpen, setForgetPasswordModalOpen] = useState(false);

  const signinFormik = useFormik({
    initialValues: {
      signinUsername: "",
      signinPassword: "",
    },
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.signinUsername}.`);
    },
    validationSchema: Yup.object({
      signinUsername: Yup.string()
        .label("username")
        .required()
        .max(30, "Must be 30 characters or less")
        .min(3, "Must be more than 3 characters long"),
      signinPassword: Yup.string()
        .label("password")
        .required()
        .max(30, "Must be 30 characters or less")
        .min(5, "Must be more than 5 characters long"),
    }),
  });

  return (
    <form onSubmit={signinFormik.handleSubmit} className="sign-in-form">
      <h3>Sign In</h3>
      <div>
        <input
          id="signinUsername"
          type="text"
          placeholder="Username"
          className={`${
            signinFormik.touched.signinUsername &&
            signinFormik.errors.signinUsername
              ? "border-red"
              : "border-gray"
          }`}
          onChange={signinFormik.handleChange}
          onBlur={signinFormik.handleBlur}
          value={signinFormik.values.signinUsername}
        />
        {signinFormik.touched.signinUsername &&
          signinFormik.errors.signinUsername && (
            <span className="text-red">
              {signinFormik.errors.signinUsername}
            </span>
          )}
      </div>
      <div>
        <input
          id="signinPassword"
          type="password"
          placeholder="Password"
          className={`${
            signinFormik.touched.signinPassword &&
            signinFormik.errors.signinPassword
              ? "border-red"
              : "border-gray"
          }`}
          onChange={signinFormik.handleChange}
          onBlur={signinFormik.handleBlur}
          value={signinFormik.values.signinPassword}
        />
        {signinFormik.touched.signinPassword &&
          signinFormik.errors.signinPassword && (
            <span className="text-red">
              {signinFormik.errors.signinPassword}
            </span>
          )}
      </div>
      <input type="submit" value="Login" />
      <a
        href="#"
        className="forgot"
        onClick={() => setForgetPasswordModalOpen(true)}
      >
        Forgot Password
      </a>
      {forgetPasswordModalOpen && (
        <ForgetPasswordModal setOpenModal={setForgetPasswordModalOpen} />
      )}
    </form>
  );
};
export default SignInForm;
