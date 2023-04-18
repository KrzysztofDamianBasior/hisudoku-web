import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { closeGameSettingsChangedSnackbar } from "../../../redux/slices/snackbarsSlice";
import { RootState } from "../../../redux/store";
import AlertTitle from "@mui/material/AlertTitle";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const GameSettingsChangedSnackbar = () => {
  const isGameSettingsChangedSnackbarOpened = useAppSelector(
    (state: RootState) => state.appSnackbars.isGameSettingsChangedSnackbarOpened
  );
  const dispatch = useAppDispatch();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeGameSettingsChangedSnackbar());
  };

  return (
    <Snackbar
      open={isGameSettingsChangedSnackbarOpened}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={TransitionUp}
      message="I love snacks"
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        <AlertTitle>Success</AlertTitle>
        Game settings changed!
      </Alert>
    </Snackbar>
  );
};

export default GameSettingsChangedSnackbar;
