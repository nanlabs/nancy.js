import {
  useEffect,
  type MutableRefObject,
  useState,
  useCallback,
  useRef,
} from "react";

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document;

export type HoverTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

export interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
  onChange?: (isHovering: boolean) => void;
}

const useHover = <T extends TargetType = Element>(
  target: HoverTarget<T>,
  options?: Options
): boolean => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    const isHovered = true;
    setIsHovered(isHovered);
    options?.onChange?.(isHovered);
    options?.onEnter?.();
  }, [options?.onEnter, options?.onChange]);

  const onMouseLeave = useCallback(() => {
    const isHovered = false;
    setIsHovered(isHovered);
    options?.onChange?.(isHovered);
    options?.onLeave?.();
  }, [options?.onLeave, options?.onChange]);

  const prevCallbacks = useRef({ onMouseEnter, onMouseLeave });

  useEffect(() => {
    if (
      !target ||
      typeof window === "undefined" ||
      window?.matchMedia("(any-hover: none)").matches
    ) {
      return;
    }
    let targetElement: TargetValue<T>;

    if (typeof target === "function") {
      targetElement = target();
    } else if ("current" in target) {
      targetElement = target.current;
    }

    if (!targetElement) {
      return;
    }

    targetElement?.addEventListener("mouseenter", onMouseEnter);
    targetElement?.addEventListener("mouseleave", onMouseLeave);

    // clean up previous listeners
    prevCallbacks.current = { onMouseEnter, onMouseLeave };
    return () => {
      targetElement?.removeEventListener(
        "mouseenter",
        prevCallbacks.current.onMouseEnter
      );
      targetElement?.removeEventListener(
        "mouseleave",
        prevCallbacks.current.onMouseLeave
      );
    };
  }, [target, onMouseEnter, onMouseLeave]);

  return isHovered;
};

export default useHover;
