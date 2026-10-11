import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-center gap-6 my-[8vh] max-w-4xl mx-auto p-4">
      <img
        src="/logo.svg"
        alt="Maslov Center"
        className="w-2/3 mx-auto mb-[10vh] md:w-2/5"
      />
      <h1>Реабілітація | Масаж | Йога</h1>
      <p className="text-neutral-300 text-lg sm:text-xl font-extralight">
        Рух без болю — це не мрія, а результат уважної роботи наших спеціалістів
      </p>
      <Button className="w-fit mx-auto" speed="5s">
        <a href="tel:+380997393067">Зв'язатися</a>
      </Button>
    </section>
  );
};
