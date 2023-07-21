// Components
import MainNav from "./MainNav";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerNav from "./HamburgerNav";

export default function NavBar() {
  return (
    <div className=" border-b-2 border-[#7209b7] bg-purple-300">
      <div className="flex h-16 items-center px-4">
        <MainNav />
        <HamburgerIcon />
        <HamburgerNav />
      </div>
    </div>
  );
}
