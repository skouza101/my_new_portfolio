"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/ui/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaServer, FaRocket } from "react-icons/fa6";

const experience = [
  {
    title: "Frontend Developer",
    period: "2021 - 2024",
    description:
      "Started my journey mastering HTML, CSS, and React to build responsive and interactive user interfaces. I focused on creating pixel-perfect designs and seamless user experiences.",
    color: "from-sky-400 to-blue-500",
    borderColor: "border-sky-400",
    dotColor: "bg-sky-400",
    icon: FaCode,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Backend Developer",
    period: "2024 - 2025",
    description:
      "Deepened my skills with Node.js, Python, and Databases to create scalable server-side systems. I learned to build robust APIs, manage authenticated sessions, and optimize performance.",
    color: "from-purple-400 to-pink-500",
    borderColor: "border-purple-400",
    dotColor: "bg-purple-400",
    icon: FaServer,
    skills: [
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Docker",
    ],
  },
  {
    title: "Fullstack Developer",
    period: "2025 - Present",
    description:
      "Bridging the gap between front and back end to deliver complete, high-performance web solutions. I now architect end-to-end applications with Next.js, integrating complex logic with beautiful UIs.",
    color: "from-emerald-300 to-sky-400",
    borderColor: "border-emerald-400",
    dotColor: "bg-emerald-400",
    icon: FaRocket,
    skills: ["Next.js", "TypeScript", "Prisma", "AWS", "CI/CD"],
  },
];

export const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container" ref={containerRef}>
        <SectionHeader
          eyebrow="My Journey"
          title="Career Progression"
          description="Evolving from a UI specialist to a versatile Fullstack Engineer."
        />
        <div className="mt-12 lg:mt-20 flex flex-col gap-16 md:gap-20 relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/10 md:left-1/2 md:-translate-x-1/2 z-0 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-sky-400 via-purple-500 to-emerald-400 origin-top rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } relative z-10`}
            >
              <div className="w-full pl-20 md:pl-0 md:w-[calc(50%-2rem)]">
                <Card
                  className={`group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-white/5`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shrink-0`}
                      >
                        <exp.icon className="size-6 text-gray-900" />
                      </div>
                      <div>
                        <div
                          className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold uppercase tracking-widest text-xs mb-1`}
                        >
                          {exp.period}
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl font-bold">
                          {exp.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-white/60 leading-relaxed text-sm md:text-base mb-5">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`absolute md:static left-2  -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 size-12 rounded-full bg-gray-900 border-4 ${exp.borderColor} z-20 flex items-center justify-center shadow-lg`}
              >
                <exp.icon className="size-5 text-white" />
              </motion.div>

              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
