import ShinyText from "./ui/ShinyText";

export const Contact = () => {
  return (
    <section id="contact" className="w-full p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 min-h-[40vh]">
          <h2>
            Почніть турботу про
            <br />
            себе вже сьогодні
            {/* Готові зробити перший крок до здоровішого себе? */}
          </h2>

          <a href="tel:+380997393067">
            <ShinyText
              text="Зв'язатися"
              className="text-lg leading-10 sm:text-xl md:text-2xl"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
