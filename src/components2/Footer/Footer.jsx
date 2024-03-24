import React from 'react';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';

const Footer = (props) => {
  return (
    <footer className="md:py:3 customContainer bg-black bg-opacity-10 py-2 text-center dark:bg-white dark:bg-opacity-10">
      <div className="my-2 flex justify-center gap-4  ">
        <a className="text-2xl " href="tel:+380997393067">
          <BiPhone />
        </a>
        <a
          target="_blank"
          className="text-2xl "
          href="https://www.youtube.com/@maslovcenter"
        >
          <AiFillYoutube />
        </a>
        <a
          target="_blank"
          className="text-2xl "
          href="https://instagram.com/maslov_centr?igshid=YmMyMTA2M2Y="
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <p className="font-medium">{props.t('info.Location')}</p>

      <p className="border-main-color border-t pt-3">
        © 2016 - 2023 Maslov Center, Inc. <br /> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
