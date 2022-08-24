import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

export default function Sign() {
  const [active, setActive] = useState(false);

  return (
    <div className={classNames("sign", { active: active })}>
      <div className="sign__container">
        <div className="sign__background">
          <div className="sign__box sign__signin">
            <h2>Already Have An Account ?</h2>
            <button className="signinBtn" onClick={() => setActive(false)}>
              Sign in
            </button>
          </div>
          <div className="sign__box sign__signup">
            <h2>Don't Have an Account?</h2>
            <button className="signupBtn" onClick={() => setActive(true)}>
              Sign up
            </button>
          </div>
          <div className={classNames("sign__form", { active: active })}>
            <div className="form signinForm">
              <SignInForm />
            </div>
            <div className="form signupForm">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// mutation name($variable: String!){
//   mutationName(email: $variable)
// }
// const [mutation, {loading, error}] = useMutation( MUTATION, {
//   refetchQueries: [{query: ....}]

//   onCompleted: data => {
//       localStorage.setItem('token', data.signUp)
//       client.writeData({data: {isLoggedIn: true}})
//       //przekierowanie na inną stronę
//   }
// } )
