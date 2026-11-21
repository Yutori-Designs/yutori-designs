"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "@/lib/team";

function MemberCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/our-team/${member.slug}`}
        className="group block text-left rounded-2xl bg-white border border-ink-900/8 overflow-hidden hover:border-brand-400 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      >
        <div className="relative aspect-[6/5] overflow-hidden bg-ink-800">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role} at Yutori Designs`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-700 via-ink-800 to-ink-900">
              <span className="font-display text-5xl text-paper/90">{initials}</span>
            </div>
          )}
          <div
            className="absolute top-0 left-0 w-10 h-10 bg-brand-600"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl text-ink-900">{member.name}</h3>
          <p className="text-brand-600 text-sm mt-1 mb-3">{member.role}</p>
          <p className="text-ink-700 text-[14px] leading-relaxed line-clamp-2">
            {member.bio}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:text-brand-600 transition-colors">
            Read full bio
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {team.map((member) => (
        <MemberCard key={member.slug} member={member} />
      ))}
    </div>
  );
}