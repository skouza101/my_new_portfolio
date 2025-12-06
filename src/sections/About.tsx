import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/ui/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import memojiSmile from "@/assets/images/memoji-smile.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import map from "@/assets/images/map.png";

const skills = [
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "CSS",
    icon: CssIcon,
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Chrome",
    icon: ChromeIcon,
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
  },
];

const myHobbies = [
  {
    name: "Gaming",
    icon: "🎮",
  },
  {
    name: "Reading",
    icon: "📚",
  },
  {
    name: "Traveling",
    icon: "✈️",
  },
  {
    name: "Coding",
    icon: "💻",
  },
  {
    name: "Music",
    icon: "🎵",
  },
  {
    name: "Fitness",
    icon: "🏋️",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div className="container mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Card>
              <div className="flex flex-col items-center text-center px-8 py-8 md:px-10 md:py-10 lg:px-10 lg:py-12 h-full justify-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="size-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 animate-pulse"></div>
                  <span className="text-sm uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                    Available for work
                  </span>
                </div>

                <div className="relative mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-xl opacity-40 scale-110 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative p-1 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-500/20 group-hover:from-sky-400/30 group-hover:to-blue-500/30 transition-colors duration-300">
                    <Image
                      src={memojiSmile}
                      alt="Memoji Smile"
                      className="size-28 md:size-32 lg:size-36 relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3">
                  Passionate Developer
                </h3>

                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                  I craft beautiful, performant web experiences with modern
                  technologies and clean, maintainable code.
                </p>
              </div>
            </Card>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <Card>
              <div className="px-8 py-6 md:px-10 md:py-8 lg:px-10 lg:py-10 h-full">
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <StarIcon className="size-5 text-sky-400" />
                      <h3 className="text-sm md:text-base uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                        My Toolbox
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                      Technologies and tools I use to bring ideas to life.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mt-auto">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-sky-400/10 hover:to-blue-500/10 border border-transparent hover:border-white/10 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <skill.icon className="size-8 md:size-10 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm md:text-base font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <Card>
              <div className="px-8 py-6 md:px-10 md:py-8 lg:px-10 lg:py-10 h-full">
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <StarIcon className="size-5 text-sky-400" />
                      <h3 className="text-sm md:text-base uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                        Beyond the Code
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                      When I&apos;m not coding, you&apos;ll find me exploring
                      these interests.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {myHobbies.map((hobby, index) => (
                      <div
                        key={index}
                        className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-white/10 hover:border-sky-400/50 hover:from-sky-400/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-300 cursor-default"
                      >
                        <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                          {hobby.name}
                        </span>
                        <span className="text-lg md:text-xl group-hover:scale-125 transition-transform duration-300">
                          {hobby.icon}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-1 lg:col-span-1">
            <Card>
              <div className="relative h-full min-h-[320px] overflow-hidden group">
                <Image
                  src={map}
                  alt="Map"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/80 backdrop-blur-sm border border-white/10">
                    <div className="size-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-xs md:text-sm font-medium text-white/90">
                      Based in Morocco
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse scale-150"></div>
                    <div className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <Image
                        src={memojiSmile}
                        alt="My Location"
                        className="size-16 md:size-20 relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
