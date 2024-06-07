import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Projects() {
  const { scrollYProgress } = useViewportScroll();

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="h-screen overflow-hidden">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="flex justify-center items-center">
        <motion.div className="w-1/2" style={{ translateY }}>
          <div className="relative">
            <img
              src="https://via.placeholder.com/400"
              alt="Project"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        <div className="w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Project Title</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
