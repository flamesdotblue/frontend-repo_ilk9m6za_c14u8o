import React, { useState } from 'react';
import { Heart, Send } from 'lucide-react';

export default function StoryStarter() {
  const [form, setForm] = useState({
    value: '',
    joy: '',
    intention: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="story" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm text-rose-700">
            <Heart className="h-4 w-4" />
            Begin with honesty
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Start your story</h2>
          <p className="mt-2 text-gray-600">Three gentle prompts to set the tone. Share as much or as little as you like.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">What value do you care deeply about in a relationship?</label>
            <textarea
              name="value"
              value={form.value}
              onChange={onChange}
              required
              rows={3}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="e.g., Growing together, kindness in conflict, shared curiosity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">What does a joyful day look like for you?</label>
            <textarea
              name="joy"
              value={form.joy}
              onChange={onChange}
              required
              rows={3}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="e.g., Sunlit breakfast, hiking with a good playlist, cooking for friends"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">What intention are you bringing to dating right now?</label>
            <textarea
              name="intention"
              value={form.intention}
              onChange={onChange}
              required
              rows={3}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="e.g., Building something steady and kind"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              <Send className="h-5 w-5" />
              Get thoughtful matches
            </button>
            {submitted && (
              <span className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Saved locally for now — we’ll use this to guide your first connections.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
