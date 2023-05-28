"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={"/images/temp/profile.jpg"}
            alt={"My Picture"}
            width={600}
            height={600}
            className="relative rounded-full h-64 w-64 mx-auto object-cover"
          />
        </motion.div>
        <p className="text-3xl mt-5">Welcome!</p>
        <p className="text-lg mt-5 px-5">
          Hi my name is James Park. I&apos;m a full stack web developer with 5
          years of experience in Los Angeles, California.
        </p>
      </div>
      <Footer />
    </main>
  );
}
