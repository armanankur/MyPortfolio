import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl tracking-wider"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Latest Works
      </motion.h2>

      <div>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="mb-12 flex flex-wrap lg:justify-center "
          >
            {/* <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 "
            >
              <img
                src={project.image}
                alt={project.title}
                width={320}
                height={450}
                className="rounded-lg mb-6 border border-slate-300 "
              />
            </motion.div> */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 "
            >
              <div className="relative w-fit">
                {/* Gradient Shadow */}
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-violet-600 via-rose-600 to-red-600 opacity-50 blur-md"></div>

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  width={320}
                  height={450}
                  className="relative rounded-lg mb-6 border border-slate-300"
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {Array.isArray(project.technologies) &&
                project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-3 text-stone-900 rounded bg-gradient-to-r from-slate-300 to-slate-400 p-2 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}

              <div className="flex items-center mt-2 gap-2">
                {Array.isArray(project.sourceCode) &&
                  project.sourceCode.map((code, idx) => (
                    <div className="mt-2">
                      <a
                        href={code.url}
                        className="flex items-center mt-2 "
                        target="_blank"
                      >
                        <span
                          key={idx}
                          // className="mr-3 bg-transparent border border-stone-200 rounded-full text-stone-100 px-4 py-2 text-sm "
                          className="mr-3 bg-transparent border border-stone-200 rounded-full px-4 py-2 text-sm bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%]"
                        >
                          {code.name}
                        </span>
                      </a>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
