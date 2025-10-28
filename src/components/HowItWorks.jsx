import React from 'react';
import { PenSquare, Sparkles, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Share your story',
    icon: PenSquare,
    desc: 'Answer a few thoughtful prompts. Not a profile to impress — a space to be yourself.'
  },
  {
    number: '02',
    title: 'Thoughtful matches',
    icon: Sparkles,
    desc: 'We surface a small number of aligned connections each day so nothing gets lost in the noise.'
  },
  {
    number: '03',
    title: 'Meet with intention',
    icon: HeartHandshake,
    desc: 'Move from chat to meaningful moments, on a timeline that feels human.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-gradient-to-b from-white to-rose-50/60">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ number, title, desc, icon: Icon }) => (
            <div key={number} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 rounded-xl bg-rose-600 px-3 py-1 text-white text-sm font-semibold shadow">
                {number}
              </div>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
