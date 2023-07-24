"use client";

import { useHamburgerState } from "@/hooks/useHamburgerState";

import MotionDiv from "../MotionDiv";
import MobileCustomLink from "./MobileCustomLink";

export default function HamburgerNav() {
  const onOpen = useHamburgerState((state) => state.onOpen);
  const onClose = useHamburgerState((state) => state.onClose);
  const isOpen = useHamburgerState((state) => state.isOpen);

  const handleHamburger = () => {
    onClose();
  };

  return (
    <>
      {isOpen ? (
        <MotionDiv
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-900/40 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col justify-center items-center">
            <MobileCustomLink href="/" title="Home" toggle={handleHamburger} />
            <MobileCustomLink
              href="/treatments"
              title="Treatments"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="/background"
              title="Background"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="/contact"
              title="Contact"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="/booknow"
              title="Book Now"
              toggle={handleHamburger}
            />
          </nav>
        </MotionDiv>
      ) : null}
    </>
  );
}
