import { Layout } from '@/components/Layout';
import { Card, Chip } from '@heroui/react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

import clubGroupPhoto from '@/assets/club-group-photo.jpg';

const ACCENT = '#22559f';

const CONTACTS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '01854056655',
    href: 'tel:+8801854056655',
    color: 'success' as const,
    bgClass: 'bg-emerald-50 border-emerald-200',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'aiubphotographyclub@gmail.com',
    href: 'mailto:aiubphotographyclub@gmail.com',
    color: 'accent' as const,
    bgClass: 'bg-blue-50 border-blue-200',
  },
  {
    icon: ExternalLink,
    label: 'Facebook',
    value: 'AIUB Photography Club',
    href: 'https://www.facebook.com/AIUBPC',
    color: 'default' as const,
    bgClass: 'bg-gray-50 border-gray-200',
  },
  {
    icon: ExternalLink,
    label: 'Instagram',
    value: '@aiubpcofficial',
    href: 'https://www.instagram.com/aiubpcofficial',
    color: 'warning' as const,
    bgClass: 'bg-purple-50 border-purple-200',
  },
];

const HIGHLIGHTS = [
  { number: '20+', label: 'Years Active' },
  { number: '125+', label: 'Active Members' },
  { number: '9', label: 'Exhibitions Hosted' },
  { number: '1000+', label: 'Photographs Exhibited' },
];

export default function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-950">
        <div className="absolute inset-0 opacity-40">
          <img
            src={clubGroupPhoto}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <Chip className="mb-6 bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20">
              About Us
            </Chip>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-[1.1]">
              AIUB Photography Club
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl font-light">
              One of the oldest and most active student-run photography organizations at
              the American International University — Bangladesh.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <section className="mb-24">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
                  <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                    Our Story
                  </span>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The AIUB Photography Club has been dedicated to the art and practice of photography
                    since its inception in 2005. What began as a small group of passionate students has
                    grown into one of the most recognized student organizations at AIUB.
                  </p>
                  <p>
                    Our mission is to provide students with opportunities to learn about the fundamentals
                    of photography, develop their creative skills, and share their work by collaborating
                    with a network of professional photographers, artists, and enthusiasts.
                  </p>
                  <p>
                    From our flagship exhibition "Tale of the Darkroom" to regular workshops, photo walks,
                    and community events — we are committed to fostering a vibrant creative community on campus
                    and beyond.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Card variant="tertiary" className="p-8">
                  <Card.Header>
                    <Card.Title className="text-lg">Quick Facts</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <dl className="space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <dt className="text-sm text-gray-500">Founded</dt>
                        <dd className="text-sm font-medium text-gray-900">2005</dd>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <dt className="text-sm text-gray-500">University</dt>
                        <dd className="text-sm font-medium text-gray-900">AIUB</dd>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <dt className="text-sm text-gray-500">Type</dt>
                        <dd className="text-sm font-medium text-gray-900">Student Organization</dd>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <dt className="text-sm text-gray-500">Focus</dt>
                        <dd className="text-sm font-medium text-gray-900">Photography & Visual Arts</dd>
                      </div>
                    </dl>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {HIGHLIGHTS.map((item) => (
                <Card key={item.label} variant="default" className="p-6 text-center">
                  <Card.Content className="p-0">
                    <div className="text-3xl md:text-4xl font-serif text-emerald-700 mb-1">
                      {item.number}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-500">
                      {item.label}
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
              <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                Mission & Values
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Learn',
                  desc: 'We believe in hands-on learning — from mastering camera settings to understanding light and composition through practical experience.',
                  gradient: 'from-blue-500 to-indigo-600',
                  bgLight: 'bg-blue-50',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                      <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: 'Create',
                  desc: 'We encourage every member to develop their unique visual voice, experiment with new techniques, and push the boundaries of creative expression.',
                  gradient: 'from-amber-500 to-orange-600',
                  bgLight: 'bg-amber-50',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                      <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: 'Share',
                  desc: 'We foster a supportive community where feedback flows freely, work is celebrated, and opportunities are shared among members and beyond.',
                  gradient: 'from-rose-500 to-pink-600',
                  bgLight: 'bg-rose-50',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                      <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={item.title} className={`relative rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-lg hover:-translate-y-1`}>
                  <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-xl ${item.bgLight} flex items-center justify-center mb-5`} style={{ color: i === 0 ? '#3b82f6' : i === 1 ? '#f59e0b' : '#f43f5e' }}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-serif text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </Layout>
  );
}
