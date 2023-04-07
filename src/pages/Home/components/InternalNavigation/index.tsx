import {
  HiOutlineArrowSmRight,
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmUp,
  HiOutlineArrowSmDown,
} from "react-icons/hi";
import {
  ScrollButtonsControls,
  VisibleButtonsUnion,
} from "../../hooks/useScrollButtons";
import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  scrollButtons: ScrollButtonsControls;
};

export default function InternalNavigation({ scrollButtons }: Props) {
  const { visibleButtons, topLeft, topRight, bottomLeft, bottomRight } =
    scrollButtons;

  const scrollToSection = (direction: "t" | "b" | "l" | "r") => {
    let elementRef = topLeft;
    console.log("visibleButtons");
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
      elementRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  };

  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {visibleButtons.includes("b") && (
        <motion.button
          key="b"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="internal-navigation__button internal-navigation__bottom"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("b");
          }}
        >
          <HiOutlineArrowSmDown className="internal-navigation__icon" />
        </motion.button>
      )}
      {visibleButtons.includes("l") && (
        <motion.button
          key="l"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="internal-navigation__button internal-navigation__left"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("l");
          }}
        >
          <HiOutlineArrowSmLeft className="internal-navigation__icon" />
        </motion.button>
      )}
      {visibleButtons.includes("r") && (
        <motion.button
          key="r"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="internal-navigation__button internal-navigation__right"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("r");
          }}
        >
          <HiOutlineArrowSmRight className="internal-navigation__icon" />
        </motion.button>
      )}
      {visibleButtons.includes("t") && (
        <motion.button
          key="t"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="internal-navigation__button internal-navigation__top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("t");
          }}
        >
          <HiOutlineArrowSmUp className="internal-navigation__icon" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
