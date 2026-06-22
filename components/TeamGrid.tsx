"use client";

import { motion } from "framer-motion";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {team.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center p-8 rounded-2xl bg-white border border-ink-900/8"
        >
          <div className="w-20 h-20 rounded-full bg-brand-100 mx-auto mb-5 flex items-center justify-center font-display text-2xl text-brand-600">
            {member.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <h3 className="font-display text-xl text-ink-900">{member.name}</h3>
          <p className="text-brand-600 text-sm mt-1 mb-3">{member.role}</p>
          <p className="text-ink-700 text-[14px] leading-relaxed">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  );
}
