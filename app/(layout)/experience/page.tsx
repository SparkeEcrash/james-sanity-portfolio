import Jobs from "../../../components/jobs";
import { getPageData } from "../../../utils/fetchData";
import { IExperiencePageData } from "../../../typings";

export default async function Experience() {
  const data: IExperiencePageData = await getPageData(
    "/api/getExperience"
  );
  const jobOne = data.jobs[0];
  const jobTwo = data.jobs[1];
  return (
    <main className="relative flex flex-col items-center">
      <Jobs
        techListHeader={data.techListHeader}
        jobOne={jobOne}
        jobTwo={jobTwo}
      />
    </main>
  );
}
