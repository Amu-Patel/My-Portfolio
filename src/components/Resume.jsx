import Skill from "./skills";

export default function Resume() {
  return (
    <section id="resume" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 border-b-4 border-blue-500 inline-block">
        Education
      </h2>

      {/* EDUCATION + ACHIEVEMENTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

        {/* EDUCATION */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <img src="./icons/Education.png" alt="Education" className="w-15 h-12" />
            Education
          </h3>

          <div className="space-y-8">
            <div className="flex justify-between gap-4">
              <img
                src="./icons/vit.png"
                alt="Cyber Club"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-nowrap">
                  Vellore Institute of Technology<br/> Bhopal
                </h4>
                <p className="text-sm text-black">
                  Master of Computer Applications (MCA)
                </p>
                <p className="text-sm text-black">
                  CGPA: 8.0
                </p>
              </div>
              <span className="text-sm text-black whitespace-nowrap">
                2024 – 2026
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <img
                src="./icons/bsss.png"
                alt="Cyber Club"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-nowrap">
                  The Bhopal School of Social Sciences <br/>Bhopal
                </h4>
                <p className="text-sm text-black">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="text-sm text-black">CGPA: 8.8</p>
              </div>
              <span className="text-sm text-black whitespace-nowrap">
                2021 – 2024
              </span>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <img src="./icons/achievement.jpg" alt="Achievements" className="w-14 h-14" />
            Achievements
          </h3>

          <div className="space-y-8">

            <div className="flex items-start justify-between gap-6">
            <div className="flex gap-4">
              <img
                src="./icons/cyber_club.jpg"
                alt="Cyber Club"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="text-lg font-semibold">
                  Secretary – Cyber Club
                </h3>
                <p className="text-sm text-black mb-2 text-nowrap">Department of Computer Applications (BCA)</p>
                <p className="text-sm text-black max-w-xl">
                  Led and organized technical events, improving communication,
                  leadership, and team management skills.
                </p>
              </div>
              <span className="text-sm text-black whitespace-nowrap">
              2021 – 2024
            </span>
            </div>

            
          </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Working Skills</h3>

        <div className="space-y-4 max-w-md">
          <Skill name="HTML5" percent="95%" icon="bx bxl-html5" />
          <Skill name="Tailwind CSS" percent="85%" icon="bx bxl-css3" />
          <Skill name="React.js" percent="75%" icon="bx bxl-react" />
          <Skill name="C++" percent="80%" icon="bx bxl-c-plus-plus" />
          <Skill name="Python" percent="85%" icon="bx bxl-python" />
          <Skill name="SQL" percent="75%" icon="bx bx-data" />
        </div>
      </div>

      {/* KNOWLEDGE */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Knowledge</h3>
        <div className="flex flex-wrap gap-3">
          <Tag name="Front-end Development" />
          <Tag name="Data Analysis" />
          <Tag name="PostgreSQL" />
          <Tag name="Docker" />
          <Tag name="Communication" />
          <Tag name="Time Management" />
        </div>
      </div>
    </section>
  );
}

function Tag({ name }) {
  return (
    <span className="text-sm border border-gray-300 px-3 py-1 rounded-full text-black">
      {name}
    </span>
  );
}
