// Components
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/LayoutWrapper";
import MotionDiv from "@/components/Motion/MotionDiv";
import MotionTitle from "@/components/Motion/MotionTitle";

// NextJS
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";

// Metadata
export const metadata = {
  title: "Background",
  description: "Jason Khaled Background",
};

export default function page() {
  return (
    <>
      <TransitionEffect />
      <Layout className=" flex-col items-center justify-start space-y-20 text-dark">
        <div className="flex flex-col md:flex-row items-center">
          <MotionDiv
            delay={0.6}
            x={25}
            y={25}
            duration={1.2}
            useAnimate={false}
            className="bg-[#7209b7] md:w-[2px] md:h-[32px] mr-[15px]"
          />

          <MotionTitle y={-50} duration={1.2} delay={0.6}>
            MY
          </MotionTitle>
          <MotionTitle y={50} duration={1.2} delay={0.6}>
            BACKGROUND
          </MotionTitle>
          <MotionDiv
            delay={0.6}
            x={-25}
            y={-25}
            duration={1.2}
            useAnimate={false}
            className="bg-[#7209b7] md:w-[2px] md:h-[32px]"
          />
        </div>
        <div>
          <h1 className=" font-semibold text-2xl">
            <TypeWriter />
          </h1>
        </div>
        <div className=" space-y-6">
          <MotionTitle
            delay={0.6}
            duration={1.2}
            className="!text-2xl !tracking-[10px] !text-black"
          >
            Manual Osteopathic Therapist (MOT)
          </MotionTitle>
          <MotionTitle
            delay={0.6}
            duration={1.2}
            className="!text-2xl !tracking-[10px] !text-black"
          >
            Registered Massage Therapist
          </MotionTitle>
          <MotionTitle
            delay={0.6}
            duration={1.2}
            className="!text-2xl !tracking-[10px] !text-black"
          >
            BS in Biochemistry
          </MotionTitle>
        </div>
      </Layout>
    </>
  );
}
