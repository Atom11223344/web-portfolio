// src/app/profile/page.tsx
import { skills } from "@/data/skills";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiFramer,
  SiNodedotjs, SiExpress, 
  SiPostgresql, SiSupabase, SiPrisma, SiGit, SiGithub, SiVercel 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; 

// ฟังก์ชันเลือกไอคอน (คงเดิมไว้ เพราะ Logic ถูกต้องแล้ว)
const getSkillIcon = (skillName: string) => {
  const iconSize = 48; // ขยายไอคอนให้ใหญ่ขึ้นนิดนึง

  switch (skillName) {
    case "Next.js": return <SiNextdotjs size={iconSize} />;
    case "React": return <SiReact size={iconSize} />;
    case "TypeScript": return <SiTypescript size={iconSize} />;
    case "Tailwind CSS": return <SiTailwindcss size={iconSize} />;
    case "HTML5/CSS3": return <SiHtml5 size={iconSize} />;
    case "Framer Motion": return <SiFramer size={iconSize} />;
    
    case "Node.js": return <SiNodedotjs size={iconSize} />;
    case "Express": return <SiExpress size={iconSize} />;
    case "REST API": return <span className="text-xl font-bold">API</span>;
    
    case "PostgreSQL": return <SiPostgresql size={iconSize} />;
    case "Supabase": return <SiSupabase size={iconSize} />;
    case "Prisma": return <SiPrisma size={iconSize} />;
    case "Git/GitHub": return <SiGithub size={iconSize} />;
    case "Vercel": return <SiVercel size={iconSize} />;
    case "VS Code": return <VscVscode size={iconSize} />;
    
    default: return <span className="text-gray-500">•</span>;
  }
};

export default function ProfilePage() {
  return (
    // ใช้ pt-48 เพื่อดันเนื้อหาหนี Navbar (เหมือนหน้าแรก)
    <main className="min-h-screen bg-black text-white pt-48 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* --- SECTION 1: ABOUT ME --- */}
        <section className="mb-24 border-b border-white/20 pb-16">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest mb-8">
            About Me
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* รูปโปรไฟล์ (Col 1) */}
            {/* รูปโปรไฟล์ (Col 1) */}
            <div className="col-span-1">
               <div className="w-full aspect-square bg-gray-900 border-2 border-white/20 overflow-hidden relative group transition-all duration-500 hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]">
                  
                  {/* รูปภาพ: สีปกติ (ไม่ขาวดำ) + ซูมเข้าช้าๆ นุ่มๆ */}
                  <img 
                    src="/images/profile2.jpg"  // <--- อย่าลืมเช็คชื่อไฟล์รูปจริงของคุณนะครับ
                    alt="Profile Picture" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                  
               </div>
            </div>
            {/* เนื้อหาแนะนำตัว */}
            <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                นายสถาปนา สุนทรศารทูล
              </h2>
              <p className="text-xl text-gray-400 mb-6 font-light">
                Looking for: <span className="text-white font-medium border-b border-white">Web Developer Internship</span>
              </p>
              <p className="text-gray-300 leading-relaxed mb-8 font-light text-lg">
                นักศึกษาชั้นปีที่ 3 คณะวิศวกรรมศาสตร์ มีความชื่นชอบในการสร้างสรรค์ Web Application ที่ทันสมัย 
                เน้นการใช้งานจริงและประสิทธิภาพที่ดี เชี่ยวชาญใน Stack ของ <strong className="text-white">Next.js</strong> และ <strong className="text-white">TypeScript </strong>  
                พร้อมเรียนรู้สิ่งใหม่เสมอครับ
              </p>

              {/* Contact Info (Minimal) */}
              <div className="flex flex-col gap-3 text-gray-400">
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span> atomsunthorn@gmail.com
                </span>
            
                <a href="https://github.com/Atom11223344" target="_blank" className="hover:text-white transition-colors flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span> GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>

       

        {/* --- SECTION 2: TECH STACK (ปรับ Layout ใหม่) --- */}
        <section>
          <h2 className="text-4xl font-extrabold uppercase tracking-widest mb-16 text-right text-white">
            Technical Skills
          </h2>
          
          <div className="space-y-20">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-10 border-l-2 border-blue-500 pl-4">
                  {group.category}
                </h3>
                
                {/* 2. Grid Layout สำหรับวางไอคอนไว้ข้างบนตัวหนังสือ */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-10">
                  {group.items.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex flex-col items-center justify-center gap-4 group cursor-default"
                    >
                      {/* ไอคอน (อยู่ข้างบน) */}
                      <span className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {getSkillIcon(skill)}
                      </span>
                      
                      {/* ตัวหนังสือ (อยู่ข้างล่าง) */}
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white text-center transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}