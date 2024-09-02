import StarIcon from "@/assets/icons/star.svg"

const words = [
  "Performance",
  "Secure",
  "Reusable",
  "Optimised",
  "Interactive",
  "Responsive",
  "Scalable",
  "User Friendly",
  "Reliable",
  "Usable",
  "Modern",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-20 overflow-x-clip">
      <div className=" bg-gradient-to-r from-emerald-300 to bg-sky-400 -rotate-3 -mx-3">
        <div className=" flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_90%,transparent)]">
          <div className=" flex flex-none gap-4 py-3">
            {words.map(word => (
              <div key={word} className="inline-flex items-center gap-4 text-gray-900 uppercase font-extrabold text-sm ">
                <span>{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
