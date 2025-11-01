import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

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
  return (
    <Card className="overflow-hidden">
      {imageUrl ? (
        <div className="relative h-40 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="p-4">
          <Skeleton className="h-36 w-full" />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
      <CardFooter className="flex gap-2">
        {liveUrl ? (
          <Button asChild>
            <a href={liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Live Demo
          </Button>
        )}
        {githubUrl ? (
          <Button variant="secondary" asChild>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            GitHub
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card>
      <div className="p-4">
        <Skeleton className="h-36 w-full" />
      </div>
      <CardHeader>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="mt-2 h-4 w-64" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </CardFooter>
    </Card>
  );
}