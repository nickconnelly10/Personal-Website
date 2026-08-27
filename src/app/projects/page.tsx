import type { Metadata } from "next";
import ProjectCard, { projects } from "../../components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of Nicholas Connelly's work in health, finance, community building, and volunteering.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-light text-gray-800 leading-tight mb-8">
            Projects & Initiatives
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work exploring health, finance, and the nature of things through various projects and initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
