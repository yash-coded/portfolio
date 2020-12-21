import "./App.css";
import SkillList from "./components/SkillList";
import IconLinks from "./components/IconLinks";
import ProjectCard from "./components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
function App() {
  const skills = [
    {
      number: "01",
      skill: "JavaScript",
    },
    {
      number: "02",
      skill: "React.js",
    },
    {
      number: "03",
      skill: "Node.js",
    },
    {
      number: "04",
      skill: "Firebase",
    },
    {
      number: "05",
      skill: "WebSockets",
    },
    {
      number: "06",
      skill: "NoSQL",
    },
    {
      number: "07",
      skill: "TailwindCSS",
    },
    {
      number: "08",
      skill: "NGINX",
    },
  ];
  const projects = [
    {
      title: "DevChat",
      subtitle: "A chat application inspired by slack",
      techs: ["React.js", "Firebase", "Semantic UI"],
      projectDetails: [
        {
          icon: faGithub,
          text: "Repo",
          website: "https://github.com/yash-coded/slack-clone-reactjs",
        },
        {
          icon: faGlobeAmericas,
          text: "Demo",
          website: "https://www.devchatrooms.com/",
        },
      ],
    },
    {
      title: "ISA SAIT",
      subtitle:
        "A blog styled website for a student section of International Sociecty of Automation (ISA).",
      techs: ["React.js", "Strapi", "TailwindCSS"],
      projectDetails: [
        {
          icon: faGithub,
          text: "Repo",
          website: "https://github.com/yash-coded/isa-blog-frontend",
        },
        {
          icon: faGlobeAmericas,
          text: "Demo",
          website: "https://isasait.ca",
        },
      ],
    },
    {
      title: "Gun Violence Visualization",
      subtitle:
        "A visual representation of gun violence in US on Map based on GeoJSON data",
      techs: ["React.js", "Deck.gl", "Mapbox"],
      projectDetails: [
        {
          icon: faGithub,
          text: "Repo",
          website: "https://github.com/yash-coded/us-gun-violence",
        },
        {
          icon: faGlobeAmericas,
          text: "Demo",
          website: "https://romantic-montalcini-163457.netlify.app/",
        },
      ],
    },
  ];
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildern: 0.07 },
    },
  };

  return (
    <div className="App md:flex">
      <div className="xl:w-7/12 md:w-1/2 main-bg md:h-screen md:sticky md:top-0 ">
        <motion.div
          initial={"initial"}
          animate={"animate"}
          variants={variants}
          className="xl:ml-36 lg:ml-16 md:ml-8 sm:ml-auto  md:pt-28 pt-8 sm:w-11/12 ml-4 "
        >
          <motion.p
            variants={variants}
            className="text-gray-200  heading text-6xl tracking-wide  leading-tight"
          >
            Hello, I'm
          </motion.p>
          <motion.p
            variants={variants}
            className="text-white heading text-6xl tracking-wide leading-tight"
          >
            Yash Patel
          </motion.p>
          <motion.p
            variants={variants}
            className="text-gray-400 subheading font-thin text-lg  tracking-wider mt-2"
          >
            <motion.span
              variants={variants}
              className="border-b-4 border-gray-400"
            >
              A
            </motion.span>{" "}
            Frontend Developer
          </motion.p>

          <motion.p
            variants={variants}
            className="heading text-4xl text-white md:mt-16 mt-4 tracking-wider"
          >
            Skill<span className="border-b-4">s</span>
          </motion.p>
          <motion.div
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            className="grid grid-rows-4 grid-flow-col xl:w-2/3 lg:w-3/4 lg:gap-8 md:gap-4 gap-2 grid-cols-2 mt-8 "
          >
            {skills.map((skill) => (
              <motion.div variants={variants}>
                <SkillList number={skill.number} skill={skill.skill} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={variants}
            className="flex mt-8 pb-8 md:hidden space-x-12 md:absolute md:bottom-10 lg:bottom-20"
          >
            <IconLinks
              icon={faGithub}
              text="Github"
              website="https://github.com/yash-coded"
            />
            <IconLinks
              icon={faLinkedinIn}
              text="Linkedin"
              website="https://www.linkedin.com/in/yash-patel-4831b311a/"
            />
          </motion.div>
          <motion.div
            variants={variants}
            className="md:flex hidden space-x-12 md:absolute md:bottom-10 lg:bottom-20"
          >
            <IconLinks
              icon={faGithub}
              text="Github"
              website="https://github.com/yash-coded"
            />
            <IconLinks
              icon={faLinkedinIn}
              text="Linkedin"
              website="https://www.linkedin.com/in/yash-patel-4831b311a/"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="xl:w-7/12 md:w-1/2 projects-bg pb-8">
        <motion.div
          initial={"initial"}
          animate={"animate"}
          variants={variants}
          className="md:pt-28 md:ml-12 sm:w-11/12 pl-4 pr-4 md:mr-12 pt-8"
        >
          <motion.p
            variants={variants}
            className="text-gray-200  heading text-6xl tracking-wide  leading-tight"
          >
            <motion.span
              variants={variants}
              className="border-b-4 border-gray-200"
            >
              P
            </motion.span>
            rojects
          </motion.p>
          <motion.div
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            className="space-y-8 md:mt-16 mt-8"
          >
            {projects.map((project) => (
              <motion.div variants={variants}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  techs={project.techs}
                  projectDetails={project.projectDetails}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
