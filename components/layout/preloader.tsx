"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  // const [hasInteracted, setHasInteracted] = useState(false);
  const [counter, setCounter] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    if (typeof Audio !== "undefined") {
      const pencilAudio = new Audio("/pencil.ogg");
      pencilAudio.volume = 1;
      setAudio(pencilAudio);
    }
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }
  }, []);

  useEffect(() => {
    // Dynamic counter that ticks up to 100
    let count = 0;
    const interval = setInterval(() => {
      // Randomize the increment for a more organic feel
      count += Math.floor(Math.random() * 8) + 1;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);

        // Wait a bit after hitting 100 before hiding the loader
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasLoadedBefore", "true");
        }, 1600); // Extended slightly to let the writing finish
      }
      setCounter(count);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 100 && audio) {
      // Since user has interacted, audio will definitely play
      audio.play().catch(e => console.log(e));

      // The writing animation is ~1s, so pause audio after that
      const timer = setTimeout(() => {
        audio.pause();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, audio]);

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] cursor-pointer"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-zinc-700/20 blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[-30%] right-[-10%] w-[70%] h-[70%] rounded-full bg-zinc-600/20 blur-[120px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full">

            {/* The Percentage Counter */}

            <div className="overflow-hidden h-[120px] md:h-[200px] flex items-center justify-center">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: counter === 100 ? "-150%" : "0%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-7xl md:text-[12rem] font-medium text-white tracking-tighter"
              >
                {counter}%
              </motion.div>
            </div>


            {/* The Handwriting Name Reveal after 100% */}
            <AnimatePresence>
              {counter === 100 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.span
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-7xl md:text-[8rem] font-(family-name:--font-caveat) text-white pr-4 py-4"
                  >
                    Darshit
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Left Detail */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 overflow-hidden">
            <motion.div
              initial={{ y: "150%" }}
              animate={{ y: counter === 100 ? "150%" : "0%" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col gap-2"
            >
              <span className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em]">
                System Initialization
              </span>
              <div className="h-[2px] w-full bg-zinc-800">
                <motion.div
                  className="h-full bg-zinc-400"
                  style={{ width: `${counter}%` }}
                />
              </div>
            </motion.div>
          </div>


          {/* Bottom Right Detail */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 overflow-hidden hidden md:block">
            <motion.div
              initial={{ y: "150%" }}
              animate={{ y: counter === 100 ? "150%" : "0%" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] text-right"
            >
              Portfolio<br />v2.0.26
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>

  );
}
