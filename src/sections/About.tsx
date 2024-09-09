import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: "",
  },
  {
    title: "Github",
    icon: "",
  },
  {
    title: "HTML5",
    icon: "",
  },
  {
    title: "CSS3",
    icon: "",
  },
  {
    title: "React",
    icon: "",
  },
  {
    title: "Tailwind css",
    icon: "",
  },
  {
    title: "Node.js",
    icon: "",
  },
  {
    title: "Express",
    icon: "",
  },
  {
    title: "MongoDB",
    icon: "",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-52">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimps in my World"
        description="Learn more about who I am, What i do and Things i like"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspective</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <h3>My Tools</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experience
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
