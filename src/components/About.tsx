import ShinyText from "./ui/ShinyText";

export const About = () => {
  return (
    <section id="about" className="w-full text-center p-4 max-w-4xl mx-auto">
      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight leading-8">
        <ShinyText text="Маслов Центр" /> — це команда професіоналів у сфері{" "}
        <br className="hidden sm:block" />
        <ShinyText text="реабілітації" />, <ShinyText text="масажу" />,{" "}
        <ShinyText text="йоги" /> та <ShinyText text="фітотерапії" />.
        <br className="hidden sm:block" /> Ми створюємо{" "}
        <ShinyText text="індивідуальні" /> програми{" "}
        <br className="hidden sm:block" />
        для відновлення <ShinyText text="здоров'я" />
        <br className="hidden sm:block" /> поєднуючи сучасні методики та
        природні підходи
      </span>
    </section>
  );
};
