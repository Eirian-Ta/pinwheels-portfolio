import Footer from "../ui/Footer/Footer";
import { fetchProjectsInTypes, fetchTagsInGroups } from "../lib/data";
import { TagGroup } from "../lib/types";
import ProjectsSkeleton from "../ui/Projects/ProjectsSkeleton";
import TopNavWrapper from "../ui/HeadNav/TopNavWrapper";

export default async function Page() {
  const tagsByGroup = (await fetchTagsInGroups()) as TagGroup[];
  const { realWorldProjectsData, otherProjectsData } =
    await fetchProjectsInTypes();

  return (
    <>
      <header>
        <TopNavWrapper />
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
