import type { Metadata } from "next";
import Image from "next/image";
import ProjectCard, { projects } from "../components/ProjectCard";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "Nicholas Connelly",
  description: "Exploring health, finance, and the nature of things.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/images/nick/nicholas-personal-2.jpeg"
          alt="Nicholas Connelly"
          fill
          priority
          className="object-cover object-[center_25%] md:object-[center_30%] lg:object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-black/5" />

        <div className="flex flex-col min-h-screen relative w-full pt-20">
          <div className="relative z-10 max-w-4xl mx-auto container-padding w-full mt-36 md:mt-44">
            <h1 className="font-light text-white leading-tight mb-8 animate-fade-in text-5xl md:text-[4.25rem]">
              Nicholas Connelly
            </h1>
            <p className="text-2xl text-white leading-relaxed max-w-2xl animate-slide-up">
              Exploring health, finance, and the nature of things
            </p>
          </div>
        </div>
      </div>

      <section id="about" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-light text-gray-800 leading-tight mb-8">
              About Me
            </h2>
          </div>

          <div className="max-w-none text-gray-800 leading-relaxed space-y-6 animate-fade-in">
            <p className="text-lg">
              I&apos;m Nick Connelly, a third-year student at the University of Georgia studying Exercise and Sport Science. My passions lie at the crossroads of health, finance, and philosophy. Whether it&apos;s helping others navigate wellness, finances, and the human body, I find purpose to always question what&apos;s around us.
            </p>
            <p className="text-lg">
              Outside of academics, I spend time gardening, being outdoors, and reading—often drawing inspiration from the stoics and in my faith in Jesus. My long-term path is in the medical field, where I&apos;m pursuing studies toward becoming a certified Anesthesiology Assistant (CAA).
            </p>
            <p className="text-lg">
              I founded Muscadine to help others navigate the emerging world of cryptography and decentralized finance, and created a personal health and wellness site to share tools for preventing lifestyle-related chronic diseases. My commitment to health and community led me to create NEST Run Club which has led to a massive growth in students&apos; fitness and wellbeing at UGA. At the core of everything I do is a simple value: helping others, while living in the nature of truth.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-light text-gray-800 leading-tight mb-8">
              Projects & Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my work in health technology, community building, and global health initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
