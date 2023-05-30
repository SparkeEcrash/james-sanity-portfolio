import Navigation from "../../components/navigation";
import Jobs from "../../components/jobs";
import Footer from "../../components/footer";
import { getPageDataNoCache } from "../../utils/fetchData";

export default async function Experience() {
  const data = await getPageDataNoCache("/api/getExperience");
  console.log(data);
  const jobOne = data.jobs[0];
  const jobTwo = data.jobs[1];
  console.log("break");
  console.log(data.techListHeader);
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navigation />
      <Jobs
        techListHeader={data.techListHeader}
        jobOne={{ name: "something" }}
        jobTwo={{ name: "something" }}
      />
      <Footer />
    </main>
  );
}
