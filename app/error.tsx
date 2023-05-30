"use client"
import Navigation from "../components/navigation";
import AnimatedImage from "../components/image";
import Footer from "../components/footer";

export default function Error() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="text-center">
        <AnimatedImage
          page="Home"
          image="/images/temp/profile.jpg"
        />
        <p className="text-3xl mt-5">Oops!</p>
        <p className="text-lg mt-5 px-5">Something went wrong.</p>
      </div>
      <Footer />
    </main>
  );
}
