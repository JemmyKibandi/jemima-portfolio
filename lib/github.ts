const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "JemmyKibandi";

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  topics: string[];
  fork: boolean;
};

export type ProjectCard = {
  name: string;
  title: string;
  description: string;
  image: string;
  url: string;
  language: string | null;
  stars: number;
  topics: string[];
};

function prettifyName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function repoToCard(repo: GithubRepo): ProjectCard {
  return {
    name: repo.name,
    title: prettifyName(repo.name),
    description: repo.description ?? "No description provided.",
    image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
    url: repo.html_url,
    language: repo.language,
    stars: repo.stargazers_count,
    topics: repo.topics,
  };
}

export async function fetchRepo(slug: string): Promise<GithubRepo | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${slug}`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      },
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchTopRepos(count = 6): Promise<ProjectCard[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=100&type=public`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      },
    );

    if (!res.ok) return [];

    const repos: GithubRepo[] = await res.json();

    return repos
      .filter((r) => !r.fork)
      .slice(0, count)
      .map(repoToCard);
  } catch {
    return [];
  }
}
