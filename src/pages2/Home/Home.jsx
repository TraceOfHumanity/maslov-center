import React from 'react';

import Accordion from '../../components2/Accordion/Accordion';
import BannerItems from '../../components2/Slider/Slider';
import WhyWe from '../../components2/WhyWe/WhyWe';

const Home = (props) => {
  return (
    <div id="home" className="relative h-fit min-h-screen pb-4 ">
      <div className="">
        <div className=" banner relative mx-auto flex h-[100vw] max-h-[1000px] w-[100vw] max-w-[1000px] flex-col justify-center gap-2 sm:h-[70vw] sm:w-[70vw] ">
          <h1 className="px-8 md:px-12 ">{props.t('Banner.Title')}</h1>
          <p className="px-7 text-center text-xs md:px-10 md:text-xl lg:px-14 lg:text-2xl">
            {props.t('Banner.Subtitle')}
          </p>
          <button className="btn">
            <a href="tel:+380997393067">{props.t('Banner.Button')}</a>
          </button>
        </div>
      </div>

      <WhyWe t={props.t} />
      <section className="mt-20 px-5">
        <h2 id="services" className="">
          {props.t('Services.titles.mainTitle')}
        </h2>
        {/* TRAINING */}
        <Accordion index={0} title={props.t('Services.titles.trainingTitle')}>
          <p>{props.t('Services.training.description')}</p>

          <h4>{props.t('Services.training.MTB')}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <p className="smd:col-start-1 smd:col-end-3 ">
              {props.t('Services.training.MTBDescription')}
            </p>
            <img className=" serviseImg" src="/assets/mtb1.jpg" alt="" />
          </div>

          <h4>{props.t('Services.training.rule')}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <img className="serviseImg " src="/assets/pravilo.jpg" alt="" />
            <p className="smd:col-start-2 smd:col-end-4 ">
              {props.t('Services.training.ruleDescription')}
            </p>
          </div>

          <h4>{props.t('Services.training.gravityShoes')}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <p className="smd:col-start-1 smd:col-end-3 ">
              {props.t('Services.training.gravityShoesDescription')}
            </p>
            <img className="serviseImg " src="/assets/boots1.jpg" alt="" />
          </div>

          <h4>{props.t('Services.training.glisson')}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <img className="serviseImg " src="/assets/glisson.png" alt="" />
            <p className="smd:col-start-2 smd:col-end-4 ">
              {props.t('Services.training.glissonDescription')}
            </p>
          </div>
        </Accordion>
        {/* MASSAGE */}
        <Accordion index={1} title={props.t('Services.titles.massageTitle')}>
          <p>{props.t('Services.massage.description')}</p>

          <h4>{props.t('Services.massage.sedative')}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <p className="smd:col-start-1 smd:col-end-3 ">
              {props.t('Services.massage.sedativeDescription')}
            </p>
            <img
              className="serviseImg mb-4"
              src="/assets/massage2.jpg"
              alt="maslov massage"
            />
          </div>

          <h4>{props.t('Services.massage.therapeutic')}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <img
              className="serviseImg "
              src="/assets/massage3.jpg"
              alt="maslov massage"
            />
            <p className="smd:col-start-2 smd:col-end-4 ">
              {props.t('Services.massage.therapeuticDescription')}
            </p>
          </div>
        </Accordion>
        {/* phytotherapy */}
        <Accordion
          index={2}
          title={props.t('Services.titles.phytotherapyTitle')}
        >
          <p id="phytotherapy">
            {props.t('Services.phytotherapy.description')}
          </p>

          <div className="smd:grid grid-cols-3 gap-5">
            <img
              className="serviseImg "
              src="/assets/tea.jpg"
              alt="maslov yoga"
            />
            <div className="smd:col-start-2 smd:col-end-4 ">
              <p className="smd:text-xl font-semibold">
                {props.t('Services.phytotherapy.porridge1')}
              </p>
              <p className="smd:text-xl font-semibold">
                {props.t('Services.phytotherapy.porridge2')}
              </p>
              <p className="smd:text-xl font-semibold">
                {props.t('Services.phytotherapy.Tea1')}
              </p>
              <p className="smd:text-xl font-semibold">
                {props.t('Services.phytotherapy.Tea2')}
              </p>
              <p className="smd:text-xl font-semibold">
                {props.t('Services.phytotherapy.Tea3')}
              </p>
            </div>
          </div>
        </Accordion>
        {/* yoga */}
        <Accordion index={3} title={props.t('Services.titles.yogaTitle')}>
          <p>{props.t('Services.yoga.description')}</p>

          <div className="smd:grid grid-cols-3 gap-5">
            <img
              className="serviseImg "
              src="/assets/yoga.jpg"
              alt="maslov yoga"
            />
            <p className="smd:col-start-2 smd:col-end-4 ">
              {props.t('Services.yoga.more')}
            </p>
          </div>
        </Accordion>
        {/* BARREL */}
        <Accordion
          index={4}
          title={props.t('Services.titles.phytotherapeuticBarrelTitle')}
        >
          <div className="smd:grid grid-cols-3 gap-5">
            <img
              className="serviseImg "
              src="/assets/barrel.jpg"
              alt="maslov massage"
            />
            <p className="smd:col-start-2 smd:col-end-4 ">
              {props.t('Services.phytotherapeuticBarrel.description')}
            </p>
          </div>
        </Accordion>
      </section>
      {/* SLIDER gallery */}
      <section className="mt-10 px-5">
        <h2 id="gallery" className="">
          {props.t('gallery.Title')}
        </h2>
        <BannerItems />
      </section>
    </div>
  );
};

export default Home;
