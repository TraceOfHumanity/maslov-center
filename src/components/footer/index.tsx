import { useTranslation } from "react-i18next";

import { links } from "./data";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center justify-center gap-3 border-t border-textColor py-2">
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noreferrer">
            <Button className="text-lg " variant="secondary">
              {link.icon}
              {link.title === "phone" && t("banner.button")}
            </Button>
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
