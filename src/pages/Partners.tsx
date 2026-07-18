import { Layout } from '@/components/Layout';
import { Card, Chip } from '@heroui/react';

import clubGroupPhoto from '@/assets/club-group-photo.jpg';

const ACCENT = '#22559f';

export default function Partners() {
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
              Our Partners
            </Chip>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Partners
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl font-light">
              We collaborate with industry leaders to bring the best opportunities to our members.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-block w-8 h-[1px]" style={{ backgroundColor: ACCENT }}></span>
              <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ACCENT }}>
                Official Partners
              </span>
            </div>

            <Card variant="default" className="p-8 md:p-12 max-w-2xl">
              <Card.Content className="p-0">
                <h2 className="text-2xl font-serif text-gray-900 mb-2">Sony Bangladesh</h2>
                <p className="text-sm text-gray-500 mb-6">Memorandum of Intent</p>
                <p className="text-gray-600 leading-relaxed">
                  AIUB Photography Club has signed a Memorandum of Intent (MOI) with Sony Bangladesh,
                  establishing a strategic partnership to support photography education through equipment
                  access, professional mentorship, and industry engagement.
                </p>
              </Card.Content>
            </Card>

            <Card variant="default" className="p-8 md:p-12 max-w-2xl mt-6">
              <Card.Content className="p-0">
                <h2 className="text-2xl font-serif text-gray-900 mb-2">Digital Shop</h2>
                <p className="text-sm text-gray-500 mb-6">Official Partner</p>
                <p className="text-gray-600 leading-relaxed">
                  Digital Shop, Bangladesh's largest multi-brand camera and accessories showroom,
                  provided AIUB Photography Club with more than 20 mirrorless cameras and lenses,
                  giving members direct access to industry-standard equipment for learning and
                  creative development.
                </p>
              </Card.Content>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  );
}
