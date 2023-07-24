// Components
import CustomLink from "./CustomLink";

interface MainNavProps {
  className?: string;
  props?: string;
}

export default function MainNav({ className, ...props }: MainNavProps) {
  /* sm above is visible and flex */
  return (
    <nav
      className={`hidden sm:flex items-center space-x-4 lg:space-x-6 ${className}`}
    >
      <CustomLink href="/" title="Home" />
      <CustomLink href="/treatments" title="Treatments" />
      <CustomLink href="/background" title="Background" />
      <CustomLink href="/contact" title="Contact" />
      <CustomLink href="/booknow" title="Book Now" />
    </nav>
  );
}
