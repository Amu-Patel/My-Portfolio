export default function Tabs({ active, setActive }) {
  const tabs = [
    { name: "about", icon: "bx bx-user" },
    { name: "resume", icon: "bx bxs-file" },
    { name: "works", icon: "bx bx-briefcase" },
    { name: "contact", icon: "bx bx-envelope" },
  ];

  const socials = [
    {
      icon: "bx bxl-linkedin",
      link: "https://www.linkedin.com/in/amisha-patel-47179028b",
    },
    {
      icon: "bx bxl-github",
      link: "https://github.com/Amu-Patel",
    },
    {
      icon: "bx bxl-instagram",
      link: "https://instagram.com/",
    },
    {
      icon: "bx bx-code",
      link: "#",
      dropdown: true,
    },
  ];

  return (
    <div className="bg-primary/30 backdrop-blur-sm rounded-full shadow-md flex items-center gap-3 px-4 py-2 md:ml-8 justify-center md:justify-start">

      {/* Tabs */}
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActive(tab.name)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            active === tab.name
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-gray-100 hover:scale-105"
          }`}
        >
          <i className={`${tab.icon} text-lg`}></i>
          <span className="hidden md:inline">
            {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
          </span>
        </button>
      ))}

      {/* Divider (optional, looks professional) */}
      <span className="w-px h-6 bg-gray-300 mx-2"></span>

      {/* Social Icons (Tab-style, icon only) */}
      {socials.map((item, index) =>
        item.dropdown ? (
          <div key={index} className="relative group z-50">
            <button className="bg-gray-100 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-purple-500">
              <i className={`${item.icon} text-lg group-hover:text-white`}></i>
            </button>

            <div className="absolute top-12 right-0 hidden group-hover:flex flex-col bg-white border rounded-lg shadow-md p-2 text-xs w-32">
              <a
                href="https://www.codechef.com/users/amisha_patel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 py-1"
              >
                CodeChef
              </a>
              <a
                href="https://leetcode.com/u/amisha_patel_0024/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 py-1"
              >
                LeetCode
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/amu013ik5/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 py-1"
              >
                GFG
              </a>
            </div>
          </div>
        ) : (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-purple-500"
          >
            <i className={`${item.icon} text-lg hover:text-white`}></i>
          </a>
        )
      )}
    </div>

    
  );
}
