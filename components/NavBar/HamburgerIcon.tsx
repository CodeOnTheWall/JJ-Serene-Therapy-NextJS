"use client";

import { useHamburgerState } from "@/hooks/useHamburgerState";

export default function HamburgerIcon() {
  const onOpen = useHamburgerState((state) => state.onOpen);
  const onClose = useHamburgerState((state) => state.onClose);
  const isOpen = useHamburgerState((state) => state.isOpen);

  const handleHamburger = () => {
    if (isOpen) {
      onClose();
    } else onOpen();
  };

  return (
    /* Hamburger */
    <button
      onClick={handleHamburger}
      // screen sizes lg or smaller get flex and flex-col
      className="sm:hidden flex flex-col justify-center items-center"
    >
      <span
        className={` bg-black  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      />
      <span
        className={` bg-black block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={` bg-black  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      />
    </button>
  );
}
