import Head from "next/head";
import { Poppins } from "@next/font/google";
import Dashboard from "@/components/Dashboard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>xJobDesc AI</title>
        <meta name="description" content="Generate by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale-1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-start min-h-screen py-2">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-4xl md:text-6xl font-bold">
          xJobDesc<span className="text-4xl md:text-6xl font-bold text-blue-600">.</span>
          </h1>
          <p className="mt-3 text-2xl">Create Beautiful<span className="text-2xl font-bold text-blue-600">{" "}Job Description{" "}</span>in Seconds</p>
          <p className="mt-3 text-1xl">Powered by<span className="text-1xl font-bold text-blue-600">{" "}OPEN AI - GPT3{" "}</span></p>
        </div>
        <Dashboard />
      </main>
    </>
  );
}