import React, { useState } from "react";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaTimes,
  FaFolder,
  FaCog,
} from "react-icons/fa";
import { SiDotnet, SiCsharp, SiC, SiTailwindcss } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io"; 

function CodeExplorer() {
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileClick = (fileName) => {
    setSelectedFile(fileName);
  };

  const fileContent = {
    JavaScript: "// Código JavaScript de ejemplo",
    HTML: "<!-- Código HTML de ejemplo -->",
    CSS: "/* Código CSS de ejemplo */",
    "React Js": "// Código React de ejemplo",
    "Tailwind CSS": "// Configuración de Tailwind",
    ".NET": "// Código .NET de ejemplo",
    "C#": "// Código C# de ejemplo",
    Python: "# Código Python de ejemplo",
    C: "// Código C de ejemplo",
  };

  const fileIcons = {
    JavaScript: <FaJs className="mr-2 text-yellow-500" />,
    HTML: <FaHtml5 className="mr-2 text-orange-600" />,
    CSS: <FaCss3Alt className="mr-2 text-blue-500" />,
    "React Js": <FaReact className="mr-2 text-blue-400" />,
    "Tailwind CSS": <SiTailwindcss className="mr-2 text-sky-400" />,
    ".NET": <SiDotnet className="mr-2 text-purple-500" />,
    CSharp: <SiCsharp className="mr-2 text-purple-500" />,
    Python: <FaPython className="mr-2 text-yellow-400" />,
    C: <SiC className="mr-2 text-blue-500" />,
  };

  return (
    <div>
        <h2 className="text-8xl items-center justify-center text-black dark:text-white font-bold ml-12 flex mt-36">
          Mi Stack
        </h2>
      <div className="flex h-screen m-10 bg-[#1e1e1e] text-white font-mono">
        <div className="w-1/4 bg-[#252526] p-4 overflow-y-auto border-r border-gray-700">
          <h2 className="text-sm font-semibold mb-4 text-gray-300">
            EXPLORADOR
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <details open>
                <summary className="cursor-pointer text-gray-400 flex items-center">
                  <IoIosArrowDown className="mr-1" />{" "}
                  <FaFolder className="mr-2" /> Front-End
                </summary>
                <ul className="ml-4 space-y-1 text-gray-300">
                  <li
                    className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                    onClick={() => handleFileClick("JavaScript")}
                  >
                    {fileIcons["JavaScript"]} JavaScript
                  </li>
                  <li
                    className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                    onClick={() => handleFileClick("HTML")}
                  >
                    {fileIcons["HTML"]} HTML
                  </li>
                  <li
                    className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                    onClick={() => handleFileClick("CSS")}
                  >
                    {fileIcons["CSS"]} CSS
                  </li>
                  <li>
                    <details open>
                      <summary className="cursor-pointer text-gray-400 flex items-center">
                        <IoIosArrowDown className="mr-1" />{" "}
                        <FaFolder className="mr-2" /> Frameworks
                      </summary>
                      <ul className="ml-4 space-y-1 text-gray-300">
                        <li
                          className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                          onClick={() => handleFileClick("React Js")}
                        >
                          {fileIcons["React Js"]} React.Js
                        </li>
                        <li
                          className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                          onClick={() => handleFileClick("Tailwind CSS")}
                        >
                          {fileIcons["Tailwind CSS"]} Tailwind CSS
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="cursor-pointer text-gray-400 flex items-center">
                  <IoIosArrowDown className="mr-1" />{" "}
                  <FaFolder className="mr-2" /> Back-End
                </summary>
                <ul className="ml-4 space-y-1 text-gray-300">
                  <li
                    className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                    onClick={() => handleFileClick(".NET")}
                  >
                    {fileIcons[".NET"]} .NET
                  </li>
                  <li
                    className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                    onClick={() => handleFileClick("CSharp")}
                  >
                    {fileIcons["CSharp"]} C#
                  </li>
                  <li
                    className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                    onClick={() => handleFileClick("Python")}
                  >
                    {fileIcons["Python"]} Python
                  </li>
                  <li
                    className="cursor-pointer hover:bg-[#373737] p-1 rounded flex items-center"
                    onClick={() => handleFileClick("C")}
                  >
                    {fileIcons["C"]} C
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="w-3/4 bg-[#1e1e1e] flex flex-col">
          <div className="bg-[#333333] border-b border-gray-700 p-2 flex items-center space-x-2">
            <div
              className={`px-3 py-1 rounded-t ${
                selectedFile ? "bg-[#1e1e1e] text-gray-300" : "text-gray-500"
              } flex items-center`}
            >
              {selectedFile && fileIcons[selectedFile]}
              <h3 className="text-sm font-semibold">
                {selectedFile || "Seleccione un archivo"}
              </h3>
            </div>
            {selectedFile && (
              <button
                className="text-gray-400 hover:text-gray-200"
                onClick={() => setSelectedFile("")}
                title="Cerrar pestaña"
              >
                <FaTimes />
              </button>
            )}
          </div>
          <div className="bg-[#1e1e1e] p-4 h-full overflow-y-auto text-gray-300">
            <pre className="text-sm whitespace-pre-wrap">
              {fileContent[selectedFile] ||
                "Seleccione un archivo para ver su contenido."}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeExplorer;
