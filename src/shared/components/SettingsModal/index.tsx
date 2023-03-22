import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ToggleSwitch from "../ToggleSwitch";
import {
  setTimer,
  setRegionHighlighting,
  setRowColumnHighlighting,
  setPreventMistakes,
  setAutoRemoveNotes,
} from "../../redux/slices/settingsSlice";
import { RootState } from "../../redux/store";
import { useAppSelector, useAppDispatch } from "../../hooks";
import "./index.scss";

type Props = { setOpenModal: (arg0: boolean) => void };

const SettingsModal = ({ setOpenModal }: Props) => {
  const timer = useAppSelector((state: RootState) => state.appSettings.timer);
  const preventMistakes = useAppSelector(
    (state: RootState) => state.appSettings.preventMistakes
  );
  const autoRemoveNotes = useAppSelector(
    (state: RootState) => state.appSettings.autoRemoveNotes
  );
  const rowColumnHighlighting = useAppSelector(
    (state: RootState) => state.appSettings.rowColumnHighlighting
  );
  const regionHighlighting = useAppSelector(
    (state: RootState) => state.appSettings.regionHighlighting
  );
  const dispatch = useAppDispatch();

  return (
    <div className="settings-modal">
      <div className="settings-modal__container">
        <div className="settings-modal__close-btn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="settings-modal__content">
          <div className="settings-modal__title">
            <h1>Settings Options</h1>
          </div>
          <div className="settings-modal__body">
            <div className="align-left">timer</div>
            <div className="align-right">
              <ToggleSwitch
                isChecked={timer}
                callback={(isChecked: boolean) => {
                  dispatch(setTimer(isChecked));
                }}
              />
            </div>
            <div className="align-left">region highlighting</div>
            <div className="align-right">
              <ToggleSwitch
                isChecked={regionHighlighting}
                callback={(isChecked: boolean) => {
                  dispatch(setRegionHighlighting(isChecked));
                }}
              />
            </div>
            <div className="align-left">row/column highlighting</div>
            <div className="align-right">
              <ToggleSwitch
                isChecked={rowColumnHighlighting}
                callback={(isChecked: boolean) => {
                  dispatch(setRowColumnHighlighting(isChecked));
                }}
              />
            </div>
            <div className="align-left">prevent mistakes</div>
            <div className="align-right">
              <ToggleSwitch
                isChecked={preventMistakes}
                callback={(isChecked: boolean) => {
                  dispatch(setPreventMistakes(isChecked));
                }}
              />
            </div>
            <div className="align-left">auto remove notes</div>
            <div className="align-right">
              <ToggleSwitch
                isChecked={autoRemoveNotes}
                callback={(isChecked: boolean) => {
                  dispatch(setAutoRemoveNotes(isChecked));
                }}
              />
            </div>
          </div>
          <div className="settings-modal__footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsModal;
