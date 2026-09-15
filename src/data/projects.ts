export type Project = {
  slug: string
  title: string
  description: string
  technologies: string[]
  platform?: string[]
  featured?: boolean
  image?: string
  liveUrl?: string
  githubUrl?: string
  overview?: string
  problem?: string
  solution?: string
  role?: string
  challenges?: string[]
  result?: string
  year?: string
  category?: string
}

export const projects: Project[] = [
  {
    slug: "roadis",
    title: "ROADIS",
    description: "Sistem pelaporan dan pemetaan kerusakan jalan yang menggabungkan deteksi otomatis berbasis computer vision (YOLOv11), GIS dengan peta interaktif berbasis OpenStreetMap, dan klasifikasi kewenangan jalan untuk mengarahkan laporan ke admin yang tepat.",
    technologies: ["React", "Go", "Flutter", "YOLOv11", "GIS", "OpenStreetMap"],
    image: "/images/projects/roadis/roadis.webp",
    featured: true
  },
  {
    slug: "appkonkos",
    title: "Appkonkos",
    description: "Aplikasi pencarian dan pemesanan kosan serta kontrakan terdekat berbasis web dan mobile.",
    technologies: ["Laravel", "Flutter"],
    platform: ["Web", "Mobile"],
    image: "/images/projects/appkonkos/appkonkos.webp",
    featured: false
  },
  {
    slug: "scrollify",
    title: "Scrollify",
    description: "Website untuk membaca berbagai komik seperti manhwa, manga, dan manhua.",
    technologies: ["React", "Laravel"],
    image: "/images/projects/scrollify/scrollify.webp",
    featured: false
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
