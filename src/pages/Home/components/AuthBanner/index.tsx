import React from "react";
import ActionButton from "../../../../shared/components/ActionButton";
import "./index.scss";

type Props = {};

const AccountDashboard = (props: Props) => {
  return (
    <div className="account-dashboard">
      {/* <h1>
        <span>always be</span>
        <div className="message">
          <div className="word1">close</div>
          <div className="word2">code</div>
          <div className="word3">creating</div>
        </div>
      </h1> */}
      <div className="account-dashboard__content">
        <div className="account-dashboard__links">
          <p>sign in or create an account to publish your own puzzles</p>
          <ActionButton content="Join" />
        </div>
      </div>
    </div>
  );
};
export default AccountDashboard;
