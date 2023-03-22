import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import WavyBackground from "../../shared/components/WavyBackground";
import "./index.scss";

export default function Sign() {
  const [active, setActive] = useState(true);

  //two alternative ways
  //<div className={`sign ${active ? 'active' : null}`}>
  // or
  //import classNames from "classnames";
  //<div className={classNames("sign", { "active": active })}>

  return (
    <WavyBackground>
      <div className={"sign"}>
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
            {/* <div className={classNames("sign__form", { active: active })}> */}
            <div className={`sign__form ${active ? "active" : null}`}>
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
    </WavyBackground>
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
