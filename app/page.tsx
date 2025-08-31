import Image from "next/image";
import Link from "next/link";
import WButton from "@/components/washington/WButton";
import IanPic from "../profile-pictures/ian-kan.jpg";

export default function Home() {
  const interns = [
    {
      id: "ian-kan",
      name: "Ian Kan",
      intro: "Frontend + Backend intern, Summer 2025. Built several Washington UI components and authentication middleware for the backend.",
      href: "/ian-kan",
      imageSrc: IanPic,
    },
  ];

  return (
    <main className="min-h-screen px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Intern Showcases</h1>
        <p className="text-muted-foreground">Select an intern to view their contributions.</p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {interns.map((intern) => (
          <article key={intern.id} className="rounded-xl border bg-background p-4 flex flex-col gap-4">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-bg-lighter">
              <Image src={intern.imageSrc} alt={intern.name} fill className="object-contain" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-medium">{intern.name}</h2>
              <p className="text-sm text-muted-foreground">{intern.intro}</p>
            </div>
            <div className="flex justify-center">
              <Link href={intern.href}>
                <WButton content="View Contributions" style="primary" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}