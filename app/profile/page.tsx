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
    <main className="min-h-screen pt-48 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* --- SECTION 1: ABOUT ME --- */}
        <section className="mb-24 border-b border-border pb-16">
          <h1 className="text-5xl font-extrabold uppercase tracking-widest mb-8">
            About Me
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* รูปโปรไฟล์ (Col 1) */}
            {/* รูปโปรไฟล์ (Col 1) */}
            <div className="col-span-1">
               <div className="w-full aspect-square bg-card border-2 border-border overflow-hidden relative group transition-all duration-500 hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]">
                  
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
              <p className="text-xl text-foreground mb-6 font-light">
                Looking for: <span className="text-foreground font-medium border-b border-border">Web Developer Internship</span>
              </p>
              <p className="text-foreground leading-relaxed mb-8 font-light text-lg">
                นักศึกษาชั้นปีที่ 3 คณะวิศวกรรมศาสตร์ มีความชื่นชอบในการสร้างสรรค์ Web Application ที่ทันสมัย 
                เน้นการใช้งานจริงและประสิทธิภาพที่ดี เชี่ยวชาญใน Stack ของ <strong className="text-foreground">Next.js</strong> และ <strong className="text-foreground">TypeScript </strong>  
                พร้อมเรียนรู้สิ่งใหม่เสมอครับ
              </p>

              {/* Contact Info (Minimal) */}
            {/* Contact Info */}
              <div className="flex flex-col gap-4 mt-6">
                
                {/* Email */}
                <a 
                  
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300 group"
                >
                  {/* จุดกลมๆ: ปกติเทา -> ชี้แล้วเปลี่ยนสีตามธีม */}
                  <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-primary transition-colors duration-300"></span> 
                  <span className="text-lg">atomsunthorn@gmail.com</span>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Atom11223344" 
                  target="_blank" 
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300 group"
                >
                  <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                  <span className="text-lg">GitHub Profile</span>
                </a>

              </div>
            </div>
          </div>
        </section>

       

        {/* --- SECTION 2: TECH STACK (ปรับ Layout ใหม่) --- */}
        <section>
          <h2 className="text-4xl font-extrabold uppercase tracking-widest mb-16 text-right text-foreground">
            Technical Skills
          </h2>
          
          <div className="space-y-20">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-10 border-l-2 border-border pl-4">
                  {group.category}
                </h3>
                
                {/* 2. Grid Layout สำหรับวางไอคอนไว้ข้างบนตัวหนังสือ */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-10">
                  {group.items.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex flex-col items-center justify-center gap-4 group cursor-default transition-transform hover:-translate-y-1 duration-300">
                      {/* ไอคอน (อยู่ข้างบน) */}
                      <span className="text-muted-foreground transition-colors duration-300 group-hover:text-primary group-hover:scale-110">
                        {getSkillIcon(skill)}
                      </span>
                      
                      {/* ตัวหนังสือ (อยู่ข้างล่าง) */}
                      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
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