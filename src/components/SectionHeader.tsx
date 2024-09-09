export const SectionHeader = ({
    title,
    eyebrow,
    description,
} : {
    title: String,
    eyebrow: String;
    description: String;
}) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <p className=" text-center font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-400 to to-sky-400 bg-clip-text text-transparent">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
            <p className=" text-center text-white/60 md:text-lg lg:text-xl max-w-md mx-auto mt-4">{description}.</p>
        </>
    )
}