// src/components/ProjectCard.tsx
"use client";

import { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"; // ใช้ Image ของ Next.js เพื่อความเร็ว

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  highlight: string;
  link: string;
  github: string;
  images: string[]; // รับเป็น Array
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  // Logic สำหรับเลื่อนรูป
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-black border border-white/20 p-8 rounded-none w-full max-w-4xl mx-auto mb-16 shadow-2xl">
      
      {/* 1. HEADER (Centered) */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white tracking-widest uppercase mb-2">
          {project.title}
        </h3>
        <span className="text-xs font-mono text-gray-400 border border-gray-600 px-2 py-1">
          {project.highlight}
        </span>
      </div>

      {/* 2. IMAGE CAROUSEL (The Sketch Feature) */}
      <div className="relative w-full aspect-video bg-gray-900 mb-8 border border-gray-800 group">
        {/* รูปภาพ */}
        <div className="relative w-full h-full overflow-hidden">
           {/* กรณีไม่มีรูป หรือรูปหาไม่เจอ จะแสดงพื้นที่สีเทา */}
           {project.images.length > 0 ? (
             <img 
               src={project.images[currentImageIndex]} 
               alt={project.title}
               className="w-full h-full object-cover transition-all duration-500"
             />
           ) : (
             <div className="flex items-center justify-center h-full text-gray-600">No Image Available</div>
           )}
        </div>

        {/* ปุ่มกดเลื่อนซ้ายขวา (จะโชว์เมื่อเอาเมาส์ชี้ หรือกดในมือถือ) */}
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* จุดบอกตำแหน่งรูป (Dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 3. CONTENT & DESCRIPTION (Centered) */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg">
          {project.description}
        </p>
        
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-sm text-gray-400 border border-gray-700 px-3 py-1 bg-gray-950">
              {tech}
            </span>
          ))}
        </div>

        {/* 4. BUTTONS (Centered & Side-by-Side) */}
        <div className="flex justify-center gap-6">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold hover:bg-gray-300 transition-colors"
          >
            <ExternalLink size={18} /> Demo App
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <Github size={18} /> Source Code
          </a>
        </div>
      </div>

    </div>
  );
}