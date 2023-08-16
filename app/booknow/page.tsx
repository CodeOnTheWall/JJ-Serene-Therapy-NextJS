// Components
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/LayoutWrapper";
import MotionDiv from "@/components/Motion/MotionDiv";
import MotionTitle from "@/components/Motion/MotionTitle";

// Page Specific Components
import BookNowForm from "./(components)/BookNowForm";

// Metadata
export const metadata = {
  title: "Book Now",
  description: "Book your appointment now with JJ Serene Therapy",
};

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
            useAnimate={false}
            className="bg-[#7209b7] md:w-[2px] md:h-[32px] mr-[15px]"
          />

          <MotionTitle y={-50} duration={1.2} delay={0.6} useAnimate={true}>
            Book
          </MotionTitle>
          <MotionTitle y={50} duration={1.2} delay={0.6} useAnimate={true}>
            Now
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
        <div className=" space-y-6 md:w-full md:flex md:justify-evenly md:items-center">
          <BookNowForm />
        </div>
      </Layout>
    </>
  );
}
