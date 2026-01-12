// src/data/projects.ts

export const projects = [
  {
    id: 1,
    title: "ATX Dashboard",
    description: "Web App สำหรับจัดการพอร์ตหุ้นและคำนวณ Technical Indicators แบบ Real-time ช่วยให้นักลงทุนตัดสินใจได้แม่นยำขึ้น",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Prisma"],
    // เปลี่ยนจาก image เดียว เป็น images หลายรูป
    images: [
      "/images/atx-1.png", // ใส่ชื่อไฟล์รูปจริงของคุณตรงนี้
      "/images/atx-2.png",
      "/images/atx-3.png",
       "/images/atx-4.png",
      "/images/atx-5.png"
    ], 
    link: "https://atx-stock.vercel.app/",
    github: "https://github.com/Atom11223344/atx-stock",
    highlight: "Modern & Powerful"
  },
  {
    id: 3, // ใช้ ID ใหม่ (หรือเลขอะไรก็ได้ที่ไม่ซ้ำ)
    title: "LIFE RPG",
    description: "เปลี่ยนกิจวัตรประจำวันให้เป็นเกม RPG, ระบบ Habit Tracker เต็มรูปแบบที่มาพร้อมการเก็บ XP, อัปเกรด Status (STR/INT/VIT) และระบบจัดตารางออกกำลังกายอัจฉริยะ",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Tailwind"],
    highlight: "Gamified Productivity",
    images: [
      "/images/life-rpg-1.png", // ⚠️ อย่าลืมเอารูปมาใส่และตั้งชื่อตามนี้นะครับ
      "/images/life-rpg-2.png",
      "/images/life-rpg-3.png"
    ],
    link: "https://life-rpg-phi.vercel.app/", // ใส่ลิงก์เว็บจริงตรงนี้
    github: "https://github.com/Atom11223344/Life-RPG", // ใส่ลิงก์ GitHub ตรงนี้
  },
  {
    id: 2,
    title: "DroneAPI Control",
    description: "ระบบควบคุมและแสดงผล Logs ของโดรน ผ่าน Web Interface ธีม Cyberpunk พร้อมระบบ Real-time monitoring",
    techStack: ["Vanilla JS", "HTML5", "CSS3", "Node.js", "Express"],
    images: [
      "/images/drone-1.png",
      "/images/drone-2.png",
      "/images/drone-3.png",
      "/images/drone-4.png"
    ],
    link: "https://drone-frontend-self.vercel.app/",
    github: "https://github.com/Atom11223344/drone-frontend",
    highlight: "Core Foundations"
  }
];