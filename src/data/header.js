import { CiBaseball } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "HOME",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "Swiper",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "포트폴리오",
        icon: <CiDumbbell />,
        src: "/portfolio"
    },
    {
        title: "추천개발자",
        icon: <CiDumbbell />,
        src: "/developer"
    },
    {
        title: "채널",
        icon: <CiDumbbell />,
        src: "/channel"
    },
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]