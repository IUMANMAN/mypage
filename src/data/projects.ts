import type { Project } from "@/components/project-card";
import { loadProjectsFromJson } from "@/lib/json-projects";

const fromJson = loadProjectsFromJson();

export const projects: Project[] =
  fromJson.length > 0
    ? fromJson
    : [
        {
          title: "TaskFlow",
          description: "A minimal Kanban app with realtime updates and offline support.",
          tags: ["Next.js", "Supabase", "PWA"],
          liveUrl: "https://example.com/taskflow",
          githubUrl: "https://github.com/you/taskflow",
        },
        {
          title: "FitTrack",
          description: "Personal fitness tracker with charts and goals.",
          tags: ["Vite", "React", "Charts"],
          githubUrl: "https://github.com/you/fittrack",
        },
        {
          title: "SnapNotes",
          description: "Capture notes with image OCR and tag search.",
          tags: ["Next.js", "OCR", "Tailwind"],
          liveUrl: "https://example.com/snapnotes",
        },
      ];