import Image from "next/image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="text-center p-10">
        <Image
          src={
            "https://www.jamesjinpark.com/img-backgrounds/proflie_picture.png"
          }
          alt={"My Picture"}
          width={600}
          height={600}
          className="relative rounded-full h-64 w-64 mx-auto object-cover"
        />
        <p className="text-3xl mt-5">My Projects</p>
        <p className="text-lg mt-5">
          Hi my name is James Park. I&apos;m a full stack web developer with 5 years
          of experience in Javascript and PHP based in Los Angeles, California.
        </p>
      </div>
      <Footer />
    </main>
  );
}
