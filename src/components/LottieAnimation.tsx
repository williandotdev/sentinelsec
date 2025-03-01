
import React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationPath: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

const LottieAnimation = ({
  animationPath,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
}: LottieAnimationProps) => {
  return (
    <div className={className}>
      <Lottie
        animationData={animationPath}
        loop={loop}
        autoplay={autoplay}
        // Changed from speed to animationSpeed which is the correct property name
        animationSpeed={speed}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </div>
  );
};

export default LottieAnimation;
