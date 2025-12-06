import grain from "@/assets/images/grain.jpg";
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-800 rounded-3xl relative z-0 h-full after:z-10 after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 overflow-hidden after:pointer-events-none">
      <div
        className="absolute inset-0 -z-10 opacity-5 "
        style={{ backgroundImage: `url(${grain.src})` }}
      ></div>
      {children}
    </div>
  );
};

export default Card;

