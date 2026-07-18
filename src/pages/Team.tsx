import { Layout } from '@/components/Layout';
import { Card, Chip } from '@heroui/react';

import clubGroupPhoto from '@/assets/club-group-photo.jpg';
import mentorNiaz from '@/assets/mentor-niaz-majumdar.png';
import mentorSarowar from '@/assets/mentor-sarowar-hossain.png';
import mentorTasnova from '@/assets/mentor-tasnova-ulfat.png';

import chayanAdhikary from '@/assets/chayan-adhikary-president.jpg';
import rahatAhmed from '@/assets/rahat-ahmed.jpg';
import amitGhosh from '@/assets/amit-ghosh-gs.jpg';
import dipaBasak from '@/assets/dipa-basak-treasurer.jpg';
import khaledRaihan from '@/assets/khaled-raihan-program-coord.jpg';
import ratulHasanSiam from '@/assets/ratul-hasan-siam.jpg';
import towsifBillah from '@/assets/towsif-billah.jpg';
import fawziahSadika from '@/assets/fawziah-sadika-exec.jpg';

const ACCENT = '#22559f';

type Mentor = {
  name: string;
  title: string;
  department: string;
  photo: string;
};

type BoardMember = {
  name: string;
  role: string;
  focus?: string;
  photo: string;
};

const MENTORS: Mentor[] = [
  {
    name: 'Mohammed Niaz Majumdar',
    title: 'Senior Assistant Professor',
    department: 'Department of Journalism and Mass Communication',
    photo: mentorNiaz,
  },
  {
    name: 'Dr. Md. Sarowar Hossain',
    title: 'Assistant Professor',
    department: 'Department of Natural Science (Physics)',
    photo: mentorSarowar,
  },
  {
    name: 'Tasnova Jerin Ulfat',
    title: 'Lecturer',
    department: 'Department of Social Science',
    photo: mentorTasnova,
  },
];

const BOARD: BoardMember[] = [
  { name: 'Chayan Adhikary', role: 'President', photo: chayanAdhikary },
  { name: 'Rahat Ahmed', role: 'Vice President', photo: rahatAhmed },
  { name: 'Amit Ghosh', role: 'General Secretary', photo: amitGhosh },
  { name: 'Dipa Basak', role: 'Treasurer', photo: dipaBasak },
  { name: 'Khaled Md Raihan', role: 'Program Coordinator', photo: khaledRaihan },
  {
    name: 'Md Ratul Hasan Siam',
    role: 'Executive',
    focus: 'Event Management and Logistics Support',
    photo: ratulHasanSiam,
  },
  {
    name: 'Md. Towsif Billah',
    role: 'Executive',
    focus: 'Club Welfare and Member Services',
    photo: towsifBillah,
  },
  {
    name: 'Fawziah Sadika',
    role: 'Executive',
    focus: 'Club Branding, Communications, and Public Relations',
    photo: fawziahSadika,
  },
];

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div className="w-full group cursor-pointer">
      <Card className="transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1" variant="default">
        <div className="sm:flex">
          <div className="sm:w-48 h-56 sm:h-auto shrink-0 overflow-hidden bg-gray-100">
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center gap-3">
            <div>
              <p className="font-serif text-lg text-gray-900">{mentor.name}</p>
              <p className="text-xs text-gray-500 mt-1">{mentor.department}</p>
            </div>
            <div className="h-px w-10" style={{ backgroundColor: ACCENT }}></div>
            <p className="text-sm font-medium" style={{ color: ACCENT }}>{mentor.title}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function BoardCard({ member, isFeatured = false }: { member: BoardMember; isFeatured?: boolean }) {
  return (
    <div className={`group cursor-pointer ${isFeatured ? 'w-full max-w-sm mx-auto' : 'w-full'}`}>
      <Card className="transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative overflow-hidden h-80 bg-gray-100">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="font-serif text-lg text-white">{member.name}</p>
          </div>
        </div>
        <div className="px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
            <span className="text-sm font-medium" style={{ color: ACCENT }}>{member.role}</span>
          </div>
          {member.focus && (
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">{member.focus}</p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default function Team() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950">
        <div className="absolute inset-0 opacity-20">
          <img
            src={clubGroupPhoto}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <Chip className="mb-6 bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20">
              AIUB Photography Club
            </Chip>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Mentors & Executive Board
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl font-light">
              The faculty mentors who guide us and the 11th Executive Committee running the
              club day to day.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
              <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                Faculty Mentors
              </span>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {MENTORS.map((mentor) => (
                <MentorCard key={mentor.name} mentor={mentor} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
              <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                11th Executive Committee
              </span>
            </div>

            <div className="mb-8">
              <BoardCard member={BOARD[0]} isFeatured />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {BOARD.slice(1).map((member) => (
                <BoardCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        </div>

      </div>
    </Layout>
  );
}
