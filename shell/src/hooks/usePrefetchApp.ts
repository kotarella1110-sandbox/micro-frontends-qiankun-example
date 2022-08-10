import { prefetchApps, AppMetadata } from "qiankun";
import { useEffect } from "react";
import { useHover } from "./useHover";

export const usePrefetchApp = <T extends HTMLElement>(
  app: AppMetadata,
  opts?: Parameters<typeof prefetchApps>[1]
) => {
  const [ref, isHovered] = useHover<T>();

  useEffect(() => {
    if (!isHovered) return;
    prefetchApps([app]);
  }, [isHovered]);

  return ref;
};
