import fs from "fs";
import path from "path";
import type { Project } from "@/components/project-card";

type RawProject = {
  title: string;
  intro?: string;
  web?: string;
  image?: string;
  tags?: string[];
  github?: string;
};

function parseTags(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

// Minimal parser: Each project is a `## Title` heading followed by key: value lines
export function loadProjectsFromMarkdown(mdFile = path.resolve(process.cwd(), "content/projects.md")): Project[] {
  let content = "";
  try {
    content = fs.readFileSync(mdFile, "utf-8");
  } catch {
    return [];
  }

  const lines = content.split(/\r?\n/);
  const projects: RawProject[] = [];
  let current: RawProject | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("## ")) {
      // Start new project
      if (current) projects.push(current);
      current = { title: line.replace(/^##\s+/, "") };
      continue;
    }
    // Skip frontmatter separators and empty lines
    if (line === "---" || line.length === 0) continue;

    // key: value pattern
    const kv = line.match(/^([a-zA-Z_]+):\s*(.+)$/);
    if (kv && current) {
      const key = kv[1].toLowerCase();
      const value = kv[2].trim();
      switch (key) {
        case "intro":
          current.intro = value;
          break;
        case "web":
          current.web = value;
          break;
        case "image":
          current.image = value;
          break;
        case "tags":
          current.tags = parseTags(value);
          break;
        case "github":
          current.github = value;
          break;
      }
    }
  }
  if (current) projects.push(current);

  // Map to UI Project type
  return projects.map((p): Project => ({
    title: p.title,
    description: p.intro ?? "",
    liveUrl: p.web,
    imageUrl: p.image,
    tags: p.tags ?? [],
    githubUrl: p.github,
  }));
}