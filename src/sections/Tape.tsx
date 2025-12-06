import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Scalable",
  "Responsive",
  "Modern",
  "Customizable",
  "Fast",
  "secure",
  "search engine optimized",
  "accessible",
  "easy to use",
  "user friendly",
  "interactive",
  "responsive",
];

export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
          {words.map((word, index) => (
            <div key={index} className="inline-flex gap-4 items-center">
              <span className="text-gray-900 font-extrabold uppercase text-sm">{word}</span>
              <StarIcon className="size-6 text-gray-900" />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
