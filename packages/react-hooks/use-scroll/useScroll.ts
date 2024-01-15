import { useCallback } from "react";

export type UseScrollParams = {
  elementRef: React.RefObject<HTMLElement>;
};

export type ScrollDirections = "top" | "bot" | "left" | "right";

const useScroll = ({ elementRef }: UseScrollParams) => {
  const scroll = useCallback(
    (direction: ScrollDirections, spaceToScroll: number) => {
      if (!elementRef.current) return;

      const topMovement = direction === "top" ? spaceToScroll : 0;
      const botMovement = direction === "bot" ? -spaceToScroll : 0;
      const leftMovement = direction === "left" ? -spaceToScroll : 0;
      const rightMovement = direction === "right" ? spaceToScroll : 0;

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
