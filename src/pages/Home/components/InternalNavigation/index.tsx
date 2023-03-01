import React from "react";
import {
  HiOutlineArrowSmRight,
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmUp,
  HiOutlineArrowSmDown,
} from "react-icons/hi";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  ScrollButtonsControls,
  VisibleButtonsUnion,
} from "../../hooks/useScrollButtons";

type Props = {
  scrollButtons: ScrollButtonsControls;
};

export default function InternalNavigation({ scrollButtons }: Props) {
  const { visibleButtons, topLeft, topRight, bottomLeft, bottomRight } =
    scrollButtons;

  const scrollToSection = (direction: "t" | "b" | "l" | "r") => {
    let elementRef = topLeft;
    console.log(visibleButtons);
    console.log(topRight);
    switch (visibleButtons) {
      case "tr":
        if (direction === "t") {
          elementRef = topLeft;
        } else {
          elementRef = bottomRight;
        }
        break;
      case "tl":
        if (direction === "t") {
          elementRef = topRight;
        } else {
          elementRef = bottomLeft;
        }
        break;
      case "br":
        if (direction === "b") {
          elementRef = bottomLeft;
        } else {
          elementRef = topRight;
        }
        break;
      case "bl":
        if (direction === "b") {
          elementRef = bottomRight;
        } else {
          elementRef = topLeft;
        }
        break;
    }
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        left: elementRef.current.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const transitionClassesTop = {
    enter: "animate__animated",
    enterActive: "animate__fadeInUp",
    exit: "animate__animated",
    exitActive: "animate__fadeOutDown",
  };

  const transitionClassesBottom = {
    enter: "animate__animated",
    enterActive: "animate__fadeInDown",
    exit: "animate__animated",
    exitActive: "animate__fadeOutUp",
  };

  const transitionClassesLeft = {
    enter: "animate__animated",
    enterActive: "animate__fadeInLeft",
    exit: "animate__animated",
    exitActive: "animate__fadeOutRight",
  };

  const transitionClassesRight = {
    enter: "animate__animated",
    enterActive: "animate__fadeInRight",
    exit: "animate__animated",
    exitActive: "animate__fadeOutLeft",
  };

  return (
    <>
      <TransitionGroup>
        {visibleButtons.includes("b") && (
          <CSSTransition timeout={400} classNames={transitionClassesBottom}>
            <button
              className="internal-navigation__icon internal-navigation__bottom"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("b");
              }}
            >
              <HiOutlineArrowSmDown />
            </button>
          </CSSTransition>
        )}
        {visibleButtons.includes("l") && (
          <CSSTransition timeout={400} classNames={transitionClassesLeft}>
            <button
              className="internal-navigation__icon internal-navigation__left"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("l");
              }}
            >
              <HiOutlineArrowSmLeft />
            </button>
          </CSSTransition>
        )}
        {visibleButtons.includes("r") && (
          <CSSTransition timeout={400} classNames={transitionClassesRight}>
            <button
              className="internal-navigation__icon internal-navigation__right"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("r");
              }}
            >
              <HiOutlineArrowSmRight />
            </button>
          </CSSTransition>
        )}
        {visibleButtons.includes("t") && (
          <CSSTransition timeout={400} classNames={transitionClassesTop}>
            <button
              className="internal-navigation__icon internal-navigation__top"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("t");
              }}
            >
              <HiOutlineArrowSmUp />
            </button>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}
