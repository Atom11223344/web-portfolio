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