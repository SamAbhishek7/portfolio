import React from 'react';

const skillsData = {
  languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Python', 'Java', 'C'],
  frameworks: ['React','Nextjs', 'Node.js', 'Express', 'Tailwind CSS','MongoDB','MySQL'],
  tools: [
    'Git & GitHub', 'Webpack','VS Code', 'Figma', 'Jupyter Notebook',
    'Eclipse', 'Android Studio', 'Cloudinary'
  ],
  concepts: [
    'Data Structures', 'Algorithms', 'OOPs', 'DBMS', 'Operating Systems',
    'Computer Networks', 
  ]
};

const SkillCategory = ({ title, skills, colorClass }) => (
  <div className="bg-white/5 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-white/10 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-white transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and knowledge areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <SkillCategory 
            title="Languages" 
            skills={skillsData.languages} 
            colorClass="from-blue-400 to-cyan-500"
          />
          <SkillCategory 
            title="
            Development" 
            skills={skillsData.frameworks} 
            colorClass="from-purple-400 to-pink-500"
          />
          <SkillCategory 
            title="Tools & Platforms" 
            skills={skillsData.tools} 
            colorClass="from-yellow-400 to-orange-500"
          />
          <SkillCategory 
            title="Core Concepts" 
            skills={skillsData.concepts} 
            colorClass="from-green-400 to-teal-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
