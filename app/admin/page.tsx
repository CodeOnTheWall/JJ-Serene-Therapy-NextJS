import { UserButton } from "@clerk/nextjs";

export default function Admin() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
