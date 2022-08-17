import React from "react";

type Props = {};

const AccountDashboard = (props: Props) => {
  return (
    <div className="account-dashboard">
      <h1>
        <span>always be</span>
        <div className="message">
          <div className="word1">close</div>
          <div className="word2">code</div>
          <div className="word3">creating</div>
        </div>
      </h1>
      <div className="account-dashboard__content">
        <div className="account-dashboard__links">
          <p>sign in or create an account to publish your own puzzles</p>
          <button>join!</button>
        </div>
        <div className="account-dashboard__info">
          account gives you 1. 2. etc.
        </div>
      </div>
    </div>
  );
};
export default AccountDashboard;
