import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
// import { P } from 'ts-pattern';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Jacky Mo's Homepage",
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jacky Mo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Welcome! I study Computer Science at <strong className="text-stone-100">USC</strong>. 
        With a particular interest in Full Stack Development and Natural Language Processing, I'm always eager to explore and innovate. 
        Currently, I am at <strong className="text-stone-100"><a href="https://luka-group.github.io/">LUKA Lab</a></strong> and <strong className="text-stone-100"><a href="https://dill-lab.github.io/">DILL Lab</a></strong>,
        working on entity bias and backdoor attacks.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my freetime, I love playing basketball/football or exploring the world in Legend of Zelda: Tears of the Kingdom. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Fluent in a variety of programming languages including Java, Python, JavaScript, 
  and C++, my true love lies with C++. Exploring and innovating are more than just hobbies - 
  they're a way of life. Here's a snapshot of me!`,
  aboutItems: [
    {label: 'Location', text: 'Los Angeles, CA', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Work Out, Video Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'Cantonese',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'Flutter',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Java',
        level: 7,
      },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
  {
    name: 'NLP and Deep Learning Related',
    skills: [
      {
        name: 'PyTorch',
        level: 6,
      },
      {
        name: 'HuggingFace',
        level: 6,
      },
      {
        name: 'Transformers',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Mubu - The Worry-Relieving Companion',
    description: 'A meticulously crafted application powered by Flutter (alredy on App Store). Designed to act as your personal sentiment tracker, it records and analyzes your emotional patterns, providing insightful perspectives on your mental well-being. Mubu‘s specially curated series of exercises guide you on a path towards relaxation and focus, acting as a supportive tool for mental health management. While not a replacement for professional help, Mubu offers strategies that could help alleviate everyday stresses, bolster concentration, and contribute to overall mental resilience.',
    url: 'https://apps.apple.com/us/app/%E6%9C%A8%E4%B8%8D-%E8%A7%A3%E5%BF%A7%E4%BC%B4%E4%BE%A3/id1597427913',
    image: porfolioImage3,
  },
  {
    title: 'Movie Search',
    description: 'A user-centric movie search engine, designed and built to streamline the movie discovery and organization process. It leverages the TMDB movie API for fetching real-time data and SQL for robust database management. The platform’s intuitive user interface and personalized movie recommendations, shaped by user history, create an engaging user experience. Unique montages are generated from user movie lists, adding a visual appeal.',
    url: 'https://github.com/jacky-mo-1111/Movie_Search',
    image: porfolioImage2,
  },
  {
    title: 'Battling Food Waste with Data Science',
    description: 'This is a project I did from GRIDS Hackthon. We use XGBoost model to train on data of grocery consumption, then analyzing the source of food waste.',
    url: '/assets/JSS_PPT_FInal.pdf',
    image: porfolioImage1,
  },
  
  
  {
    title: 'Trojan Scheduler',
    description: 'A web app to help USC student to select GE classes based on their schedules and professors‘ rating on Rate My Professor',
    url: 'https://github.com/jacky-mo-1111/trojan_scheduler',
    image: porfolioImage4,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2020 - May 2024',
    location: 'University of Southern California',
    title: 'Bachelor in Computer Science',
    content: (
      <>
        <p>GPA: 3.8/4.0</p>
        <p>USC Dean's List 2020, 2021, 2022 (top 10%)</p>
        <p>CURVE Undergraduate Research Fellowship (top 2%), on Natural Language Processing (NLP)</p>
        <p>Coursework: Software Engineering, Algorithm and Theory of Computing, Data Structure and Object Oriented Design, Artificial Intelligence, Computer System</p>
      </>
      
    ),
  },

];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - August 2022',
    location: 'Shanghai Sheyuan Network Technology',
    title: 'Software Engineer Intern',
    content: (
      <>
        <p>
          Worked on mobile full-stack development on Mubu, an app for collecting and analyzing user 
          sentiment data from users' dairy; consultation 
          and suggestions for users will be presented by a visual cartoon character-Mubu.
        </p>
        <p>
          Developed visualization and explanation of the result of NLP model in 
          front-end using Flutter in Android Studio.
        </p>
        <p>
        Integrated a trained sentiment-analysis model from HuggingFace for predicting users'
         emotions with Pytorch; developed a feature to improve users' 
         mental health based on sentence-to-sentence analysis of users' diaries.
        </p>
        <p>
        Helped to publish the mobile app in the Apple store and has received hundreds of installations nationwide.
        </p>
      </>
      
    ),
  },

];

export const publication: TimelineItem[] = [
  {
    date: 'Submitted on 24 May 2023',
    location: ' ',
    title: 'A Causal View of Entity Bias in (Large) Language Models',
    content: (
      <>
      <p>Fei Wang, Wenjie Mo, Yiwei Wang, Wenxuan Zhou, and Muhao Chen</p>
      <a href="https://arxiv.org/abs/2305.14695">Click here to check this paper on ARXIV</a>
      </>
      
    ),
  },

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Do not hesitate to contact me!',
  items: [
    {
      type: ContactType.Email,
      text: 'jackymo@usc.edu',
      href: 'mailto:jackymo@usc.edu',
    },
    {
      type: ContactType.Location,
      text: 'Los Angeles, United States',
      href: 'https://www.google.ca/maps/place/%E7%BE%8E%E5%9C%8B%E5%8A%A0%E5%88%A9%E7%A6%8F%E5%B0%BC%E4%BA%9E%E6%B4%9B%E6%9D%89%E7%A3%AF/@34.0206085,-118.7413834,10z/data=!3m1!4b1!4m6!3m5!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0522342!4d-118.2436849!16s%2Fm%2F030qb3t?entry=ttu',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'jacky-mo-1111',
      href: 'https://github.com/jacky-mo-1111',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jacky-mo-1111'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jacky-mo-b5827a213/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
