import React from "react";
import { AnimatePresence } from "framer-motion";
import AnimationFour from "./AnimationFour";
import AnimationOne from "./AnimationOne";
import AnimationThree from "./AnimationThree";
import AnimationTwo from "./AnimationTwo";
import RenderIf from "./RenderIf";

interface AnimationProps {
  id: number;
  activeindex: number;
}

function Animations({ id, activeindex }: AnimationProps) {
  return (
    <AnimatePresence mode="wait">
      <RenderIf condition={id === activeindex}>
        <AnimationOne />
      </RenderIf>
      <RenderIf condition={id === activeindex}>
        <AnimationTwo />
      </RenderIf>
      <RenderIf condition={id === activeindex}>
        <AnimationThree />
      </RenderIf>
      <RenderIf condition={id === activeindex}>
        <AnimationFour />
      </RenderIf>
    </AnimatePresence>
  );
}

export default Animations;
