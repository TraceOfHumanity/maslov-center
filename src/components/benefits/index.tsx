import { useTranslation } from "react-i18next";
import { AiOutlineApartment } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { GiFlyingFlag } from "react-icons/gi";
import { MdOutlineChecklist } from "react-icons/md";
import { SectionWrapper } from "../sectionWrapper";

export const Benefits = () => {
  const { t } = useTranslation();
  const items = [
    {
      icon: <AiOutlineApartment />,
      description: t("whyWe.comprehensiveApproach"),
    },
    {
      icon: <MdOutlineChecklist />,
      description: t("whyWe.relation"),
    },
    {
      icon: <BiTimeFive />,
      description: t("whyWe.time"),
    },
    {
      icon: <GiFlyingFlag />,
      description: t("whyWe.goal"),
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
      <SectionWrapper className="flex flex-col gap-5 lg:col-start-1 lg:col-end-3">
        <h2 className="text-center ">{t("whyWe.title")}</h2>
        <ul className="grid gap-3 ">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2 ">
              <div className="text-2xl">{item.icon}</div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </SectionWrapper>
      <img className="rounded-lg" src="/assets/whyWe.jpg" alt="" />
    </div>
  );
};
