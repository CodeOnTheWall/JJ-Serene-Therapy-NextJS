// Public
import MainPic from "../public/MainPic.jpg";

// Components
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/LayoutWrapper";
import MotionDiv from "@/components/Motion/MotionDiv";
import MotionTitle from "@/components/Motion/MotionTitle";

// NextJS
import Image from "next/image";
import Link from "next/link";

// Metadata
export const metadata = {
  title: "JJ Serene Therapy",
  description: "Profesional Osteopath located in the Edmonton region",
};

export default function page() {
  return (
    <>
      <TransitionEffect />
      <Layout className=" flex-col items-center justify-evenly text-dark">
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
            JJ
          </MotionTitle>
          <MotionTitle y={50} duration={1.2} delay={0.6}>
            SERENE
          </MotionTitle>
          <MotionTitle y={-50} duration={1.2} delay={0.6}>
            THERAPY
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
        {/* <AnimatedText
          text="JJ Serene Therapy"
          className=" underline decoration-purple-700 decoration-2 first-letter:text-purple-700"
        /> */}
        <div className="flex justify-evenly">
          <div className=" w-1/3 hidden lg:inline-block">
            <Image
              priority
              src={MainPic}
              alt="Osteopathy picture"
              className=" w-full h-auto rounded-lg hidden lg:inline-block"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-y-6 items-center justify-center">
            <AnimatedText text="Meet Jason, your Edmonton Osteopath Professional" />
            <p className="text-lg font-semibold md:text-sm">
              With a profound understanding of Osteopathy, Registered Massage
              Therapy, and a BS in Biochemistry, I possess a comprehensive
              perspective on the human body&apos;s complexities. My holistic
              approach enables me to address intricate health issues by
              considering how the entire body functions and interconnects. This
              integrated approach leads to effective treatments that promote
              sustainable healing and overall well-being, empowering my patients
              to achieve optimal health.
            </p>

            <Link
              href="/contact"
              className="text-lg font-medium capitalize bg-[#7209b7] text-white rounded-lg
   animate-bounce py-1 px-2 border-purple-400 border-4 md:text-base"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
