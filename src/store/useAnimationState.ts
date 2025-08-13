import { create } from "zustand";

interface AnimationState {
  isAnimationComplete: boolean;
  setAnimationComplete: (complete: boolean) => void;
  pageLabel: string | null;
  setPageLabel: (label: string) => void;
}

export const useAnimationState = create<AnimationState>((set) => ({
  isAnimationComplete: false,
  setAnimationComplete: (complete) => {
    set({ isAnimationComplete: complete });
  },
  pageLabel: null,
  setPageLabel: (label) => {
    set({ pageLabel: label });
  },
}));

export const useIsReadyForHeroEntry = () => {
  const { isAnimationComplete } = useAnimationState();
  const result = isAnimationComplete;
  return result;
};

export default useAnimationState;