import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-4 rounded-t-3xl max-w-4xl mx-auto">
      <div className="container mx-auto flex flex-col items-center text-center space-y-2">
        <p className="text-sm">© {new Date().getFullYear()} Santiago Haquin Lo Valvo.</p>
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/SantiagoHaquin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0D6EFF] transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-haquin-lo-valvo-866717256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0D6EFF] transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0D6EFF] transition-transform transform hover:scale-125"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
