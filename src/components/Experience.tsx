const experience = [
  {
    title: "10+",
    description: "років досвіду",
  },
  {
    title: "1000+",
    description: "вдячних клієнтів",
  },
  {
    title: "12+",
    description: "терапевтичних методик",
  },
  
];

export const Experience = () => {
  return (
    <section className="w-full relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-2 border-[var(--color-shiny-text)]/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[512px] md:h-[512px] border-2 border-[var(--color-shiny-text)]/40 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute w-80 h-80 sm:w-96 sm:h-96 md:w-[768px] md:h-[768px] border-2 border-[var(--color-shiny-text)]/20 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute w-96 h-96 sm:w-[512px] sm:h-[512px] md:w-[1024px] md:h-[1024px] border-2 border-[var(--color-shiny-text)]/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
        {experience.map((item) => (
          <div key={item.title} className="text-center flex-1 max-w-[200px] p-2 sm:p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 sm:mb-4">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
