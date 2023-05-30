import Icon from "./icon";
import { ISkill } from "../typings";

type JobProps = {
  techListHeader: string;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  dateStarted: string;
  dateEnded: string;
  jobSummary: string;
  techs: ISkill[];
};

export default function Job({
  techListHeader,
  jobTitle,
  companyName,
  companyLocation,
  dateStarted,
  dateEnded,
  jobSummary,
  techs,
}: JobProps) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-3xl mt-10 text-center">{jobTitle}</p>
        <p className="text-lg mt-5 text-center">
          {companyName} ({companyLocation})
        </p>
        <p className="text-lg mt-5 text-center">
          {dateStarted} to {dateEnded}
        </p>
        <p className="text-lg mt-5  w-3/4 lg:w-1/2 indent-10">{jobSummary}</p>
      </div>
      <div className="mt-10 lg:mt-20 flex flex-col items-center">
        <p className="text-3xl mt-5 text-center">{techListHeader}</p>
        <div className="flex w-3/4 lg:w-1/2 flex-wrap justify-center mt-5">
          {techs.map((tech, i) => (
            <Icon name={tech.name} path={tech.imageUrl!} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
