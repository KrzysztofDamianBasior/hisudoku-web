import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = { setOpenModal: (arg0: boolean) => void };

const ForgetPasswordModal = ({ setOpenModal }: Props) => {
  return (
    <div className="forget-password-modal">
      <div className="forget-password-modal__container">
        <div className="forget-password-modal__close-btn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="forget-password-modal__title">
          <h2>Have you forgotten your password?</h2>
        </div>

        <div className="forget-password-modal__body">
          <p>Enter your email address to get a link to reset your password</p>
          <input type="email" />
        </div>

        <div className="forget-password-modal__footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

//{modalOpen && <ForgetPasswordModal setOpenModal={setModalOpen} />}
export default ForgetPasswordModal;
