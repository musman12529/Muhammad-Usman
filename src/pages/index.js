//* LIB
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

//* IMPORT COMPONENT
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { lightBulb, profilePicHome } from "@/imports";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Usman | Software Engineer</title>
        <meta
          name="description"
          content="Muhammad Usman, software engineer. B.Sc. CS (Memorial). Full stack: Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Neo4j, Azure, LLMs, AWS CCP."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePicHome}
                alt="Muhammad Usman"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <h1></h1>
              <AnimatedText
                text="Hi I'm Muhammad Usman. "
                className="text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I am a software engineer, and I have completed my B.Sc. in
                Computer Science at Memorial University of Newfoundland. Most
                of my work is full stack: Next.js, TypeScript, React, and
                Node.js, with PostgreSQL, MongoDB, and Neo4j when the work calls
                for it. At Laniva AI I work on a SaaS product on Azure that uses
                large language models in production. At Memorial I have built
                graph ETL pipelines and Neo4j-backed services, and shipped React
                and Node.js apps on Azure. I also hold the AWS Certified Cloud
                Practitioner certification.
              </p>
              <div className="flex flex-wrap items-center gap-3 self-start mt-2 lg:justify-center lg:self-center w-full max-w-md">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                 hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark
                   hover:dark:text-light hover:dark:border-light md:p-2  md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:m.usman12529@gmail.com"
                  target={"_blank"}
                  className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Decorative light bulb illustration"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
