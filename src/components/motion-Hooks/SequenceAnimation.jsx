import { stagger } from "motion";
import { useAnimate, motion } from "motion/react";
import { useEffect } from "react";

const SequenceAnimation = () => {
  return (
    <>
      <SequenceAnimation1 />
      <br />
      <SequenceAnimation2 />
    </>
  );
};

export default SequenceAnimation;

const SequenceAnimation1 = () => {
  // ^ UseAnimate Hook
  const [scope, animate] = useAnimate(); //scope element bana k child kitne dom ho sb per animate fun kaam karega
  const text =
    "Sequence Animation used here in Text ... using useAnimate hook always use best practice";

  // when component mount animation run
  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: "1",
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.1), //animation lagega child pr ek k baad ek
      }
    );
  };

  return (
    <div ref={scope} className="text-white max-w-2xl mx-auto font-bold text-xl">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          style={{ opacity: 0, filter: "blur(10px)", y: 10 }} //initial state
          className="inline-block text-neutral-500"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};

const SequenceAnimation2 = () => {
  // ^ UseAnimate Hook
  const [scope, animate] = useAnimate(); //scope element bana k child kitne dom ho sb per animate fun kaam karega
  const text =
    "Sequence Animation used here in Text ... using useAnimate hook always use best practice";

  //when component mount animation run
  //   useEffect(() => {
  //     startAnimating();
  //   }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: "1",
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.1), //animation lagega child pr ek k baad ek
      }
    );
  };

  return (
    <div ref={scope} className="text-white max-w-2xl mx-auto font-bold text-xl">
      <button
        onClick={startAnimating}
        className="bg-neutral-500 px-4 py-2 rounded-md cursor-pointer active:scale-110 transition duration-200"
      >
        What is Sequence Animation ? click button
      </button>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          style={{ opacity: 0, filter: "blur(10px)", y: 10 }} //initial state
          className="inline-block text-neutral-500"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};
