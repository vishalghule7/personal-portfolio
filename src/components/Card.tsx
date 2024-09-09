import GrainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800  rounded-3xl z-0 relative overflow-hidden after:z-10 border-2 border-white/20 p-6 ",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${GrainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
