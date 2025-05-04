import { useAnimate, motion } from "motion/react";
const PurchaseButton = () => {
  const [scope, animate] = useAnimate();

  const sequence = [
    [
      ".loader",
      {
        width: "2rem",
        opacity: [0, 1],
      },
      {
        duration: 0.1,
      },
    ],
    [
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      },
    ],
    [
      ".loader",
      {
        opacity: [1, 0],
        scale: 0,
      },
      {
        duration: 0.1,
      },
    ],
    [
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      },
    ],
    [
      "button",
      {
        width: "4rem",
        borderRadius: "1000rem",
      },
      {
        duration: 0.3,
      },
    ],
    [
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        background: "linear-gradient(to right, #00ff99, #00ccff",
      },
      {
        duration: 0.8,
      },
    ],
    [
      ".check-icon",
      {
        opacity: [0, 1],
      },
      {
        duration: 0.1,
        at: "-1.2",
      },
    ],
    [
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      },
    ],
  ];

  const startAnimating = async () => {
    animate(sequence);
  };
  return (
    <div
      ref={scope}
      className="relative w-60 h-20 flex items-center justify-center"
    >
      <motion.button
        onClick={startAnimating}
        style={{ width: "20rem" }}
        className=" flex items-center justify-center h-15 rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-white font-medium "
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader h-5 w-5 text-white"
          initial={{
            width: "0rem",
          }}
        >
          <path stroke="none" d="M0 0h24v24h0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
        <span className="text">Purchase Now ($200)</span>
      </motion.button>

      {/* <motion.div
        style={{ opacity: 0, scale: 0 }}
        className="spinning-circle h-20 w-20 rounded-full bg-green-500 absolute inset-0 m-auto"
      ></motion.div> */}

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ffffff"
        strokeWidth={3}
        className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default PurchaseButton;
