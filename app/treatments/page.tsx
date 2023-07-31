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
  title: "Treatments",
  description: "Treatments available",
};

// Treatments Array
const treatments = [
  "Headaches and Migraines",
  "Neck pain",
  "Shoulders problem (frozen shoulder...)",
  "Back pain",
  "Abdominal pain",
  "SI joint dysfunction",
  "Hips problems",
  "Legs pain",
  "Knees and Ankles pain",
  "Sciatica",
  "Arms and hands problems",
  "Fibromyalgia",
  "Plantar Fasciitis",
];

export default function page() {
  return (
    <>
      <TransitionEffect />
      <Layout className=" flex-col items-center justify-start space-y-10 text-dark">
        <div className="flex flex-col md:flex-row items-center">
          <MotionDiv
            delay={0.6}
            x={25}
            y={25}
            duration={1.2}
            useAnimate={true}
            className="bg-[#7209b7] md:w-[2px] md:h-[32px] mr-[15px]"
          />

          <MotionTitle y={-50} duration={1.2} delay={0.6} useAnimate={true}>
            TREATMENTS
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
        <div className=" space-y-3">
          <MotionTitle
            x={50}
            duration={1.2}
            delay={0.8}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Headaches and Migraines
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={0.9}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Neck pain
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Shoulders problem (frozen shoulder...)
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.1}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Back pain
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.2}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Abdominal pain
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.3}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            SI joint dysfunction
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.4}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Hips problems
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.5}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Legs pain
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.6}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Knees and Ankles pain
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.7}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Sciatica
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.8}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Arms and hands problems
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={1.9}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Fibromyalgia
          </MotionTitle>
          <MotionTitle
            x={50}
            duration={1.2}
            delay={2}
            className="!text-2xl !tracking-[10px] !text-black"
            useAnimate={true}
          >
            Plantar Fasciitis
          </MotionTitle>
        </div>

        <Link
          href="/booknow"
          className="text-lg font-medium capitalize bg-[#7209b7] text-white rounded-lg
   animate-bounce py-1 px-2 border-purple-400 border-4 md:text-base"
        >
          Book Now
        </Link>
      </Layout>
    </>
  );
}
