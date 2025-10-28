import React from 'react';
import { Shield, MessageCircle, Users, Leaf } from 'lucide-react';

const items = [
  {
    icon: Leaf,
    title: 'Depth over swipes',
    desc: 'Fewer, higher-quality matches selected with care — so every conversation has room to breathe.'
  },
  {
    icon: MessageCircle,
    title: 'Prompts that matter',
    desc: 'Share stories, values, and quirks that spark honest, human conversations.'
  },
  {
    icon: Users,
    title: 'Intentional pacing',
    desc: 'Daily rhythm designed to reduce burnout and keep the focus on connection, not scrolling.'
  },
  {
    icon: Shield,
    title: 'Safety & respect',
    desc: 'Clear boundaries, thoughtful moderation, and a culture of kindness from day one.'
  }
];

export default function Ethos() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What makes it different</h2>
        <p className="mt-3 max-w-2xl text-gray-600">We designed every part of the experience to feel calm, honest, and genuinely connective.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-rose-50/40">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rose-100 text-rose-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
