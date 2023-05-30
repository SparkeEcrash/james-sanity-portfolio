import AnimatedImage from "../../../components/image";
import { getPageData } from "../../../utils/fetchData";
import { IAboutPageData } from "../../../typings";

export default async function About() {
  const data: IAboutPageData = await getPageData("/api/getAbout");
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="lg:p-8 flex flex-col lg:flex-row justify-center items-center">
        <AnimatedImage page="About" image={data.aboutPicUrl!} />
        <div className="mt-10 lg:mt-0 w-3/4 lg:w-1/2 lg:pl-20">
          <p className="text-3xl text-center">{data.header}</p>
          <p className="text-lg mt-5 indent-10">{data.story}</p>
        </div>
      </div>
    </main>
  );
}
