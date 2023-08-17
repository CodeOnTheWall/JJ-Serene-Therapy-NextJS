"use client";

// NextJS
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function CustomLink({
  href,
  title,
  className,
  onClick,
}: CustomLinkProps) {
  const router = usePathname();
  return (
    // group allows all elements inside parent (in this case Link) to share css styles
    // this allows the Link to share the group:hover, which is what we want,
    // so that it can be hovered over as well
    // <Link
    //   href={href}
    //   className={`${className} bg-purple-600/60  px-2 relative font-bold mx-2 hover:scale-105 transition-transform
    //    text-white border-[3px] hover:border-purple-700 poop  ${
    //      router === href ? "border-purple-700" : "border-white"
    //    }`}
    // >
    //   {title}
    // </Link>
    <Link
      onClick={onClick}
      href={href}
      className={`${className} border-[5px] p-1 font-medium ${
        router === href ? "border-[#7209b7]" : "border-none"
      } ${router !== href ? "be" : ""}`}
    >
      {title}
    </Link>
  );
}
