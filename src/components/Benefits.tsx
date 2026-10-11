import Muscle from "../assets/muscle.svg";
import Wellness from "../assets/wellness.svg";
import Time from "../assets/time.svg";
import Target from "../assets/target.svg";

export const Benefits = () => {
  const benefits = [
    {
      title: "Комплексний підхід",
      description:
        "Ми пропонуємо комплексний підхід до фізичного та психічного благополуччя, включаючи масаж, йогу, фітнес-тренування, сауну, фітотерапію та супутні методи.",
      icon: Wellness,
    },
    {
      title: "Індивідуальні заняття",
      description:
        "У нашому реабілітаційному центрі ми надаємо пріоритет індивідуальним планам лікування, експертним знанням, винятковому обслуговуванню клієнтів і доброзичливій атмосфері.",
      icon: Target,
    },
    {
      title: "Гнучкий графік",
      description:
        "Гнучкий графік роботи, що дозволяє зручно планувати візити до центру.",
      icon: Time,
    },
    {
      title: "Довготривала підтримка",
      description:
        "Наша мета полягає не лише у відновленні здоров'я, але й у підтримці його на довготривалий період. Тому ми надаємо клієнтам необхідні поради та рекомендації, щоб зберегти успішний результат.",
      icon: Muscle,
    },
  ];

  return (
    <section id="benefits" className="w-full py-8 sm:py-12 md:py-16 relative z-10">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="mb-4">
          Переваги
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-card-text font-light max-w-2xl mx-auto">
          Чому варто обрати саме наш центр для відновлення здоров'я
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group p-6 sm:p-8 bg-card-background rounded-3xl border border-shiny-text hover:border-primary transition-all duration-300"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                <img className="w-10 h-10" src={benefit.icon} alt={benefit.title} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-card-text font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
