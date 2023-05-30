import AnimatedImage from "../../components/image";
import { getPageDataNoCache } from "../../utils/fetchData";
import { IHomePageData } from "../../typings";

export default async function Home() {
  const data: IHomePageData = await getPageDataNoCache("/api/getHome");
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="text-center">
        <AnimatedImage page="Home" image={data.profilePicUrl!} />
        <p className="text-3xl mt-5">{data.header}</p>
        <p className="text-lg mt-5 px-5">{data.subheader}</p>
      </div>
    </main>
  );
}
