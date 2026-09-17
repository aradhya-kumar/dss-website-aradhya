"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface BoardMember {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

/* -------------------------------------------------------------------------- */
/* Image folders                                                              */
/* IMPORTANT: these folder names MUST match public/ exactly.                  */
/* -------------------------------------------------------------------------- */

const CURRENT_IMAGE_PATH = "/TeamImages/Class_2026";
const PREVIOUS_IMAGE_PATH = "/TeamImages/Class_2025";
const CARD_IMAGE_SIZES = "(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 17vw";

/* -------------------------------------------------------------------------- */
/* Current Tenure                                                             */
/* -------------------------------------------------------------------------- */

const currentTenureMembers: BoardMember[] = [
  {
    name: "Ettneni Pranith Varma",
    role: "Chairperson",
    image: `${CURRENT_IMAGE_PATH}/Pranith.jpg`,
  },
  {
    name: "Rashi Rai",
    role: "Vice-Chairperson",
    image: `${CURRENT_IMAGE_PATH}/Rashi.jpg`,
  },
  {
    name: "Yasheka Sharma",
    role: "General Secretary",
    image: `${CURRENT_IMAGE_PATH}/Yasheka.jpg`,
  },
  {
    name: "Surya Pratap Singh",
    role: "Head of Technical Department",
    image: `${CURRENT_IMAGE_PATH}/Surya.jpg`,
  },
  {
    name: "Mayank Sharma",
    role: "Sub-Head of Technical Department",
    image: `${CURRENT_IMAGE_PATH}/Mayank.jpg`,
  },
  {
    name: "Rachit Patel",
    role: "Sub-Head of Technical Department",
    image: `${CURRENT_IMAGE_PATH}/Rachit.jpg`,
  },
  {
    name: "Shivangi Mohanty",
    role: "Sub-Head of Technical Department",
    image: `${CURRENT_IMAGE_PATH}/Shivangi.jpg`,
  },
  {
    name: "Kapish Verma",
    role: "Head of Management Department",
    image: `${CURRENT_IMAGE_PATH}/Kapish.jpg`,
  },
  {
    name: "Deepika Malani",
    role: "Head of Management Department",
    image: `${CURRENT_IMAGE_PATH}/Deepika.jpg`,
  },
  {
    name: "Sarthak Khandelwal",
    role: "Sub-Head of Management Department",
    image: `${CURRENT_IMAGE_PATH}/Sarthak.png`,
  },
  {
    name: "Mohit",
    role: "Sub-Head of Management Department",
    image: `${CURRENT_IMAGE_PATH}/Mohit.jpg`,
  },
  {
    name: "Ashrith Jangam",
    role: "Head of Media Department",
    image: `${CURRENT_IMAGE_PATH}/Ashrith.jpg`,
  },
  {
    name: "Naqi Haider Rizvi",
    role: "Sub-Head of Media Department",
    image: `${CURRENT_IMAGE_PATH}/Haider.jpg`,
  },
  {
    name: "Ojas Ruhil",
    role: "Sub-Head of Media Department",
    image: `${CURRENT_IMAGE_PATH}/Ojas.jpg`,
  },
  {
    name: "Shinjini Chaudhuri",
    role: "Head of Design Department",
    image: `${CURRENT_IMAGE_PATH}/Shinjini.jpg`,
  },
  {
    name: "Vaibhavi Singh",
    role: "Sub-Head of Design Department",
    image: `${CURRENT_IMAGE_PATH}/Vaibhani.jpg`,
  },
  {
    name: "Bindan M",
    role: "Head of Public Relations and Outreach Department",
    image: `${CURRENT_IMAGE_PATH}/Bindhan.jpg`,
  },
  {
    name: "Ritika Khatri",
    role: "Sub-Head of Public Relations and Outreach Department",
    image: `${CURRENT_IMAGE_PATH}/Ritika.jpg`,
  },
  {
    name: "Anshika",
    role: "Sub-Head of Public Relations and Outreach Department",
    image: `${CURRENT_IMAGE_PATH}/Anshika.jpg`,
  },
  {
    name: "Krrish Agrawal",
    role: "Co-Head of Public Relations and Outreach Department",
    image: `${CURRENT_IMAGE_PATH}/Krrish.jpg`,
  },
  {
    name: "K.V.S Gowtham",
    role: "Head of Research Department",
    image: `${CURRENT_IMAGE_PATH}/Gowtham.jpg`,
  },
  {
    name: "Aradhya Kumar Rao",
    role: "Head of Machine Learning Team",
    image: `${CURRENT_IMAGE_PATH}/Aradhya.jpg`,
  },
  {
    name: "Parvathaneni Santhan Sivaji",
    role: "Head of Strategy Department",
    image: `${CURRENT_IMAGE_PATH}/Santhan.jpg`,
  },
  {
    name: "Pihu Chowdhary",
    role: "Head of Finance Department",
    image: `${CURRENT_IMAGE_PATH}/Pihu.jpg`,
  },
];

/* -------------------------------------------------------------------------- */
/* Previous Tenure                                                            */
/* -------------------------------------------------------------------------- */

const previousTenureMembers: BoardMember[] = [
  {
    name: "Arya Prakash",
    role: "Chairperson",
    image: `${PREVIOUS_IMAGE_PATH}/AryaPrakash.jpg`,
  },
  {
    name: "Rohan Pandey",
    role: "Vice-Chairperson",
    image: `${PREVIOUS_IMAGE_PATH}/ROHANPANDEY.png`,
  },
  {
    name: "Aditya Siwach",
    role: "General Secretary",
    image: `${PREVIOUS_IMAGE_PATH}/AdityaSiwach.jpg`,
  },
  {
    name: "Dhruv Agarwal",
    role: "Head of Operations & Management Department",
    image: `${PREVIOUS_IMAGE_PATH}/DhruvAgarwal.jpg`,
  },
  {
    name: "Mansimer Singh",
    role: "Sub-Head of Operations & Management Department",
    image: `${PREVIOUS_IMAGE_PATH}/MansimerSingh.jpg`,
  },
  {
    name: "Sumukh Gupta",
    role: "Head of Media Department",
    image: `${PREVIOUS_IMAGE_PATH}/SumukhGupta.jpg`,
  },
  {
    name: "Siddhi Sanap",
    role: "Sub-Head of Media Department",
    image: `${PREVIOUS_IMAGE_PATH}/SiddhiSanap.jpg`,
  },
  {
    name: "Pranith Varma",
    role: "Head of Design Department",
    image: `${PREVIOUS_IMAGE_PATH}/PranithVarma.jpg`,
  },
  {
    name: "Aradhya Kumar Rao",
    role: "Sub-Head of Design Department",
    image: `${PREVIOUS_IMAGE_PATH}/AradhyaKumar.jpg`,
  },
  {
    name: "Mayank Singh",
    role: "Head of Machine Learning Department",
    image: `${PREVIOUS_IMAGE_PATH}/MayankSingh.jpg`,
  },
  {
    name: "Jatin Sharma",
    role: "Head of Statistics Department",
    image: `${PREVIOUS_IMAGE_PATH}/JatinSharma.jpg`,
  },
  {
    name: "Suhani Rastogi",
    role: "Head of Content Department",
    image: `${PREVIOUS_IMAGE_PATH}/SuhaniRastogi.jpg`,
  },
  {
    name: "Praney Wadhwa",
    role: "Head of PR & Outreach",
    image: `${PREVIOUS_IMAGE_PATH}/PraneyWadhwa.jpg`,
  },
  {
    name: "Parvathaneni Santhan Sivaji",
    role: "Head of Sponsorship Team",
    image: `${PREVIOUS_IMAGE_PATH}/Santhan.jpg`,
  },
];

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Safe Member Image                                                          */
/* -------------------------------------------------------------------------- */

const MemberImage = ({
  src,
  alt,
  sizes,
  className,
  modal = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  modal?: boolean;
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const handleError = () => {
    /*
     * Keep the card visually alive if a filename is wrong.
     * This also makes debugging easier because the broken path is logged.
     */
    console.error(`DSS Board image could not be loaded: ${src}`);

    setImageSrc("/TeamImages/placeholder.jpg");
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      onError={handleError}
      priority={modal}
      className={className}
    />
  );
};

/* -------------------------------------------------------------------------- */
/* Tenure Section                                                              */
/* -------------------------------------------------------------------------- */

const TenureSection = ({
  members,
  label,
  year,
  onSelectMember,
}: {
  members: BoardMember[];
  label: string;
  year: string;
  onSelectMember: (member: BoardMember) => void;
}) => {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 md:px-16 md:py-28">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ghost year */}
      <div className="pointer-events-none absolute -right-[3vw] top-[5%] select-none">
        <span className="font-poppins text-[24vw] font-black leading-none tracking-[-0.1em] text-white/[0.018]">
          {year.slice(0, 4)}
        </span>
      </div>

      <div className="relative z-10">
        {/* Section heading */}
        <div className="mb-10 border-b border-white/10 pb-5 md:mb-14">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="font-suse-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500 md:text-xs">
                {label}
              </span>
            </div>

            <span className="font-suse-mono text-[10px] tracking-[0.2em] text-neutral-600 md:text-xs">
              {year} / {members.length.toString().padStart(2, "0")} MEMBERS
            </span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div>

              <h2 className="font-poppins text-[15vw] font-black leading-[0.78] tracking-[-0.07em] text-neutral-100 sm:text-[13vw] md:text-[9vw]">
                {label === "Class of 27" ? "DSS 26" : "BOARD"}
                <span className="text-neutral-700">.</span>
              </h2>
            </div>

            <div className="hidden items-center gap-3 pb-2 md:flex">
              <span className="font-suse-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                {members.length} people
              </span>
            </div>
          </div>
        </div>

        {/* Normal-flow responsive board.
            No sticky positioning, no horizontal transform, no artificial
            viewport + track-width section height. Therefore the page can
            never create the previous black dead-zone. */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-x-5 md:gap-y-12">
          {members.map((member, index) => (
            <BoardCard
              key={`${member.name}-${index}`}
              member={member}
              index={index}
              onSelect={() => onSelectMember(member)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Board Card                                                                 */
/* -------------------------------------------------------------------------- */

const BoardCard = ({
  member,
  index,
  onSelect,
}: {
  member: BoardMember;
  index: number;
  onSelect: () => void;
}) => (
  <motion.div
    role="button"
    tabIndex={0}
    aria-haspopup="dialog"
    aria-label={`View ${member.name}'s profile`}
    onClick={onSelect}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect();
      }
    }}
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.045 }}
    whileTap={{
      scale: 0.975,
    }}
    transition={{
      type: "spring",
      stiffness: 280,
      damping: 22,
      mass: 0.45,
    }}
    className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-neutral-950 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow] duration-500 hover:z-30 hover:border-white/35 hover:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.9)] focus-visible:z-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
  >
    <span className="absolute left-3 top-3 z-20 font-suse-mono text-[9px] tracking-[0.2em] text-white/55 transition-colors duration-300 group-hover:text-white">
      {String(index + 1).padStart(2, "0")}
    </span>

    <span className="absolute right-3 top-3 z-20 grid h-7 w-7 translate-y-[-4px] place-items-center rounded-full border border-white/15 bg-black/35 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
      <ArrowUpRight className="h-3.5 w-3.5" />
    </span>

    <MemberImage
      src={member.image}
      alt={member.name}
      sizes={CARD_IMAGE_SIZES}
      className="object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
    />

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

    <div className="absolute inset-x-0 bottom-0 p-4 pt-20 md:p-5 md:pt-24">
      <p className="mb-1 font-suse-mono text-[9px] uppercase tracking-[0.22em] text-white/45">
        DSS / {String(index + 1).padStart(2, "0")}
      </p>

      <h3 className="font-poppins text-sm font-semibold leading-[1.05] text-white md:text-lg">
        {member.name}
      </h3>

      <p className="mt-1 max-w-[95%] font-poppins text-[10px] leading-snug text-neutral-300 md:text-xs">
        {member.role}
      </p>
    </div>

    <div className="pointer-events-none absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/20" />
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/* Member Modal                                                               */
/* -------------------------------------------------------------------------- */

const MemberModal = ({
  member,
  onClose,
}: {
  member: BoardMember;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const links: {
    key: string;
    href?: string;
    label: string;
    Icon: typeof Instagram;
  }[] = [
      {
        key: "instagram",
        href: member.instagram,
        label: "Instagram",
        Icon: Instagram,
      },
      {
        key: "github",
        href: member.github,
        label: "GitHub",
        Icon: Github,
      },
      {
        key: "linkedin",
        href: member.linkedin,
        label: "LinkedIn",
        Icon: Linkedin,
      },
      {
        key: "email",
        href: member.email
          ? `mailto:${member.email}`
          : undefined,
        label: "Email",
        Icon: Mail,
      },
    ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name}'s profile`}
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 16,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 16,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 28,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-64 w-full">
          <MemberImage
            src={member.image}
            alt={member.name}
            sizes="384px"
            modal
            className="object-cover object-top grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        </div>

        <div className="px-6 pb-6 pt-2">
          <h3 className="font-poppins text-2xl font-bold text-white">
            {member.name}
          </h3>

          <p className="mt-1 font-poppins text-sm text-neutral-400">
            {member.role}
          </p>

          <div className="mt-6 flex items-center gap-3">
            {links.map(
              ({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={
                    href && key !== "email"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    href && key !== "email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`${member.name} on ${label}`}
                  aria-disabled={!href}
                  onClick={(e) => {
                    if (!href) {
                      e.preventDefault();
                    }
                  }}
                  className={`grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 ${href
                    ? "border-white/20 text-white hover:bg-white hover:text-black"
                    : "cursor-not-allowed border-white/5 text-neutral-700"
                    }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              )
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

const BoardPage = () => {
  const [selectedMember, setSelectedMember] =
    useState<BoardMember | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* HERO */}
      <header className="relative min-h-[78vh] overflow-hidden px-6 pb-14 pt-32 md:px-16 md:pb-14 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="pointer-events-none absolute -right-[5vw] top-[8vh] select-none">
          <span className="font-poppins text-[32vw] font-black leading-none tracking-[-0.11em] text-white/[0.025]">
            DSS
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />

            <span className="font-suse-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 md:text-xs">
              Data Science Society
            </span>
          </div>

          <span className="font-suse-mono text-[10px] tracking-[0.25em] text-neutral-600 md:text-xs">
            Bennett University
          </span>
        </div>

        <div className="relative z-10 mt-16 md:mt-20">
          <div className="flex items-start gap-4 md:gap-8">
            <span className="mt-3 font-suse-mono text-[10px] text-neutral-600 md:mt-5 md:text-xs">
              01
            </span>

            <div>
              <p className="mb-3 font-suse-mono text-[10px] uppercase tracking-[0.32em] text-neutral-500 md:text-xs">
                The people behind the society
              </p>

              <h1 className="font-poppins text-[19vw] font-black leading-[0.76] tracking-[-0.04em] text-neutral-1000 sm:text-[16vw] md:text-[11vw]">
                TEAM
              </h1>

              <h1 className="font-poppins text-[19vw] font-black leading-[0.76] tracking-[-0.04em] text-neutral-400 sm:text-[16vw] md:text-[11vw]">
                DSS<span className="text-neutral-700">.</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col justify-between gap-8 border-t border-white/10 pt-5 md:mt-20 md:flex-row md:items-end">
          <p className="max-w-md font-poppins text-xs leading-relaxed text-neutral-500 md:text-sm">
            Meet the people shaping DSS, one tenure at a time. Explore the
            current board, then scroll back through the team that came before.
          </p>

          <div className="flex items-center gap-7">
            <div>
              <p className="font-suse-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                Current tenure
              </p>

              <p className="mt-1 font-poppins text-base font-semibold text-neutral-200 md:text-lg">
                2026—27
              </p>
            </div>

            <div className="h-9 w-px bg-white/10" />

            <div className="flex items-center gap-3">
              <span className="font-suse-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                02 TENURES
              </span>

              <span className="text-neutral-500">
                ↓
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* CURRENT BOARD */}
      <TenureSection
        members={currentTenureMembers}
        label="Class of 27"
        year="2026–27"
        onSelectMember={setSelectedMember}
      />

      {/* ERA BREAK */}
      <section className="relative flex min-h-[20vh] items-center overflow-hidden border-y border-white/5 bg-neutral-950 px-6 py-12 md:min-h-[22vh] md:px-16 md:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.08) 0, transparent 38%)",
          }}
        />

        <div className="relative z-10 w-full">
          <div className="flex items-center justify-between font-suse-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600 md:text-xs">
            <span>End of current tenure</span>
            <span>01 / 02</span>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 font-suse-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                Archive loading
              </p>

              <h2 className="font-poppins text-[15vw] font-black leading-[0.75] tracking-[-0.08em] text-neutral-100 md:text-[10vw]">
                ARCHIVE
                <span className="text-neutral-700">.</span>
              </h2>
            </div>

            <p className="max-w-xs font-poppins text-xs leading-relaxed text-neutral-500 md:text-sm">
              Different faces. Different roles. Same society. Keep scrolling
              to revisit the previous board.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-white/10" />

          <div className="mt-3 flex justify-end">
            <span className="font-suse-mono text-[9px] uppercase tracking-[0.25em] text-neutral-700">
              ↓ 2025—26 archive
            </span>
          </div>
        </div>
      </section>

      {/* PREVIOUS BOARD */}
      <TenureSection
        members={previousTenureMembers}
        label="Class of 26"
        year="2025–26"
        onSelectMember={setSelectedMember}
      />

      {/* MEMBER MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            key={selectedMember.name}
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoardPage;


