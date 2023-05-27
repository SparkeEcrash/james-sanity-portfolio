import Image from "next/image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function Experience() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="flex w-1/6 justify-between">
        <Image
          src={"/images/temp/kw.jpg"}
          alt={"KW International"}
          width={100}
          height={100}
          className="relative rounded-full h-32 w-32 object-cover cursor-pointer"
        />
        <Image
          src={"/images/temp/songtradr.jpg"}
          alt={"KW International"}
          width={100}
          height={100}
          className="relative rounded-full h-32 w-32 object-cover cursor-pointer"
        />
      </div>
      <div>
        <div className="flex flex-col items-center">
          <p className="text-3xl mt-10 text-center">Full Stack Developer</p>
          <p className="text-lg mt-5 text-center">March 2016 to May 2019</p>
          <p className="text-lg mt-5 w-1/2">
            I first started working for KW International as an Inventory Control
            Analyst writing Excel VBA Macros to expedite and ensure data
            accuracy in 2013 but was pulled to be one of a five man developer
            team to create the company's web information system using PHP,
            Laravel, Javascript, HTML, CSS, MySQL and AWS in 2016. The job
            required working with a MVC software design pattern in which I
            created applications for operation teams to use. The applications
            focused on managing inventory and shipping schedules with third
            party vendors. While working I was able to hone my communications
            skills in determining the correct set of deliverables with
            operations and planning relational databases with my dev team.
          </p>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <p className="text-3xl mt-5 text-center">Tech Stack Used</p>
          <div className="flex w-1/6 justify-between mt-10">
            <Image
              src={"/images/temp/kw.jpg"}
              alt={"KW International"}
              width={100}
              height={100}
              className="relative rounded-full h-32 w-32 object-cover cursor-pointer"
            />
            <Image
              src={"/images/temp/songtradr.jpg"}
              alt={"KW International"}
              width={100}
              height={100}
              className="relative rounded-full h-32 w-32 object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
