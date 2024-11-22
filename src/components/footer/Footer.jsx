import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-4 rounded-t-3xl">
      <div className="container mx-auto flex flex-col items-center text-center space-y-2">
        <p className="text-sm">© {new Date().getFullYear()} Santiago Haquin Lo Valvo.</p>
        <div className="flex space-x-4  text-2xl">
          <a
            href="https://github.com/SantiagoHaquin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-haquin-lo-valvo-866717256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 "
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 "
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
