import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg"
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-24 md:py-32 lg:py-40  relative z-0 overflow-x-clip ">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

        <div className=" absolute inset-0 -z-30 opacity-5"
          style={{
              backgroundImage: `url(${grainImage.src})` }}>
        </div>

        <div className="size-[560px] hero-ring "> </div>
        <div className="size-[760px] hero-ring "> </div>
        <div className="size-[960px] hero-ring "> </div>
        <div className="size-[1160px] hero-ring "> </div>
        {/* <div className="size-[1380px] hero-ring "> </div> */}
            {/* stars */}
        
        <HeroOrbit size={680} rotation={-75}>
            <StarIcon className="size-20 text-emerald-300 " />
        </HeroOrbit>    

        <HeroOrbit size={480} rotation={25}>
            <StarIcon className="size-10 text-emerald-300 " />
        </HeroOrbit>

        <HeroOrbit size={540} rotation={109}>
            <StarIcon className="size-7 text-emerald-300 " />
        </HeroOrbit>  

        <HeroOrbit size={405} rotation={-15}>
            <SparkleIcon className="size-9 text-emerald-300/25 " />
        </HeroOrbit>    

        <HeroOrbit size={400} rotation={75}>
            <SparkleIcon className="size-5 text-emerald-300/25 " />
        </HeroOrbit>  

        <HeroOrbit size={530} rotation={175}>
            <SparkleIcon className="size-10 text-emerald-300/25 " />
        </HeroOrbit>  

        <HeroOrbit size={640} rotation={145}>
            <SparkleIcon className="size-12 text-emerald-300/25 " />
        </HeroOrbit>  

        <HeroOrbit size={625} rotation={95}>
            <div className="size-4 rounded-full bg-emerald-300/25 " />
        </HeroOrbit> 

        <HeroOrbit size={685} rotation={-33}>
            <div className="size-3 rounded-full bg-emerald-300/25 " />
        </HeroOrbit> 

        <HeroOrbit size={525} rotation={-50}>
            <div className="size-2 rounded-full bg-emerald-300/25 " />
        </HeroOrbit> 
      </div>

      <div className=" container">

        <div className="flex flex-col items-center">
          <Image className=" size-[100px]" src={memojiImage} alt="hero section"/>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for new Projects</div>
          </div>
        </div>

        <div className=" max-w-lg mx-auto ">
          <h1 className="font-serif  text-2xl md:text-5xl text-center mt-6 tracking-wide">Develop Exceptional User Experience</h1>
          <p className="mt-4 text-center text-white/65 md:text-lg">
            I specialize in transforming designs into fully functional, responsive modern web applications. Let's discuss your next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-6">
          <button className=" inline-flex items-center gap-2 border border-white/25 px-6 h-11 rounded-xl">
            <span className="font-semibold">Explore More</span>
            <ArrowDown className=" size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-11 px-5 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>

    </div>
  )
};
