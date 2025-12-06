import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import Star from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";

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

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-8 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-5 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-10 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <Star className="size-12 text-sky-400" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <Star className="size-8 text-sky-400" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <Sparkle className="size-14 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <Star className="size-28 text-sky-400" />
        </HeroOrbit>
        <HeroOrbit
          size={860}
          rotation={-180}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="50s"
        >
          <Star className="size-24 text-sky-400/50" />
        </HeroOrbit>
        <HeroOrbit
          size={880}
          rotation={-20}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="52s"
        >
          <Star className="size-12 text-sky-400/30" />
        </HeroOrbit>
        <HeroOrbit
          size={1000}
          rotation={90}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="55s"
        >
          <Star className="size-16 text-sky-400/70" />
        </HeroOrbit>
        <HeroOrbit
          size={1100}
          rotation={130}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="58s"
        >
          <Star className="size-8 text-sky-400/40" />
        </HeroOrbit>
        <HeroOrbit
          size={1200}
          rotation={-120}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="60s"
        >
          <Star className="size-20 text-sky-400/60" />
        </HeroOrbit>
        <HeroOrbit
          size={1350}
          rotation={-80}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="62s"
        >
          <Star className="size-24 text-sky-400/30" />
        </HeroOrbit>
        <HeroOrbit
          size={1450}
          rotation={160}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="65s"
        >
          <Star className="size-22 text-sky-400/35" />
        </HeroOrbit>
        <HeroOrbit
          size={1550}
          rotation={40}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="68s"
        >
          <Star className="size-12 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1650}
          rotation={-150}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="70s"
        >
          <Star className="size-16 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1750}
          rotation={20}
          shouldSpin
          spinDuration="6s"
          shouldOrbit
          orbitDuration="72s"
        >
          <Star className="size-20 text-sky-400/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image src={memojiImage} alt="memoji" width={100} height={100} />
          <div className="bg-gray-950 border border-gray-800 px-3 py-2 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full animate-ping absolute"></div>
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
