"use client";

import { useRef, useState } from "react";

type VisitKey = string | symbol;

// Tracks visited flags across client renders
const visitedKeys = new Set<VisitKey>();

export function useFirstVisit(key?: string) {
  const keyRef = useRef<VisitKey | undefined>(key);

  if (key !== undefined && keyRef.current !== key) {
    keyRef.current = key;
  }

  if (keyRef.current === undefined) {
    keyRef.current = Symbol("first-visit");
  }

  const [isFirstVisit] = useState(() => {
    const resolvedKey = keyRef.current;

    if (resolvedKey === undefined) {
      return false;
    }

    if (visitedKeys.has(resolvedKey)) {
      return false;
    }

    visitedKeys.add(resolvedKey);
    return true;
  });

  return isFirstVisit;
}
