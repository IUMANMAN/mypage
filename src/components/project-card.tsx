"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, Loader2 } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags = [], imageUrl, githubUrl, liveUrl } = project;
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  return (
    <Card className="overflow-hidden">
      {/* Live Preview Section */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {liveUrl && !iframeError ? (
          <>
            {/* Loading state */}
            {iframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            )}
            {/* Live iframe preview */}
            <iframe
              src={liveUrl}
              title={`${title} preview`}
              className="w-full h-full border-0 bg-white"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIframeLoading(false)}
              onError={() => {
                setIframeError(true);
                setIframeLoading(false);
              }}
            />
            {/* Overlay to prevent interaction */}
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-opacity duration-300"
            >
              <span className="flex items-center gap-2 text-white font-medium bg-primary px-4 py-2 rounded-lg">
                <ExternalLink className="h-4 w-4" />
                Visit Site
              </span>
            </a>
          </>
        ) : imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover bg-muted" />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No preview available</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No tags provided</p>
        )}
      </CardContent>

      <CardFooter className="flex gap-3">
        {liveUrl ? (
          <Button asChild>
            <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Live Demo
          </Button>
        )}
        {githubUrl ? (
          <Button variant="secondary" asChild>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card>
      <div className="w-full" style={{ aspectRatio: "16/9" }}>
        <Skeleton className="w-full h-full" />
      </div>
      <CardHeader>
        <Skeleton className="h-6 w-48" />
        <Skeleton className="mt-2 h-4 w-full max-w-md" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-14" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-10 w-24" />
      </CardFooter>
    </Card>
  );
}