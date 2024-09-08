/* eslint-disable react/no-unescaped-entities */
//* LIBRARIES
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

//* Import Components
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { profilePic } from "@/imports";
import { DataAbount } from "@/dummy/About";

const About = () => {
  const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

    return <span ref={ref}></span>;
  };
  return (
    <>
      <Head>
        <title>Muhammad-Profile | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-between dark:text-light ">
        <Layout className="pt-12">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-8xl mb-14 dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Hi, I am Muhammad Usman
              </h2>
              
              <p className="my-2 font-medium">
              A tech enthusiast and developer with a passion for creating innovative digital experiences. Currently in my fourth year studying Computer Science at Memorial University of Newfoundland, I’m all about turning complex problems into elegant solutions.</p>

<p className="my-2 font-medium">
When I’m not buried in textbooks, you’ll find me developing new apps or dreaming up the next tech breakthrough. From building Internship Portal with React.js to scraping Premier League Data and making a machine learning model with it, I tackle every project with enthusiasm and a can-do attitude.</p>

<p className="my-2 font-medium">
At the Muslim Students’ Association at Memorial University, I’m currently leveraging Next.js and TypeScript within an Agile team to develop a scalable web application. I’m also integrating PostgreSQL to enhance our data storage and retrieval capabilities, while using React.js to ensure optimized state management and an organized component architecture.</p>

<p className="my-2 font-medium">
If you’re interested in my projects or just want to chat about tech, feel free to reach out. I’m always up for new challenges and discussions!</p>


             
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl 
            border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4
            md:order-1 md:col-span-8 "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="TanNghia"
                className="w-[365px] h-[441px] object-contain rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between mr-[20px] xl:col-span-8 xl:flex-row xl:items-center md:order-3  ">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={25} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
                sm:text-base xs:text-sm"
                >
                  Projects Completed
                </h2>
              </div>
              
              
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
