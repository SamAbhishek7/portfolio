const education = {
  degree: "B.Tech in Computer Science",
  institution: "CVR College of Engineering, Hyderabad",
  period: "2022 - Present",
  cgpa: "8.63 CGPA",
  coursework: [
    "Data Structures & Algorithms",
    "Artificial Intelligence & Machine Learning",
    "Cloud Computing",
    "Database Management Systems",
    "Web Development"
  ]
};

export default function Resume() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="Resume">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-200/30 dark:border-gray-700/50 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-pink-500 dark:text-pink-400 font-medium mb-2">
                {education.institution}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {education.period}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {education.cgpa}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {education.coursework.map((course, index) => (
                  <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </div>
            {/* <div className="bg-yellow-500/10 dark:bg-yellow-500/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                {education.coursework}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
