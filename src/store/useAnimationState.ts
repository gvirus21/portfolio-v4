import { create } from "zustand";

interface AnimationState {
  isAnimationComplete: boolean;
  setAnimationComplete: (complete: boolean) => void;
}

export const useAnimationState = create<AnimationState>((set) => ({
  isAnimationComplete: false,
  setAnimationComplete: (complete) => {
    set({ isAnimationComplete: complete });
  },
}));

export const useIsReadyForHeroEntry = () => {
  const { isAnimationComplete } = useAnimationState();
  const result = isAnimationComplete;
  return result;
};

export default useAnimationState;
