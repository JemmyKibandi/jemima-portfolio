import ProjectsPageClient from "@/components/ProjectsPageClient";
import { fetchTopRepos } from "@/lib/github";

export default async function ProjectsPage() {
  const projects = await fetchTopRepos(6);

  return <ProjectsPageClient projects={projects} />;
}
