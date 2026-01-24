import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import febiolaImage from "@/assets/person/febi.jpg"
import chelinaImage from "@/assets/person/cheline.jpg"
import nataniaImage from "@/assets/person/natania.jpg"
import anandaImage from "@/assets/person/nanda.jpg"
import virdioImage from "@/assets/person/virdio.jpg"
import ibnuImage from "@/assets/person/ibnu.jpg"
import kharaviImage from "@/assets/person/arthur.jpg"
import baktiImage from "@/assets/person/bakti.jpg"
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
    image: febiolaImage,
  },
  {
    id: 7,
    name: "Kharavi Arthur Lukmana",
    role: "Operations Lead",
    image: kharaviImage,
  },  
  {
    id: 2,
    name: "Chelina Diah Palupy",
    role: "Marketing Lead",
    image: chelinaImage,
  },

  {
    id: 8,
    name: "Bakti Darmawan",
    role: "Technology Lead",
    image: baktiImage,
  },
  {
    id: 4,
    name: "Ananda Oktaviana",
    role: "Content Creator",
    image: anandaImage,
  },
  {
    id: 6,
    name: "Ibnu Hanif Qodlisyah",
    role: "Finance Officer",
    image: ibnuImage,
  },

  {
    id: 3,
    name: "Natania",
    role: "Creative Designer",
    image: nataniaImage,
  },
  {
    id: 5,
    name: "Virdio Saragih",
    role: "Web Developer",
    image: virdioImage,
  },
]

export function TeamSection() {
  return (
    <section className="container mx-auto px-4">
      <div 
        className="mb-8 md:mb-12 flex flex-col gap-4 md:gap-6 md:flex-row md:items-end md:justify-between"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 lg:text-4xl relative inline-block">
          Dibalik MiBi-Tech
          <svg
            className="absolute -bottom-2 md:-bottom-3 left-0 w-1/2 h-3 md:h-4"
            viewBox="0 0 200 12"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2 8.5C20 3.5 40 10.5 60 6.5C80 2.5 100 9.5 120 5.5C140 1.5 160 8.5 180 4.5C190 2.5 198 6.5 198 6.5"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-scribble"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: 300,
              }}
            />
          </svg>
        </h2>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
