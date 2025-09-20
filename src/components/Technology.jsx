

import { FaJsSquare } from "react-icons/fa";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="pb-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }} // <-- FIXED HERE
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-5"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <TbBrandNextjs className="text-6xl" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <BiLogoTypescript className="text-6xl text-blue-600 " />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <SiMongodb className="text-6xl text-green-900" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <RiTailwindCssFill className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <FaNodeJs className="text-6xl text-green-600" />
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-5 mt-4"
      >
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaGitAlt className="text-6xl text-orange-600" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <FaAngular className="text-6xl text-red-700" />
        </motion.div>
        <motion.div className="p-4" initial="initial"
          animate="animate"
          variants={iconVariants(5)}>
          <FaBootstrap className="text-6xl text-purple-600" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <FaHtml5 className="text-6xl text-orange-600" />
        </motion.div>
        <motion.div className="p-4" initial="initial"
          animate="animate"
          variants={iconVariants(6)}>
          <FaJsSquare className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <FaCss3Alt className="text-6xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
