// src/app/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    // pt-48 = ดันเนื้อหาลงมา 12rem (ประมาณ 192px) รับรองไม่ชนแน่นอน
    <main className="min-h-screen bg-black text-white pt-40 px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        
        {/* หัวข้อ Selected Works */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest mb-4 text-white">
            Selected Works
          </h1>
        </div>

        {/* รายการโปรเจกต์ */}
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            // @ts-ignore
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </main>
  );
}