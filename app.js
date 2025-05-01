import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ClassesSection from './components/ClassesSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import './assets/css/style.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        {/* Add other sections similarly */}
        <ClassesSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
