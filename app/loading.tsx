import Navigation from "../components/navigation";
import AnimatedImage from "../components/image";
import Footer from "../components/footer";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="text-center">
        <AnimatedImage
          page="Home"
          image="/images/temp/profile.jpg"
        />
        <p className="text-3xl mt-5">Loading!</p>
        <p className="text-lg mt-5 px-5">Hold on a sec...</p>
      </div>
      <Footer />
    </main>
  );
}
