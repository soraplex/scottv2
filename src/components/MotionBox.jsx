import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const defaultFade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const FadeInBox = (props) => {
  return <MotionBox {...defaultFade} {...props} />;
};

export default FadeInBox;
