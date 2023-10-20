import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <UserButton />
    </main>
  );
}
