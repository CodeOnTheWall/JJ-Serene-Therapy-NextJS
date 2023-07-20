// Public
import MainPic from "../public/MainPic.jpg";

// Components
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/LayoutWrapper";

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
        <AnimatedText text="JJ Serene Therapy" />
        <div className="flex sm:space-y-4 items-center justify-evenly w-full ">
          <div className=" w-1/2">
            <Image
              priority
              src={MainPic}
              alt="Osteopathy picture"
              className=" w-full h-auto rounded-lg"
            />
          </div>
          {/* align items affects all items in container, while self-center is the div itself */}
          <div className="w-1/2 flex flex-col gap-6 items-center justify-center self-center lg:w-full lg:text-center">
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
              href="mailto:bralensundquist96@gmail.com?subject=We%20Want%20You!&body=We%20are%20interested%20in%20your%20services,%20can%20we%20schedule%20a%20call?"
              target={"_blank"}
              className=" text-lg font-medium capitalize text-dark underline md:text-base"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
