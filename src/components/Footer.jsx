import { FaFacebookF, FaGithub, FaTimes } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2d5f4f] text-white mt-12">
      
      {/* Top Content */}
      <div className="max-w-5xl mx-auto text-center py-12 px-4">
        
        <h1 className="text-3xl font-semibold">KeenKeeper</h1>

        <p className="text-sm text-gray-200 mt-3 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="mt-6 text-sm text-gray-200">Social Links</p>

        {/* Icons */}
        <div className="flex justify-center gap-4 mt-3">
          
          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
            <FaFacebookF size={14} />
          </div>

          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
            <FaGithub size={14} />
          </div>

          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
            <FaTimes size={14} />
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
}