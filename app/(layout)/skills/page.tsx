import Icon from "../../../components/icon";
import { getPageData } from "../../../utils/fetchData";
import { ISkillsPageData } from "../../../typings";

export default async function Skills() {
  const data: ISkillsPageData = await getPageData("/api/getSkills");
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <p className="text-3xl mt-5 text-center">{data.myToolsListHeader}</p>
        <div className="flex w-1/2 flex-wrap justify-center mt-5">
          {data.mySkills.map((skill, i) => (
            <Icon name={skill.name} path={skill.imageUrl!} key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
