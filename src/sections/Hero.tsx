import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import Star from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-52 lg:py-64 relative z-0 overflow-hidden ">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-10 opacity-10 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className=" size-[750px] hero-ring"></div>
        <div className="size-[940px] hero-ring"></div>
        <div className="size-[1175px] hero-ring"></div>
        <div className="size-[1475px] hero-ring"></div>
        <div className="size-[1875px] hero-ring"></div>

        <Star className="size-14 text-sky-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[370px] animate-pulse" />
        <Star
          className="size-10 text-sky-500/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[360px] ml-[80px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="size-12 text-sky-500/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[350px] -mt-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <Star
          className="size-8 text-sky-500/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[340px] mt-[150px] animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        <Star
          className="size-20 text-sky-500/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[440px] ml-[150px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <Star
          className="size-16 text-sky-500/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[420px] -ml-[200px] animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <Star
          className="size-14 text-sky-500/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[450px] mt-[120px] animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />
        <Star
          className="size-18 text-sky-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[460px] -mt-[80px] animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />

        <Star
          className="size-28 text-sky-500/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[550px] -ml-[200px] animate-pulse"
          style={{ animationDelay: "0.3s" }}
        />
        <Star
          className="size-24 text-sky-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[520px] ml-[280px] animate-pulse"
          style={{ animationDelay: "2.2s" }}
        />
        <Star
          className="size-22 text-sky-500/35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[560px] -mt-[180px] animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <Star
          className="size-20 text-sky-500/45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[580px] mt-[100px] animate-pulse"
          style={{ animationDelay: "2.8s" }}
        />
        <Sparkle
          className="size-20 text-sky-500/45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[150px] -mt-[200px] animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />

        <Sparkle
          className="size-20 text-sky-500/45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[200px] mt-[300px] md:-ml-[350px] animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />

        <Sparkle
          className="size-20 text-sky-500/45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[580px] mt-[100px] animate-pulse"
          style={{ animationDelay: "3.8s" }}
        />
        <Sparkle
          className="size-20 text-sky-500/90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[580px] -mt-[300px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image src={memojiImage} alt="memoji" width={100} height={100} />
          <div className="bg-gray-950 border border-gray-800 px-3 py-2 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm lg:text-lg">available for projects</div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-center font-serif font-bold mt-8 tracking-wide ">
            Building exceptional user experiences
          </h1>
          <p className="text-lg lg:text-xl text-center text-white/60 tracking-wide mt-4">
            I specialize in user-centered design, crafting intuitive and
            engaging interfaces for websites, mobile apps, and software to
            ensure seamless and enjoyable user experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button className="inline-flex items-center gap-2 px-6 py-2 border border-gray-800 rounded-xl h-12 ">
            <span className="text-sm lg:text-base font-semibold tracking-wide">
              Explore my work
            </span>
            <ArrowDownIcon className="size-5" />
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-2 border border-gray-800 bg-white text-gray-800 rounded-xl h-12">
            <span className="text-sm lg:text-base font-semibold tracking-wide">
              👋
            </span>
            <span className="text-sm lg:text-base font-semibold tracking-wide">
              Let's chat
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
