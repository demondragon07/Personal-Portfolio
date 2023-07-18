import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 6,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "UI/UX Design",
    projects: 3,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "VLSI ",
    projects: 1,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Hello World! This is Vibhu Kumar from BIT Mesra. Currently I am pursuing Btech in Electrical and Electronics Engineering (EEE) .",
  "Apart from all these I am trying my hands out in data science , competitive programming,web devlopment,UI designining and app devlopment. Looking forward to learn and explore ravishing technologies.",
];

export const workExp = [
  {
    place: "Internshala",
    tenure: "May 2023 -July-2023",
    role: "Verilog Programmer ",
    detail:
      "Used Verilog tool to design circuits that are implemented at the end product of industries. Improved timing analysis of  various circuits ."
  },

  {
    place: "Literary Society, BIT Mesra",
    tenure: "Nov 2020 - Nov 2021",
    role: "  Event Coordinator",
    detail:
      " Succesfully conducted activities like Aagaz, Mic Drop, Literati Combat and I am responsible for designing and creating marketing and publicity materials for promoting events and the club",
    }, 
  {
    place: "National Service Scheme(NSS)",
    tenure: " Nov 2020 -Nov 2022",
    role: "Volunteer",
    detail:
      "Sucessfully conducted activities like literary, road construction, awareness rallies, medical camps, cloth distribution, tree plantations and cleanliness drive in backward rural areas.",
  },
];

export const comments = [
  {
    name: "Souhardya Chatterjee",
    post: "EEESOC President",
    comment:
      "He is one of the best in the world",
    img: "./people2.png",
  },
  {
    name: "Rana Safal",
    post: "Walmart Intern",
    comment:
      "One of the most creative people I have ever met",
    img: "./people1.png",
  },
  {
    name: "Kshitij Raj",
    post: "Walmart Intern",
    comment:
      "Amazing Individual and Nice friend",
    img: "./people3.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Fantastic job on meeting the deadlines. Your work ethic never ceases to amaze me.",
    img: "./people5.png",
  },
  {
    name: "Gautam",
    post: "Adobe Manager",
    comment:
      "Nice Nature and Excellent Work",
    img: "./splash1.png",
  },
  {
    name: "Ankit",
    post: "Freelancer",
    comment:
      "Please allow me to commend you for your recent work submission. You exceeded my expectations.",
    img: "./people4.png",
  },
  {
    name: "Tanya",
    post: "SDE-1 at Microsoft",
    comment:
      "You must be proud of yourself for your professional growth these past few months. I know I am.",
    img: "./people6.png",
  },
 
  {
    name: "Rohan",
    post: "Businessman",
    comment:
      "Thank you for your hard work this past week. Your dedication helped us reach our goals.",
    img: "./people7.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
