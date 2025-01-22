import { UserButton } from "@clerk/nextjs";

async function Page() {
  return (
    <main>
      <h1 className="head-text">
        <UserButton />
      </h1>
    </main>
  );
}

export default Page;
