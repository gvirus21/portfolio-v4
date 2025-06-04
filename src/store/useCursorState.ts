import { create } from "zustand";

export type CursorState =
  | "regular"
  | "sm-hovered"
  | "md-hovered"
  | "lg-hovered"
  | "xl-hovered";

export interface CursorStateType {
  cursorState: CursorState;
  setCursorState: (val: CursorState) => void;
  cursorText: string;
  setCursorText: (val: string) => void;
}

export const useCursorState = create<CursorStateType>((set) => ({
  cursorState: "regular",
  setCursorState: (val) => set(() => ({ cursorState: val })),
  cursorText: "",
  setCursorText: (val) => set(() => ({ cursorText: val })),
}));

export default useCursorState;