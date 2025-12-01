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
    name: "Febiola Serafim Silitonga",
    role: "Project Lead",
    image: personImage,
  },
  {
    id: 2,
    name: "Chelina Diah Palupy",
    role: "Marketing Lead",
    image: personImage,
  },
  {
    id: 3,
    name: "Natania",
    role: "Creative Designer",
    image: personImage,
  },
  {
    id: 4,
    name: "Ananda Oktaviana",
    role: "Content Creator",
    image: personImage,
  },
  {
    id: 5,
    name: "Virdio Saragih",
    role: "Web Developer",
    image: personImage,
  },
  {
    id: 6,
    name: "Ibnu Hanif Qodlisyah",
    role: "Finance Officer",
    image: personImage,
  },
  {
    id: 7,
    name: "Kharavi Arthur Lukmana",
    role: "Operations Lead",
    image: personImage,
  },
  {
    id: 8,
    name: "Bakti Darmawan",
    role: "Technology Lead",
    image: personImage,
  },
]

export function TeamSection() {
  return (
    <section className="container mx-auto px-4">
      <div 
        className="mb-8 md:mb-12 flex flex-col gap-4 md:gap-6 md:flex-row md:items-end md:justify-between"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 lg:text-4xl">Tim MiBi-Tech</h2>
        <p className="max-w-lg text-left md:text-right text-xs md:text-sm text-slate-500 lg:text-base">
          Tim kami terdiri dari individu-individu berdedikasi yang bekerja sama untuk mengembangkan solusi energi terbarukan dari sampah organik.
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className="group relative aspect-3/4 overflow-hidden rounded-xl md:rounded-2xl bg-slate-100"
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
            <div className="absolute bottom-0 w-full p-3 md:p-6 text-white">
              <h3 className="text-sm md:text-base lg:text-lg font-bold leading-tight">{member.name}</h3>
              <p className="text-xs md:text-sm text-slate-300 mb-1 md:mb-2">{member.role}</p>
              <Link
                href="#"
                className="mt-1 md:mt-2 hidden md:flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                Lihat Detail
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
