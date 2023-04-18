import React, { useState } from "react";

import {
  setAutoRemoveNotes,
  setAutoPreventMistakes,
  setRegionHighlightingVisiblity,
  setRowColumnHighlightingVisiblity,
  setTimerVisiblity,
} from "../../../redux/slices/gameSettingsSlice";
import {
  closeGameSettingsDialog,
  openGameSettingsDialog,
} from "../../../redux/slices/dialogsSlice";
import { RootState } from "../../../redux/store";
import { openGameSettingsChangedSnackbar } from "../../../redux/slices/snackbarsSlice";

import ToggleSwitch from "../../inputs/ToggleSwitch";

import { useAppSelector, useAppDispatch } from "../../../hooks";

import Draggable from "react-draggable";

import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import "./index.scss";

const GameSettingsDialog = () => {
  const [hasGameSettingsChanged, setHasGameSettingsChanged] =
    useState<boolean>(false);

  const isDialogOpened: boolean = useAppSelector(
    (state: RootState) => state.appDialogs.isGameSettingsDialogOpened
  );

  const isTimerVisible: boolean = useAppSelector(
    (state: RootState) => state.appGameSettings.isTimerVisible
  );

  const autoPreventMistakes: boolean = useAppSelector(
    (state: RootState) => state.appGameSettings.autoPreventMistakes
  );

  const autoRemoveNotes = useAppSelector(
    (state: RootState) => state.appGameSettings.autoRemoveNotes
  );

  const isRowColumnHighlightingVisible = useAppSelector(
    (state: RootState) => state.appGameSettings.isRowColumnHighlightingVisible
  );

  const isRegionHighlightingVisible = useAppSelector(
    (state: RootState) => state.appGameSettings.isRegionHighlightingVisible
  );

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeGameSettingsDialog());
    if (hasGameSettingsChanged) {
      dispatch(openGameSettingsChangedSnackbar());
      setHasGameSettingsChanged(false);
    }
  };

  return (
    <Dialog
      open={isDialogOpened}
      onClose={handleClose}
      scroll={"paper"}
      PaperComponent={PaperComponent}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Game Settings
      </DialogTitle>

      <DialogContent>
        <div className="settings-modal__body">
          <div className="align-left">Is timer visible</div>
          <div className="align-right">
            <ToggleSwitch
              isChecked={isTimerVisible}
              callback={(isChecked: boolean) => {
                dispatch(setTimerVisiblity(isChecked));
                setHasGameSettingsChanged(true);
              }}
            />
          </div>
          <div className="align-left">Show region highlighting</div>
          <div className="align-right">
            <ToggleSwitch
              isChecked={isRegionHighlightingVisible}
              callback={(isChecked: boolean) => {
                dispatch(setRegionHighlightingVisiblity(isChecked));
                setHasGameSettingsChanged(true);
              }}
            />
          </div>
          <div className="align-left">Turn on row/column highlighting</div>
          <div className="align-right">
            <ToggleSwitch
              isChecked={isRowColumnHighlightingVisible}
              callback={(isChecked: boolean) => {
                dispatch(setRowColumnHighlightingVisiblity(isChecked));
                setHasGameSettingsChanged(true);
              }}
            />
          </div>
          <div className="align-left">Auto prevent mistakes</div>
          <div className="align-right">
            <ToggleSwitch
              isChecked={autoPreventMistakes}
              callback={(isChecked: boolean) => {
                dispatch(setAutoPreventMistakes(isChecked));
                setHasGameSettingsChanged(true);
              }}
            />
          </div>
          <div className="align-left">Auto remove notes</div>
          <div className="align-right">
            <ToggleSwitch
              isChecked={autoRemoveNotes}
              callback={(isChecked: boolean) => {
                dispatch(setAutoRemoveNotes(isChecked));
                setHasGameSettingsChanged(true);
              }}
            />
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        {/* <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button> */}
        <Button variant="outlined" autoFocus onClick={handleClose}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default GameSettingsDialog;

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
