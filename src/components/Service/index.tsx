import { ServiceCard } from "./Card";
import massage from "../../assets/massage.webp";
import tea from "../../assets/tea.webp";
import training from "../../assets/training.webp";
import fito from "../../assets/barrel.webp";

const services = [
  {
    title: "Масаж",
    description:
      "Індивідуальний та терапевтичний підхід для зняття напруги, поліпшення кровообігу та відновлення м'язової функції.",
    imageUrl: massage,
    extra: [
      {
        title: "Тривалість сеансу",
        description: "40-80 хв",
      },
    ],
  },
  {
    title: "Кашиці та чаї Маслова",
    description:
      "Унікальні фітозбори для підтримки роботи організму, створені за авторськими рецептами.",
    imageUrl: tea,
    extra: [],
  },
  {
    title: "Фізичні тренування",
    description:
      "Вправи з реабілітологом, що поєднують лікувальну фізкультуру, йогу та дихальні техніки. Використовуємо тренажери: МТБ, ПравІло, інверсійні черевики, петлю Гліссона та інші для м'якого й ефективного відновлення.",
    imageUrl: training,
    extra: [
      {
        title: "Тривалість сеансу",
        description: "60 хв",
      },
    ],
  },

  {
    title: "Фітобочка",
    description:
      "Теплова SPA-процедура з лікарськими травами для омолодження та розслаблення тіла.",
    imageUrl: fito,
    extra: [
      {
        title: "Тривалість",
        description: "60хв",
      },
      {
        title: "Рівень релаксації",
        description: "100%",
      },
    ],
  },
];

export const Service = () => {
  return (
    <section
      id="services"
      className="py-4 w-full flex flex-col gap-12 md:gap-20 relative z-10"
    >
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </section>
  );
};
