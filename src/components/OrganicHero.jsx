import React from 'react';
import { Heart, Leaf, Sparkles } from 'lucide-react';

export default function OrganicHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-rose-100 to-emerald-50" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 backdrop-blur px-3 py-1 text-sm text-rose-700">
          <Leaf className="h-4 w-4 text-emerald-600" />
          Organic connections, grown with care
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          Find real, organic love
          <span className="block text-rose-600">without the endless swiping</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          We slow things down so something real can grow. Thoughtful prompts, intentional matches, and conversations that feel human.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#story"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-600/20 transition hover:bg-rose-700"
          >
            <Heart className="h-5 w-5" />
            Start your story
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-900 hover:bg-gray-50"
          >
            <Sparkles className="h-5 w-5 text-amber-500" />
            How it works
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[120%] rounded-t-[4rem] bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
