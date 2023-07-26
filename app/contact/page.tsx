// Components
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/LayoutWrapper";
import MotionDiv from "@/components/Motion/MotionDiv";
import MotionTitle from "@/components/Motion/MotionTitle";

// Page Specific Components
import ContactForm from "./(components)/ContactForm";

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
            useAnimate={false}
            className="bg-[#7209b7] md:w-[2px] md:h-[32px] mr-[15px]"
          />

          <MotionTitle y={-50} duration={1.2} delay={0.6}>
            CONTACT
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
          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
