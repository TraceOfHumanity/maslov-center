import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';

import { links } from 'utils/data';

export const Footer = () => {
  const [linkRefs] = useState([Array(links.length).fill(null)]);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = gsap.utils.toArray(linkRefs);
    gsap.from(items, {
      duration: 1,
      stagger: 0.1,
      x: 100,
      opacity: 0,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 95%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className="" ref={footerRef}>
      <div className="flex items-center justify-center gap-3 border-t border-textColor py-2">
        {links.map((link, index) => (
          <a
            key={index}
            className="text-2xl "
            href={link.href}
            target="_blank"
            rel="noreferrer"
            ref={(el) => (linkRefs[index] = el)}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2 border-t border-textColor py-2">
        <p>
          © 2016 - {new Date().getFullYear()} {` `}
          Maslov Center.
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
};
