import React, { useState } from "react";
import "./login.css";
import firebase from "../Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, useFormik } from "formik";
import * as yup from "yup";
toast.configure();
const validationSchema = yup.object().shape({
  Email: yup.string().required("email is required"),

  Password: yup
    .string()
    .required("password is required")

    .min(6, "Minimum 6 characters required"),
});

function Login() {
  const notify = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        toast.success("Login Successfully");
      })
      .catch((err) => {
        toast.error("Register First");
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(firebase.auth());
  const signInHandler = () => {};

  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    onSubmit: (values) => {
      alert("Form submitted");
    },
    validationSchema: validationSchema,
  });
  const renderErrorMessage = (Field) => {
    return (
      formik.touched[Field] && (
        <div style={{color:"red " }} class="text-error">{formik.errors[Field]}</div>
      )
    );
  };

  return (
    <div>
      <div className="">
        <div className="card card-container mt-5" id="Card">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mt-2">
              <label className="Email">Email</label>
              <input
                type="email"
                required="required"
                className="form-control"
                name="email"
                {...formik.getFieldProps("Email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              {renderErrorMessage("Email")}
            </div>

            <div className="form-group mt-2">
              <label className="Email">Password</label>
              <input
                type="password"
                className="form-control"
                {...formik.getFieldProps("Password")}
                onChange={(e) => setPassword(e.target.value)}
              />
              {renderErrorMessage("Password")}
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary  mt-3"
                id="Login"
                onClick={(signInHandler, notify)}
                disabled={!email || !password}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
