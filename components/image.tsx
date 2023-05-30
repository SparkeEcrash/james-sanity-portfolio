"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  page: string;
  image: string;
};

export default function AnimatedImage({ page, image }: Props) {
  if (page === "Home") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={image}
          alt={"My Picture"}
          width={600}
          height={600}
          className="relative rounded-full h-64 w-64 mx-auto object-cover"
          priority
        />
      </motion.div>
    );
  } else if (page === "About") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[240px] h-[240px] xsm:w-[400px] xsm:h-[400px]"
      >
        <Image
          src={image}
          alt={"My Pictures"}
          fill
          className="relative rounded-xl object-cover"
          sizes="(max-width: 400px) 240px, 400px"
        />
      </motion.div>
    );
  } else {
    return <div></div>;
  }
}
