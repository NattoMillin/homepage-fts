import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <div>AboutPage</div>
        <div>
          <Link href={"/about/info"}>goto Info Page</Link>
        </div>
      </main>
    </>
  );
}
