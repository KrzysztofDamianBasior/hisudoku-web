import { NoteValue } from "../../redux/slices/currentGameSlice";

export function validateNoteValue(
  noteValue: number | null
): noteValue is NoteValue {
  if (
    noteValue === 1 ||
    noteValue === 2 ||
    noteValue === 3 ||
    noteValue === 4 ||
    noteValue === 5 ||
    noteValue === 6 ||
    noteValue === 7 ||
    noteValue === 8 ||
    noteValue === 9
  ) {
    return true;
  } else {
    return false;
  }
}
