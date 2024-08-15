import { useRef } from "react";

export default function useFirstMountState() {
  let isFirstRender = useRef(true);
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }

  return false;
}