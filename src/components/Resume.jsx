import Skill from "./skills";

export default function Resume() {
  return (
    <section id="resume" className="py-12 px-4 max-w-6xl mx-auto">
      {/* SECTION TITLE */}
      <h2 className="text-3xl font-bold mb-10 border-b-4 border-blue-500 inline-block">
        Resume
      </h2>

      {/* EDUCATION + ACHIEVEMENTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

        {/* ACHIEVEMENTS */}
        <div className="border border-gray-300 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <img src="./icons/achievement.jpg" alt="Achievements" className="w-12 h-12" />
            Achievements
          </h3>
          <div className="space-y-8">

            <hr />

          {/* LIVE ACHIEVEMENTS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              Live Coding Achievements
            </h4>

            {/* LeetCode */}
            <div className="border rounded-lg p-3">
              <img
                src="https://leetcard.jacoblin.cool/amisha_patel_0024?theme=light&font=Karma"
                alt="LeetCode Stats"
                className="w-full"
              />
            </div>

            {/* GitHub */}
            <div className="border rounded-lg p-3">
              <img
  src="https://github-readme-stats.vercel.app/api?username=Amu-Patel&show_icons=true&include_all_commits=true&count_private=true"
  alt="GitHub Stats"
  className="w-full"
/>


            </div>

            {/* GitHub Streak */}
            <div className="border rounded-lg p-3">
              <img
  src="https://streak-stats.demolab.com?user=Amu-Patel"
  alt="GitHub Streak"
  className="w-full"
/>


            </div>
          </div>

            {/* Cyber Club */}
            <div className="flex items-start gap-4">
              <img
                src="./icons/cyber_club.jpg"
                alt="Cyber Club"
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold">
                  Secretary – Cyber Club
                </h4>
                <p className="text-sm text-black text-nowrap">
                  Department of Computer Applications (BCA)
                </p>
                <p className="text-sm text-black">
                  Led and organized technical events.
                </p>
              </div>

              <span className="text-sm text-black whitespace-nowrap flex-shrink-0">
                2021 – 2024
              </span>
            </div>

            <hr />

            {/* Idea Pitching */}
            <div className="flex items-start gap-4">
              <img
                src="./icons/3.jpg"
                alt="Idea Pitching"
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold truncate">
                  3rd Prize – Idea Pitching Competition
                </h4>
                <p className="text-sm text-black text-nowrap">
                  Department of Computer Applications (BCA)
                </p>
                <p className="text-sm text-black">
                  Innovation, Creativity, Planning and Implementation
                </p>
              </div>

              <span className="text-sm text-black whitespace-nowrap flex-shrink-0">
                2021 – 2024
              </span>
            </div>
          </div>
        </div>
        
        {/* EDUCATION */}
        <div className="border border-gray-300 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <img src="./icons/Education.png" alt="Education" className="w-15 h-12" />
            Education
          </h3>

          <div className="space-y-8">
            {/* VIT */}
            <div className="flex items-start gap-4">
              <img
                src="./icons/vit.png"
                alt="VIT"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-nowrap">
                  Vellore Institute of Technology <br />Bhopal
                </h4>
                <p className="text-sm text-black truncate">
                  MCA (Master of Computer Applications)
                </p>
                <p className="text-sm text-slate-300">CGPA: 8.0</p>
              </div>

              <span className="text-sm text-black whitespace-nowrap flex-shrink-0 my-6">
                2024 – 2026
              </span>
            </div>

            <hr />

            {/* BSSS */}
            <div className="flex items-start gap-4">
              <img
                src="./icons/bsss.png"
                alt="BSSS"
                className="w-10 h-12 rounded-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-nowrap">
                  The Bhopal School of Social Sciences <br /> Bhopal
                </h4>
                <p className="text-sm text-black truncate">
                  BCA (Bachelor of Computer Applications)
                </p>
                <p className="text-sm text-slate-300">CGPA: 8.8</p>
              </div>

              <span className="text-sm text-black whitespace-nowrap flex-shrink-0 my-6">
                2021 – 2024
              </span>
            </div>

            <hr />
            {/* Schooling */}
            <div className="flex items-start gap-4">
              <img
                src="./icons/kv.png"
                alt="Kv"
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-nowrap">
                  Kendriya Vidyalaya Babina Cantt <br /> Jhansi, Uttar Pradesh
                </h4>
                <p className="text-sm text-black truncate">
                  12th
                </p>
                <p className="text-sm text-slate-300">Percentage: 75.5%</p>
              </div>

              <span className="text-sm text-black whitespace-nowrap flex-shrink-0 my-6">
                2020 – 2021
              </span>
            </div>
            <hr />
            <div className="flex items-start gap-4">
              <img
                src="./icons/kv.png"
                alt="kv"
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-nowrap">
                  Kendriya Vidyalaya Babina Cantt <br /> Jhansi, Uttar Pradesh
                </h4>
                <p className="text-sm text-black truncate">
                  10th
                </p>
                <p className="text-sm text-slate-300">Percentage: 82.2%</p>
              </div>

              <span className="text-sm text-black whitespace-nowrap flex-shrink-0 my-6">
                2018 – 2019
              </span>
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
