
const SectionHeader = ({eyebrow, title, description}: {eyebrow: string, title: string, description: string}) => {
  return (
    <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            {eyebrow}
          </p>
        </div>
        <h2 className="text-center font-serif font-semibold tracking-wide text-3xl md:text-5xl mt-6">
          {title}
        </h2>
        <p className="text-center text-white/55 md:text-lg lg:text-xl mt-4 max-w-md mx-auto">
          {description}
        </p>
      </div>
  )
}

export default SectionHeader