import { RefObject, useCallback, useEffect, useRef, useState } from "react";

export function useHover<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isHovered, setHovered] = useState(false);
  const onMouseOver = useCallback(() => setHovered(true), []);
  const onMouseOut = useCallback(() => setHovered(false), []);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", onMouseOver);
      node.addEventListener("mouseout", onMouseOut);
      return () => {
        node.removeEventListener("mouseover", onMouseOver);
        node.removeEventListener("mouseout", onMouseOut);
      };
    }
  }, [onMouseOut, onMouseOver]);

  return [ref, isHovered];
}
