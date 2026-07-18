import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Countdown } from '@/components/Countdown';
import { api } from '@/lib/api';
import todIvMain from '@/assets/tod-iv-main.jpeg';
import todIi from '@/assets/todii.jpg';
import todIii from '@/assets/todiii.jpg';
import todI from '@/assets/tod-i.png';
import clubGroupPhoto from '@/assets/club-group-photo.jpg';

const CLUB_STATS = [
  { label: 'Years Active', value: '20+' },
  { label: 'Active Members', value: '125+' },
  { label: 'Exhibitions Hosted', value: '7' },
];

const ACCENT = '#22559f';

function IconCamera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}
function IconAperture(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v6M12 15v6M21 12h-6M9 12H3M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2M18.4 18.4l-4.2-4.2M9.8 9.8 5.6 5.6" />
    </svg>
  );
}
function IconUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M22 20c0-2.6-2-4.7-4.6-5.4" />
    </svg>
  );
}
function IconMap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M9 20 3 18V6l6 2M9 20l6-2M9 20V8m6 10 6-2V4l-6 2m0 12V6m0 0L9 4" />
    </svg>
  );
}

const PILLARS = [
  {
    icon: IconAperture,
    title: 'Exhibitions',
    desc: "From our very first show at Drik Gallery to Tale of the Darkroom, we put members' work on real walls, in front of real audiences.",
  },
  {
    icon: IconCamera,
    title: 'Workshops & Critique',
    desc: 'Hands-on sessions on exposure, composition, and darkroom technique — taught by seniors, alumni, and visiting photographers.',
  },
  {
    icon: IconMap,
    title: 'Photo Walks',
    desc: 'Regular shoots around Dhaka and beyond — street, portrait, and documentary work, planned and shot as a group.',
  },
  {
    icon: IconUsers,
    title: 'Community',
    desc: 'A standing group of photographers at AIUB who trade feedback, gear, and opportunities year-round — not just at showtime.',
  },
];

export default function Home() {
  const [deadline, setDeadline] = useState<string | null>(null);

  useEffect(() => {
    api<{ date: string | null }>('/settings/deadline')
      .then((d) => setDeadline(d.date))
      .catch(() => {});
  }, []);

  return (
    <Layout>
        <section className="relative w-full bg-white">
        <div className="relative w-full min-h-screen overflow-hidden">
          <img
            src={clubGroupPhoto}
            alt="AIUB Photography Club members"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${ACCENT}e6 0%, ${ACCENT}66 25%, transparent 35%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-end text-center px-6 pb-20 md:pb-2 min-h-screen">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block w-12 h-[1px] bg-white/70"></span>
              <span className="text-white font-mono text-base md:text-base tracking-widest uppercase font-bold">
                AIUB Photography Club
              </span>
              <span className="inline-block w-12 h-[1px] bg-white/70"></span>
            </div>

            <h1
              className="whitespace-nowrap text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1]"
              data-testid="heading-hero"
            >
              A Window To See the world
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-3 border border-white/50 text-white hover:border-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors"
                data-testid="link-about-cta"
              >
                Meet the Club
              </a>
              <a
                href="https://tod4.aiubpc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors hover:text-red-400 bg-black"
                data-testid="link-darkroom-cta"
              >
                Enter the Darkroom
              </a>
            </div>
          </div>
        </div>
      </section>

        <section className="mt-24 mb-24">
          <div className="container mx-auto px-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
              <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                Flagship Exhibition
              </span>
            </div>
          </div>

          <div className="container mx-auto px-6">
          <div className="border border-gray-200 bg-white relative overflow-hidden" data-testid="card-featured-tod4">
            <img src={todIvMain} alt="Tale of the Darkroom IV" className="w-full h-auto object-contain" />

            <div className="p-8 md:p-16 flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
              <div className="max-w-2xl relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-block w-12 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
                  <span
                    className="font-mono text-xs tracking-widest uppercase font-bold"
                    style={{ color: ACCENT }}
                    data-testid="badge-status-open"
                  >
                    Submissions Open
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6" data-testid="heading-tod4">
                  Tale of the Darkroom IV
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed" data-testid="text-tod4-desc">
                  Submit your photographs and become part of AIUB Photography Club's most
                  prestigious exhibition.
                </p>
              </div>

              <div className="relative z-10 shrink-0 mt-8 md:mt-0">
                <a
                  href="https://tod4.aiubpc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors hover:text-red-400 bg-black"
                  data-testid="link-darkroom-cta"
                >
                  Submit Your Work
                </a>
              </div>
            </div>

            {deadline && (
              <div className="border-t border-gray-200 p-8 md:px-16">
                <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">
                  Submission closes in
                </p>
                <Countdown deadline={deadline} />
              </div>
            )}
          </div>
          </div>
        </section>

      <div className="bg-white">
        <div className="container mx-auto px-6 pb-12">
          <section id="about" className="pt-24 mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
              <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                Who We Are
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                  AIUB Photography Club
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  The AIUB Photography Club has been dedicated to the art and practice of photography
                  since its inception in 2005. The club aims to provide students with opportunities to
                  learn about the basics of photography, develop their skills, and share their work by
                  collaborating with a network of professional photographers.
                </p>
              </div>

              <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-4 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                {CLUB_STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-xs font-mono uppercase tracking-widest text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-serif mt-1" style={{ color: ACCENT }}>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
              <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                What We Do
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
              {PILLARS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white p-8 flex flex-col gap-4">
                  <Icon className="h-7 w-7" style={{ color: ACCENT }} />
                  <h3 className="text-lg font-serif text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="container mx-auto px-6 pb-12">
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[1px] bg-blue-600"></span>
              <span className="text-blue-600 font-mono text-xs tracking-widest uppercase font-bold">Previous Editions</span>
            </div>

            <div className="border border-white/10 bg-[#0a0a0a] backdrop-blur-sm rounded-none overflow-hidden flex flex-col md:flex-row mt-6">
              <div className="md:w-[30%] shrink-0">
                <img src={todIii} alt="Tale of the Darkroom III" className="w-full h-64 md:h-full object-contain" />
              </div>

              <div className="p-8 md:p-12 md:w-[70%]">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                  Tale of the Darkroom – Season III
                </h2>
                <p className="text-sm text-white/60 font-mono uppercase tracking-widest mb-6">
                  26–27 January 2024 &middot; National Art Gallery-07, Bangladesh Shilpakala Academy
                </p>
                <p className="text-white/70 leading-relaxed max-w-3xl">
                  AIUB Photography Club (AIUBPC) successfully presented Tale of the Darkroom – Season III,
                  an international photography exhibition showcasing a diverse collection of photographs
                  exploring the human experience through creative visual storytelling. Bringing together
                  photographers, artists, students, and photography enthusiasts, the two-day event celebrated
                  artistic excellence and marked another successful milestone in AIUBPC's journey of promoting
                  photography and visual arts.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-[#0a0a0a] backdrop-blur-sm rounded-none overflow-hidden flex flex-col md:flex-row mt-6">
              <div className="md:w-[30%] shrink-0">
                <img src={todIi} alt="Tale of the Darkroom II" className="w-full h-64 md:h-full object-contain" />
              </div>

              <div className="p-8 md:p-12 md:w-[70%]">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                  Tale of the Darkroom II
                </h2>
                <p className="text-sm text-white/60 font-mono uppercase tracking-widest mb-6">
                  5–10 April 2018 &middot; Bangladesh Shilpakala Academy &amp; AIUB Permanent Campus
                </p>
                <p className="text-white/70 leading-relaxed max-w-3xl">
                  AIUB Photography Club (AIUBPC), under the Office of Student Affairs, AIUB successfully organized
                  Tale of the Darkroom II. The exhibition brought together photographers and photography enthusiasts
                  to celebrate creativity through visual storytelling, marking another successful milestone in AIUBPC's journey.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-[#0a0a0a] backdrop-blur-sm rounded-none overflow-hidden flex flex-col md:flex-row mt-6">
              <div className="md:w-[30%] shrink-0">
                <img src={todI} alt="Tale of the Darkroom I" className="w-full h-64 md:h-full object-contain" />
              </div>

              <div className="p-8 md:p-12 md:w-[70%]">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                  Tale of the Darkroom – I
                </h2>
                <p className="text-sm text-white/60 font-mono uppercase tracking-widest mb-6">
                  5–8 April 2017 &middot; Bangladesh Shilpakala Academy, Dhaka
                </p>
                <p className="text-white/70 leading-relaxed max-w-3xl">
                  Tale of the Darkroom – I, marked the beginning of AIUB Photography Club's flagship
                  photography exhibition. Bringing together talented photographers from universities
                  and colleges across Bangladesh, the event became a remarkable success and established
                  Tale of the Darkroom as AIUBPC's most prestigious photography exhibition. Beginning
                  a legacy that continues to inspire visual storytellers today.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
