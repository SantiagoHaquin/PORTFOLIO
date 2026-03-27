import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  languages,
  githubLink,
  projectLink,
  media,
}) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const nextMedia = () => setCurrentMediaIndex((p) => (p + 1) % media.length);
  const prevMedia = () => setCurrentMediaIndex((p) => (p - 1 + media.length) % media.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-white dark:bg-[#0c1628] border border-black/[0.07] dark:border-white/[0.07] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Close button ── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/20 dark:bg-white/10 hover:bg-black/35 dark:hover:bg-white/20 text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* ── Media panel (left / top) ── */}
            <div className="relative lg:w-[58%] bg-black flex-shrink-0 overflow-hidden" style={{ minHeight: "260px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  {media[currentMediaIndex].type === "image" ? (
                    <img
                      src={media[currentMediaIndex].url}
                      alt={media[currentMediaIndex].alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={media[currentMediaIndex].url}
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain bg-black"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              {media.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/65 text-white transition-colors"
                  >
                    <IoIosArrowBack size={18} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/65 text-white transition-colors"
                  >
                    <IoIosArrowForward size={18} />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {media.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrentMediaIndex(i); }}
                        className={`rounded-full transition-all duration-200 ${
                          i === currentMediaIndex
                            ? "w-5 h-2 bg-white"
                            : "w-2 h-2 bg-white/40 hover:bg-white/65"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ── Content panel (right / bottom) ── */}
            <div className="flex flex-col flex-1 p-7 lg:p-9 overflow-y-auto">
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1 pr-8">
                {title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-3 mb-5" />

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed flex-1 mb-6">
                {description}
              </p>

              {/* Tech stack */}
              <div className="mb-7">
                <p className="text-[11px] font-mono tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs font-mono px-3 py-1 rounded-md border border-blue-500/20 dark:border-blue-400/15 text-blue-600 dark:text-blue-400/80 bg-blue-500/[0.05]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action links */}
              <div className="flex flex-wrap gap-3 pt-5 border-t border-black/[0.06] dark:border-white/[0.06]">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 dark:bg-white/10 hover:bg-gray-700 dark:hover:bg-white/20 text-white text-sm font-medium transition-colors"
                >
                  <FaGithub className="text-base" />
                  Ver en GitHub
                </a>
                {projectLink && (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 text-sm font-medium transition-colors"
                  >
                    <FaCode className="text-base" />
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "mp4", "video"]).isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Modal;
