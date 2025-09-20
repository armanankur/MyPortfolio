import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4  lg:text-left"
          >
            <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            <p className="mb-2 text-sm text-stone-400 bg-radial-ellipse-top from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text animate-gradient-x bg-[length:200%]">
              {experience.location}
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4"
          >
            <h3 className=" font-semibold mb-2">
              {experience.role} -{" "}
              <span className="text-md font-semibold tracking-wider bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%]">
                {experience.company}.{" "}
                <span className=" text-xs font-normal bg-conic-bottom-left from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text animate-gradient-x bg-[length:200%]">{`(${experience.employementType})`}</span>
              </span>
            </h3>
            <p className=" text-stone-400 mb-4 ">{experience.description}</p>

            <div className="flex flex-wrap justify-start items-center gap-1">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 px-2 py-1  text-stone-900 rounded bg-gradient-to-r from-slate-300 to-slate-400  text-sm font-medium "
                >
                  {" "}
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
