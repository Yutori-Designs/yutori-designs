"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string; // optional -- falls back to a monogram tile if not set
  joinedDate?: string; // e.g. "Since 2019"
}

function PortraitFrame({
  member,
  size,
}: {
  member: TeamMember;
  size: "card" | "modal";
}) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const isCard = size === "card";

  return (
    <div
      className={`relative overflow-hidden bg-ink-800 ${
        isCard
          ? "aspect-[6/5] rounded-t-2xl w-full"
          : "w-56 h-64 rounded-2xl mx-auto"
      }`}
    >
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes={isCard ? "(max-width:640px)100vw,33vw" : "224px"}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-700 via-ink-800 to-ink-900">
          <span className="font-display text-5xl text-paper/90">
            {initials}
          </span>
        </div>
      )}

      <div
        className="absolute top-0 left-0 w-10 h-10 bg-brand-600"
        style={{
          clipPath: "polygon(0 0,100% 0,0 100%)",
        }}
      />
    </div>
  );
}

function MemberCard({ member, onOpen }: { member: TeamMember; onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group text-left rounded-2xl bg-white border border-ink-900/8 overflow-hidden hover:border-brand-400 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <PortraitFrame member={member} size="card" />
      <div className="p-6">
        <h3 className="font-display text-xl text-ink-900">{member.name}</h3>
        <p className="text-brand-600 text-sm mt-1 mb-3">{member.role}</p>
        <p className="text-ink-700 text-[14px] leading-relaxed line-clamp-2">{member.bio}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:text-brand-600 transition-colors">
          Read full bio
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.button>
  );
}

function MemberModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  return (
    <AnimatePresence>
  {member && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-ink-900/70 backdrop-blur-sm flex items-center justify-center p-5 sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white hover:bg-brand-300 flex items-center justify-center transition-colors shadow-md"
        >
          <X size={18} />
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-8">
          {/* Image */}
          <div className="flex justify-center">
            <PortraitFrame member={member} size="modal" />
          </div>

          {/* Name */}
          <h3 className="mt-6 text-center font-display text-3xl font-bold text-ink-900">
            {member.name}
          </h3>

          {/* Designation */}
          <p className="mt-2 text-center text-lg font-medium text-brand-600">
            {member.role}
          </p>

          {/* Joined Date */}
          {member.joinedDate && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-stone-500">
              <Calendar size={15} />
              <span>{member.joinedDate}</span>
            </div>
          )}

          {/* Bio */}
          <div className="mt-8 border-t border-ink-900/10 pt-8">
            {member.bio.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-5 text-center text-[16px] leading-8 text-ink-700 last:mb-0 text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
}

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {team.map((member) => (
          <MemberCard key={member.name} member={member} onOpen={() => setActive(member)} />
        ))}
      </div>
      <MemberModal member={active} onClose={() => setActive(null)} />
    </>
  );
}