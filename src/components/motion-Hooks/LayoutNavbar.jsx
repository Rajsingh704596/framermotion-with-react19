import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const LayoutNavbar = () => {
  const NavItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Login", href: "/login" },
  ];

  const [hovered, setHovered] = useState(null);
  return (
    <div className="py-10">
      <nav className="max-w-xl mx-auto bg-gray-200 rounded-full px-2 py-1 flex">
        {NavItems?.map((item, idx) => (
          <NavLink
            key={item.title}
            to={item.href}
            className="group w-full relative text-center py-3 "
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-full w-full h-full bg-black"
              ></motion.div>
            )}
            <span className="relative group-hover:text-neutral-200 text-neutral-400">
              {item.title}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default LayoutNavbar;
