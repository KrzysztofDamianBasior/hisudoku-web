import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled/macro";

import {
  addValue,
  blurCell,
  focusCell,
  undoMove,
} from "../../../../shared/redux/slices/currentGameSlice";

import { useAppDispatch } from "../../../../shared/hooks";
import { validateSudokuValue } from "../../../../shared/utils/SudokuUtils/validateSudokuValue";

type Props = {
  mode: "number" | "undo" | "erase";
  value: number | string;
};

const KeyboardButton = ({ mode, value }: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  return (
    <RaisedButton
      onClick={() => {
        if (mode === "number" && typeof value === "number") {
          if (validateSudokuValue(value)) {
            dispatch(addValue(value));
          }
        } else if (mode === "erase") {
          dispatch(addValue(0));
          dispatch(blurCell());
        } else if (mode === "undo") {
          dispatch(undoMove());
          dispatch(blurCell());
        }
      }}
    >
      <ButtonEdge backgroundHue="200"></ButtonEdge>
      <ButtonFront backgroundHue="200" color="white">
        {value}
      </ButtonFront>
    </RaisedButton>
  );
};

export default KeyboardButton;

const ButtonEdge = styled("span")<{ backgroundHue: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: ${(props) => `linear-gradient(
    to left,
    hsl(${props.backgroundHue}deg 100% 16%) 0%,
    hsl(${props.backgroundHue}deg 100% 32%) 8%,
    hsl(${props.backgroundHue}deg 100% 32%) 92%,
    hsl(${props.backgroundHue}deg 100% 16%) 100%
  );`};
`;

const ButtonFront = styled("span")<{ backgroundHue: string; color: string }>`
  background: ${(props) => `hsl(${props.backgroundHue}deg 100% 47%)`};
  color: ${(props) => props.color};
  position: relative;
  width: 100%;
  height: 90%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  padding: 12px 42px;
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const RaisedButton = styled("button")`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 0;
  cursor: pointer;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    filter: brightness(115%);
  }
  &:hover ${ButtonFront} {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${ButtonFront} {
    transform: translateY(-2px);
    transition: transform 30ms;
  }
`;
