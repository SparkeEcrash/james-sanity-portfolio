"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Icon from "../../components/icon";

export default function Experience() {
  const [experience, setExperience] = useState<boolean>(true);
  const buttonStyle =
    "transparent-highlight relative rounded-full h-32 w-32 object-cover cursor-pointer";
  const buttonHighlightedStyle =
    "ring-4 ring-offset-8 ring-offset-background-black ring-baby-blue";
  const buttonHoverStyle =
    "hover:ring-4 hover: ring-offset-8 hover: ring-offset-background-black hover:ring-white transition-all duration-200";
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navigation />
      <div className="flex flex-col items-center xsm:flex-row xsm:justify-evenly w-3/4 lg:w-1/2 lg:my-10">
        <Image
          src={"/images/temp/kw.jpg"}
          alt={"KW International logo"}
          width={100}
          height={100}
          className={
            buttonStyle +
            " " +
            "mt-10 first:mt-0 lg:mt-0" +
            " " +
            (experience ? buttonHoverStyle : buttonHighlightedStyle)
          }
          onClick={() => setExperience(false)}
        />
        <Image
          src={"/images/temp/songtradr.jpg"}
          alt={"Songtradr logo"}
          width={100}
          height={100}
          className={
            buttonStyle +
            " " +
            "mt-10 first:mt-0 lg:mt-0" +
            " " +
            (!experience ? buttonHoverStyle : buttonHighlightedStyle)
          }
          onClick={() => setExperience(true)}
        />
      </div>
      {experience ? (
        <div>
          <div className="flex flex-col items-center">
            <p className="text-3xl mt-10 text-center">Software Developer</p>
            <p className="text-lg mt-5 text-center">
              Songtradr (Santa Monica, CA)
            </p>
            <p className="text-lg mt-5 text-center">May 2019 to July 2022</p>
            <p className="text-lg mt-5  w-3/4 lg:w-1/2 indent-10">
              I worked as a developer at Songtradr with a primary responsibility
              on the front end side of web applications ranging from React.js to
              Razor pages in ASP.Net Core. As a member of a small group of five
              we developed several applications for users to handle their data
              on Songtradr's platform including uploading music tracks,
              modifying track data, and hosting advertisements. I was also
              tasked with creating the company's landing pages which prioritized
              SEO and used a headless CMS in order to give the company's
              operations teams the ability to edit the company's websites
              without developer involvement. The job required a good knowledge
              in healthy development practices and working very closely with
              product designers to ensure every detail was successfully met.
            </p>
          </div>
          <div className="mt-10 lg:mt-20 flex flex-col items-center">
            <p className="text-3xl mt-5 text-center">Tech Stack Used</p>
            <div className="flex w-3/4 lg:w-1/2 flex-wrap justify-center mt-5">
              <Icon name="React" path="/images/temp/icons/react_icon.jpg" />
              <Icon name="Redux" path="/images/temp/icons/redux_icon.jpg" />
              <Icon
                name="Javascript"
                path="/images/temp/icons/javascript_icon.jpg"
              />
              <Icon
                name="Typescript"
                path="/images/temp/icons/typescript_icon.jpg"
              />
              <Icon
                name="Sanity.io"
                path="/images/temp/icons/sanityio_icon.jpg"
              />
              <Icon
                name="emotion.js"
                path="/images/temp/icons/emotionjs_icon.jpg"
              />{" "}
              <Icon
                name="Tailwind CSS"
                path="/images/temp/icons/tailwind_icon.jpg"
              />
              <Icon
                name="ASP.NET Core"
                path="/images/temp/icons/aspnetcore_icon.jpg"
              />
              <Icon name="C#" path="/images/temp/icons/csharp_icon.jpg" />
              <Icon name="jQuery" path="/images/temp/icons/jquery_icon.jpg" />
              <Icon name="MongoDB" path="/images/temp/icons/mongo_icon.jpg" />
              <Icon name="AWS" path="/images/temp/icons/aws_icon.jpg" />
              <Icon name="Git" path="/images/temp/icons/git_icon.jpg" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center">
            <p className="text-3xl mt-10 text-center">Full Stack Developer</p>
            <p className="text-lg mt-5 text-center">
              KW International (Carson, CA)
            </p>
            <p className="text-lg mt-5 text-center">March 2016 to May 2019</p>
            <p className="text-lg mt-5 w-3/4 lg:w-1/2 indent-10">
              I first started working for KW International as an Inventory
              Control Analyst writing Excel VBA Macros to expedite and ensure
              data accuracy in 2013 but was pulled to be one of a five man
              developer team to create the company's web information system
              using PHP, Laravel, Javascript, HTML, CSS, MySQL and AWS in 2016.
              The job required working with a MVC software design pattern in
              which I created applications for operation teams to use. The
              applications focused on managing inventory and shipping schedules
              with third party vendors. In addition to making applications, I
              was able to hone my communications skills in determining the
              correct set of deliverables with operations and planning
              relational databases with the dev team.
            </p>
          </div>
          <div className="mt-20 flex flex-col items-center">
            <p className="text-3xl mt-5 text-center">Tech Stack Used</p>
            <div className="flex w-3/4 lg:w-1/2 flex-wrap justify-center mt-5">
              <Icon name="Laravel" path="/images/temp/icons/laravel_icon.jpg" />
              <Icon name="php" path="/images/temp/icons/php_icon.jpg" />
              <Icon name="jQuery" path="/images/temp/icons/jquery_icon.jpg" />
              <Icon name="MySQL" path="/images/temp/icons/mysql_icon.jpg" />
              <Icon name="Git" path="/images/temp/icons/git_icon.jpg" />
              <Icon name="AWS" path="/images/temp/icons/aws_icon.jpg" />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
