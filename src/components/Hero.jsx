import profilePic from "../assets/Profile1.jpg";
import { HERO_CONTENT } from "../constants";
import { motion, stagger } from "framer-motion";

export const LayoutWithRadialGradient = ({ children }) => {
  return (
    <div className="">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #6366f1 100%)",
        }}
      />

      {/* Foreground Content */}
      <div className=" z-10">{children}</div>
    </div>
  );
};

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="profilepic"
              className="border border-stone-500 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              width={650}
              height={500}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-normal lg:text-8xl"
            >
              Ankur Anand
            </motion.h2>
            <motion.span className="bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-3xl tracking-tighter text-transparent mt-2">
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-1 max-w-lg py-6 text-xl leading-relaxed tracking-tight font-redhat"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href="/AnkurAnandResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
              className="px-4 py-3 rounded-full border border-stone-100 shadow-lg  ease-in-out"
            >
              <LayoutWithRadialGradient>
                <div className="flex items-center justify-center">
                  <h1 className="text-sm font-redhat bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%]">
                    {" "}
                    Download Resume
                  </h1>
                </div>
              </LayoutWithRadialGradient>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
