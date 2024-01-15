import { useCallback } from "react";

export type UseScrollParams = {
  elementRef: React.RefObject<HTMLElement>;
};

export enum ScrollDirections {
  Top = "top",
  Bot = "bot",
  Right = "right",
  Left = "left",
}

const useScroll = ({ elementRef }: UseScrollParams) => {
  const scroll = useCallback(
    (direction, spaceToScroll) => {
      if (!elementRef.current) return;

      const topMovement =
        direction === ScrollDirections.Top ? spaceToScroll : 0;
      const botMovement =
        direction === ScrollDirections.Bot ? -spaceToScroll : 0;
      const leftMovement =
        direction === ScrollDirections.Left ? -spaceToScroll : 0;
      const rightMovement =
        direction === ScrollDirections.Right ? spaceToScroll : 0;

      elementRef.current.scrollBy({
        top: topMovement || botMovement,
        left: leftMovement || rightMovement,
        behavior: "smooth",
      });
    },
    [elementRef]
  );

  return {
    scroll,
  };
};

export default useScroll;
