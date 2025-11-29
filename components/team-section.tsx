import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import personImage from "@/assets/person.png"
import labImage1 from "@/assets/IMG_20240626_181331.jpg"
import labImage2 from "@/assets/IMG_20240717_173102.jpg"
import labImage3 from "@/assets/IMG_20240816_103434.jpg"

interface TeamMember {
  id: number
  name: string
  role: string
  image: any
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Febiola Serafim",
    role: "Chief Scientific Officer",
    image: personImage,
  },
  {
    id: 2,
    name: "Research Team",
    role: "Biotechnology Research",
    image: labImage1,
  },
  {
    id: 3,
    name: "Laboratory Team",
    role: "Quality Assurance",
    image: labImage2,
  },
  {
    id: 4,
    name: "Innovation Team",
    role: "Product Development",
    image: labImage3,
  },
]

export function TeamSection() {
  return (
    <section className="container mx-auto px-4">
      <div 
        className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Meet Our Team</h2>
        <p className="max-w-lg text-right text-sm text-slate-500 md:text-base">
          Our dedicated team of scientists, researchers, and innovators working together to deliver sustainable
          bioenergy solutions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-100"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 w-full p-6 text-white">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-slate-300 mb-2">{member.role}</p>
              <Link
                href="#"
                className="mt-2 flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                Lihat Detail
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
