import React from 'react';
import OrganicHero from './components/OrganicHero';
import Ethos from './components/Ethos';
import HowItWorks from './components/HowItWorks';
import StoryStarter from './components/StoryStarter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <OrganicHero />
      <Ethos />
      <HowItWorks />
      <StoryStarter />
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Organic Love. Grown with care.</p>
          <nav className="flex items-center gap-6">
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#story" className="hover:text-gray-900">Start your story</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
