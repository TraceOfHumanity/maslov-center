import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "react-i18next";
import type { ServiceItem } from "./types";
import { SectionWrapper } from "../sectionWrapper";
import { cn } from "@/utils/cn";


export const Services = () => {
  const { t } = useTranslation();

  const serviceItems: ServiceItem[] = [
    {
      serviceTitle: t('services.titles.trainingTitle'),
      serviceDescription: t('services.training.description'),
      variants: [
        {
          title: t('services.training.MTB'),
          description: t('services.training.MTBDescription'),
          image: '/assets/mtb1.jpg',
        },
        {
          title: t('services.training.rule'),
          description: t('services.training.ruleDescription'),
          image: '/assets/pravilo1.jpg',
        },
        {
          title: t('services.training.gravityShoes'),
          description: t('services.training.gravityShoesDescription'),
          image: '/assets/boots1.jpg',
        },
        {
          title: t('services.training.glisson'),
          description: t('services.training.glissonDescription'),
          image: '/assets/glisson.png',
        },
      ],
    },
    {
      serviceTitle: t('services.titles.massageTitle'),
      serviceDescription: t('services.massage.description'),
      variants: [
        {
          title: t('services.massage.sedative'),
          description: t('services.massage.sedativeDescription'),
          image: '/assets/massage2.jpg',
        },
        {
          title: t('services.massage.therapeutic'),
          description: t('services.massage.therapeuticDescription'),
          image: '/assets/massage3.jpg',
        },
      ],
    },
    {
      serviceTitle: t('services.titles.phytotherapyTitle'),
      serviceDescription: t('services.phytotherapy.description'),
      variants: [
        {
          title: t('services.phytotherapy.porridge1'),
        },
        {
          title: t('services.phytotherapy.porridge2'),
        },
        {
          title: t('services.phytotherapy.tea1'),
        },
        {
          title: t('services.phytotherapy.tea2'),
        },
        {
          title: t('services.phytotherapy.tea3'),
        },
      ],
    },
    {
      serviceTitle: t('services.titles.yogaTitle'),
      serviceDescription: t('services.yoga.description'),
      variants: [
        {
          title: '',
          description: t('services.yoga.more'),
          image: '/assets/yoga.jpg',
        },
      ],
    },
    {
      serviceTitle: t('services.titles.phytotherapeuticBarrelTitle'),
      serviceDescription: t('services.phytotherapeuticBarrel.description'),
      variants: [
        {
          title: '',
          description: t('services.phytotherapeuticBarrel.description'),
          image: '/assets/barrel.jpg',
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="text-center">{t('services.titles.mainTitle')}</h2>
      <Accordion type="multiple">
        {serviceItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.serviceTitle}</AccordionTrigger>
            <AccordionContent className="grid gap-3">
              {item.variants.map((variant, index) => (
                <SectionWrapper key={index} className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3")}>
                  {index % 2 === 0 && variant.image && (
                    <img className="col-span-full sm:col-span-1 rounded-lg" src={variant.image} alt={variant.title} />
                  )}
                  <h3 className="col-span-full row-start-1 text-center">{variant.title}</h3>
                  {variant.description && <p className="col-span-2">{variant.description}</p>}
                  {index % 2 !== 0 && variant.image && (
                    <img className="col-span-full sm:col-span-1 rounded-lg" src={variant.image} alt={variant.title} />
                  )}
                </SectionWrapper>
              ))}
            </AccordionContent>

          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
};
