import TopNav from "../ui/HeadNav/TopNav";
import Footer from "../ui/Footer/Footer";
import { fetchProjectsInTypes, fetchTagsInGroups } from "../lib/data";
import { TagGroup } from "../lib/types";
import ProjectsSkeleton from "../ui/Projects/ProjectsSkeleton";
import { CurrentThemeProps } from "../lib/interfaces";

export default async function Page({
  currentTheme,
  setCurrentTheme,
}: CurrentThemeProps) {
  const tagsByGroup = (await fetchTagsInGroups()) as TagGroup[];
  const { realWorldProjectsData, otherProjectsData } =
    await fetchProjectsInTypes();

  return (
    <>
      <header>
        <TopNav currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      </header>
      <div>
        <ProjectsSkeleton
          {...{ tagsByGroup, realWorldProjectsData, otherProjectsData }}
        />
        <Footer />
      </div>
    </>
  );
}
