import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      title: "JavaScript",
      imageSrc: "/skills/java-script.png",
      proficiency: "Advanced"
    },
    {
      title: "CSS",
      imageSrc: "/skills/css.png",
      proficiency: "Advanced"
    },
    {
      title: "React",
      imageSrc: "/skills/java-script.png",
      proficiency: "Advanced"
    },
    {
      title: "Node.js",
      imageSrc: "/skills/node.png",
      proficiency: "Advanced"
    },
    {
      title: "MongoDB",
      imageSrc: "/skills/mongodb.png",
      proficiency: "Advanced"
    },
    {
      title: "Figma",
      imageSrc: "/skills/figma.png",
      proficiency: "Advanced"
    },
    {
      title: "Python",
      imageSrc: "/skills/python.png",
      proficiency: "Advanced"
    },
    {
      title: "SQL Server",
      imageSrc: "/skills/sql-server.png",
      proficiency: "Advanced"
    },
    {
      title: "SQL",
      imageSrc: "/skills/sql.png",
      proficiency: "Advanced"
    },
    {
      title: "Word",
      imageSrc: "/skills/word.png",
      proficiency: "Advanced"
    },
    {
      title: "Teamwork",
      imageSrc: "/skills/teamwork.png",
      proficiency: "Advanced"
    },
    {
      title: "Problem Solving",
      imageSrc: "/skills/solutions.png",
      proficiency: "Advanced"
    },
    {
      title: "Creativity",
      imageSrc: "/skills/creativity.png",
      proficiency: "Advanced"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center w-full">
          <h2 className="section-heading text-4xl font-bold fade-in-out text-white">
            Skills & Experience
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg group relative"
            >
              <div 
                className="relative size-32 rounded-full bg-gray-700 p-4">
                <img
                  src={skill.imageSrc}
                  alt={skill.title}
                  className="size-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                <div className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                  skill.proficiency === 'Advanced' ? 'bg-green-500/20 text-green-500' :
                  skill.proficiency === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-red-500/20 text-red-500'
                }`}>
                  <span>
                    {skill.proficiency}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
