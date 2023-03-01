import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export type VisibleButtonsUnion = "tr" | "tl" | "br" | "bl";

export type ScrollButtonsControls = {
  visibleButtons: VisibleButtonsUnion;
  topLeft: React.MutableRefObject<HTMLDivElement | null>;
  topRight: React.MutableRefObject<HTMLDivElement | null>;
  bottomLeft: React.MutableRefObject<HTMLDivElement | null>;
  bottomRight: React.MutableRefObject<HTMLDivElement | null>;
  setRefsTopLeft: (node: HTMLDivElement) => void;
  setRefsTopRight: (node: HTMLDivElement) => void;
  setRefsBottomLeft: (node: HTMLDivElement) => void;
  setRefsBottomRight: (node: HTMLDivElement) => void;
};

export const useScrollButtons = (
  threshold: number = 0.2
): ScrollButtonsControls => {
  const { ref: topLeftRef, inView: topLeftInView } = useInView({ threshold });
  const { ref: bottomLeftRef, inView: bottomLeftInView } = useInView({
    threshold,
  });
  const { ref: topRightRef, inView: topRightInView } = useInView({ threshold });
  const { ref: bottomRightRef, inView: bottomRightInView } = useInView({
    threshold,
  });

  const [topLeft, bottomLeft, topRight, bottomRight] = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const setRefsTopLeft = useCallback(
    (node: HTMLDivElement) => {
      topLeft.current = node;
      topLeftRef(node);
    },
    [topLeftRef, topLeft]
  );

  const setRefsBottomLeft = useCallback(
    (node: HTMLDivElement) => {
      bottomLeft.current = node;
      bottomLeftRef(node);
    },
    [bottomLeftRef, bottomLeft]
  );

  const setRefsTopRight = useCallback(
    (node: HTMLDivElement) => {
      topRight.current = node;
      topRightRef(node);
    },
    [topRightRef, topRight]
  );

  const setRefsBottomRight = useCallback(
    (node: HTMLDivElement) => {
      bottomRight.current = node;
      bottomRightRef(node);
    },
    [bottomRight, bottomRightRef]
  );

  const [visibleButtons, setVisibleButtons] =
    useState<VisibleButtonsUnion>("br");

  useEffect(() => {
    if (topLeftInView) {
      setVisibleButtons("br");
    }
    if (bottomLeftInView) {
      setVisibleButtons("tr");
    }
    if (topRightInView) {
      setVisibleButtons("bl");
    }
    if (bottomRightInView) {
      setVisibleButtons("tl");
    }
  }, [topLeftInView, topRightInView, bottomLeftInView, bottomRightInView]);

  return {
    visibleButtons,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    setRefsTopLeft,
    setRefsTopRight,
    setRefsBottomLeft,
    setRefsBottomRight,
  };
};
