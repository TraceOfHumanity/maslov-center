import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

export const links = [
  {
    href: "tel:+380997393067",
    icon: <BiPhone className="size-8" />,
    title: "phone",
  },
  {
    href: "https://www.youtube.com/@maslovcenter",
    icon: <AiFillYoutube className="size-8 text-red-500" />,
    title: "youtube",
  },
  {
    href: "https://instagram.com/maslov_centr?igshid=YmMyMTA2M2Y=",
    icon: <AiOutlineInstagram className="size-8" />,
    title: "instagram",
  },
];
