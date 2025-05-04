import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Card = () => {
  return (
    <>
      <h1>Hover and Exit animation both card for light mode</h1>
      <Card1 />
      <Card2 />
    </>
  );
};

export default Card;

const Card1 = () => {
  return (
    <>
      <div>
        <h1> card for light mode when hover blur part show </h1>
        <div className="bg-white w-72 min-h-[26rem] h-[26rem] rounded-xl p-6 flex flex-col shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
          <h2 className="font-bold text-[10px]"> UI component</h2>
          <p className="text-neutral-600 mt-2 text-[10px]">
            A collection of ui component
          </p>
          <div className="flex item-center justify-center">
            <button className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  rounded-md px-2 py-1">
              <img
                src="/vite.svg"
                width={50}
                height={50}
                alt="image logo"
                className="w-4 h-3"
              />
              Rock (bottom hover)
            </button>
          </div>
          <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
            {/* motion div here */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200"
            >
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  ⏩
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    user interface
                  </p>
                  <p className="text-[8px] text-neutral-400 mt-1">
                    collection of ui component
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  ➡️
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    user interface
                  </p>
                  <p className="text-[8px] text-neutral-400 mt-1">
                    collection of ui component
                  </p>
                </div>
              </div>

              {/*  */}
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  🎯
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    user interface
                  </p>
                  <p className="text-[8px] text-neutral-400 mt-1">
                    collection of ui component
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card2 = () => {
  const [show, setShow] = useState(true); //button state for show or not
  return (
    <>
      {/* AnimatePresence enables the animation of components that have been removed from the tree (Unmount time),so exit animation work properly , use always top of the boolean or switch */}
      <AnimatePresence>
        {show && (
          <motion.div
            // mount time
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            //unmount time
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <h1>
              card for light mode here card delete functionality add and mount
              time animation initial or animate animation and exit animation
              unmount time work
            </h1>
            <div className="bg-white w-72 min-h-[26rem] h-[26rem] rounded-xl p-6 flex flex-col shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
              <h2 className="font-bold text-[10px]"> UI component</h2>
              <p className="text-neutral-600 mt-2 text-[10px]">
                A collection of ui component
              </p>
              <div className="flex item-center justify-center">
                <button
                  className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  rounded-md px-2 py-1"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <img
                    src="/vite.svg"
                    width={50}
                    height={50}
                    alt="image logo"
                    className="w-4 h-3"
                  />
                  close button ❌
                </button>
              </div>
              <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
                {/* motion div here */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200"
                >
                  <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                      ⏩
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        user interface
                      </p>
                      <p className="text-[8px] text-neutral-400 mt-1">
                        collection of ui component
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                      ➡️
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        user interface
                      </p>
                      <p className="text-[8px] text-neutral-400 mt-1">
                        collection of ui component
                      </p>
                    </div>
                  </div>

                  {/*  */}
                  <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                      🎯
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        user interface
                      </p>
                      <p className="text-[8px] text-neutral-400 mt-1">
                        collection of ui component
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
