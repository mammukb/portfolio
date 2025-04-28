import Navlayout from "./components/navlayout";
import Intro from "./components/intro";
import Skill from "./components/skill";

export default function Home() {
  const skills = ["React", "Next.js", "Tailwind", "Javascript", "java" , "Python" , "MySQL" , "PHP"];
  return (
    <Navlayout>
      {/* hero section */}
      <div className=" mt-14  ">
        <Intro />
      </div>
      {/* skill section */}
      <div>
        <h1 className="text-5xl font-bold ml-10 text-green-900">SKILLS</h1>
        <hr  className="m-5 text-green-900 " />
        {/* skill cards */}
        <div className=" flex  flex-row flex-wrap border-2 border-green-900 m-8 p-3 rounded-2xl">
          {skills.map((skill) => (
            <Skill key={skill} props={skill} />
          ))}
        </div>
        <div>
          <p>I am Familiar with the above skills and I am looking forward to learn more.  </p>
        </div>
      </div>
    </Navlayout>
  );
}

