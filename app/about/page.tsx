import Image from "next/image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="p-8 flex justify-center items-center">
        <Image
          src={"/images/temp/lfz_1018_cohort_mini.jpg"}
          alt={"My Pictures"}
          width={400}
          height={400}
          className="relative rounded-xl object-cover"
        />
        <div className="w-1/2 pl-20">
          <p className="text-3xl text-center">My Story</p>
          <p className="text-lg mt-5">
            Hi! I&apos;m the guy with the blue shirt and glasses standing at the
            very left. The picture above is from 2019 of my
            cohort when I graduated from a coding bootcamp. I&apos;ve been
            programming since 2015 while working as
            an inventory control analyst at a logistics company called KW
            International. I took my programming abilities to the next level in
            2016 when I started working as a full stack developer with Laravel
            in PHP for the same company I was working at. In 2018 I wanted to
            upgrade my web development capabilities and learn more about
            React.js and so I enrolled in a 4 month long course at Learning
            Fuze, which is the coding bootcamp I mentioned earlier. After
            completing the course I wanted to broaden my programming experience
            by working in different industries and took on a job at a music
            licensing and distribution startup company called Songtradr. The
            covid pandemic changed my job from onsite to offsite and I found
            myself working from home since then. The transition at my workplace
            and the pandemic introduced new challenges in my life. I took some
            time off from working professionally since last year in 2022 and
            have since rediscovered my passion for web development.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
