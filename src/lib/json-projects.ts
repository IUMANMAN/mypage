import fs from "fs";
import path from "path";
import type { Project } from "@/components/project-card";

type JsonSchema = {
  title?: string;
  projects?: Array<{
    title: string;
    intro?: string;
    web?: string;
    image?: string;
    tags?: string[];
    github?: string;
  }>;
};

export function loadProjectsFromJson(jsonFile = path.resolve(process.cwd(), "content/projects.json")): Project[] {
  let raw = "";
  try {
    raw = fs.readFileSync(jsonFile, "utf-8");
  } catch {
    return [];
  }

  let data: JsonSchema | null = null;
  try {
    data = JSON.parse(raw) as JsonSchema;
  } catch {
    return [];
  }

  const items = Array.isArray(data?.projects) ? data!.projects! : [];
  return items.map((p): Project => ({
    title: p.title,
    description: p.intro ?? "",
    liveUrl: p.web,
    imageUrl: p.image,
    tags: Array.isArray(p.tags) ? p.tags : [],
    githubUrl: p.github,
  }));
}

export function loadProjectsTitleFromJson(jsonFile = path.resolve(process.cwd(), "content/projects.json")): string | undefined {
  try {
    const raw = fs.readFileSync(jsonFile, "utf-8");
    const data = JSON.parse(raw) as JsonSchema;
    return data.title ?? undefined;
  } catch {
    return undefined;
  }
}