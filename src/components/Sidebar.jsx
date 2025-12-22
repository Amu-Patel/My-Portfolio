export default function Sidebar() {
  return (
    <aside className="bg-primary/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-full md:w-72 flex flex-col items-center sticky top-4">
      <img 
        src="./profile/passport-photo-1.jpg"
        alt="Amisha Patel" 
        className="w-35 h-35 object-cover mb-4 rounded-2xl" 
      />
      <h2 className="text-2xl font-bold mb-1">Hi, I'm Lavanya</h2>
      <p className="text-base text-center text-black mb-4">Software Engineer passionate about building technology that makes an impact</p>

      {/* Contact Box */}
      <div className="bg-gray-200 rounded-xl p-4 w-full text-left space-y-2 text-sm shadow-md">
        <p className="flex items-center gap-2">
          <i className="bx bx-envelope"></i> amishaatel549@gmail.com
        </p><hr className="my-1 border-t border-gray-400" />
        <p className="flex items-center gap-2">
          <i className="bx bx-phone"></i> +91 7317247929
        </p><hr className="my-1 border-t border-gray-400" />
        <p className="flex items-center gap-2">
          <i className="bx bx-map"></i> Rewa, Madhya Pradesh
        </p><hr className="my-1 border-t border-gray-400" />
        <p className="flex items-center gap-2">
          <i className="bx bx-calendar"></i> 01/01/2003
        </p>
      </div>

      <a
        href="./downloads/Amisha_Patel_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:shadow-lg"
      >
        <i className="bx bx-download"></i> Download CV
      </a>


    </aside>
  );
}

