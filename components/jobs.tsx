"use client";
import React, { useState } from "react";
import Image from "next/image";
import Job from "../components/job";
import { IJob } from "../typings";

type JobsProps = {
  techListHeader: string;
  jobOne: IJob;
  jobTwo: IJob;
};

export default function Jobs({ techListHeader, jobOne, jobTwo }: JobsProps) {
  const [experience, setExperience] = useState<boolean>(true);
  const buttonStyle =
    "transparent-highlight relative rounded-full h-32 w-32 object-cover cursor-pointer";
  const buttonHighlightedStyle =
    "ring-4 ring-offset-8 ring-offset-background-black ring-baby-blue";
  const buttonHoverStyle =
    "hover:ring-4 hover: ring-offset-8 hover: ring-offset-background-black hover:ring-white transition-all duration-200";
  return (
    <>
      <div className="flex flex-col items-center xsm:flex-row xsm:justify-evenly w-3/4 lg:w-1/2 lg:my-10">
        <Image
          src={jobOne.imageUrl!}
          alt={`${jobOne.companyName} logo`}
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
          src={jobTwo.imageUrl!}
          alt={`${jobTwo.companyName} logo`}
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
        <Job
          techListHeader={techListHeader}
          companyName={jobTwo.companyName}
          companyLocation={jobTwo.companyLocation}
          dateStarted={jobTwo.dateStarted}
          dateEnded={jobTwo.dateEnded}
          jobSummary={jobTwo.jobSummary}
          jobTitle={jobTwo.jobTitle}
          techs={jobTwo.techs}
        />
      ) : (
        <Job
          techListHeader={techListHeader}
          companyName={jobOne.companyName}
          companyLocation={jobOne.companyLocation}
          dateStarted={jobOne.dateStarted}
          dateEnded={jobOne.dateEnded}
          jobSummary={jobOne.jobSummary}
          jobTitle={jobOne.jobTitle}
          techs={jobOne.techs}
        />
      )}
    </>
  );
}
