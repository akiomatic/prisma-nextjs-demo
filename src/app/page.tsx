import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-4">
      <p>Hi there! 👋</p>
      <div className={"flex gap-x-4 py-6"}>
        <Link href={"/api/notes"} rel="noopener noreferrer" target="_blank">
          <button className={"bg-blue-500 text-white py-2 px-4 rounded-md"}>
            <p>View notes</p>
          </button>
        </Link>
        <Link href={"/api/add"} rel="noopener noreferrer" target="_blank">
          <button className={"bg-purple-500 text-white py-2 px-4 rounded-md"}>
            <p>Add note</p>
          </button>
        </Link>
      </div>
      <p>Next.js + Hono + Neon + Prisma = 🔥</p>
    </main>
  );
}
