
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Loading from '@/components/Loading';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-google-sans font-bold text-4xl md:text-6xl text-gdsc-base mb-6">
              Welcome to{" "}
              <span className="text-gdsc-blue">G</span>
              <span className="text-gdsc-red">D</span>
              <span className="text-gdsc-yellow">S</span>
              <span className="text-gdsc-green">C</span>
            </h1>
            <p className="font-roboto text-xl md:text-2xl text-gray-600 mb-8">
              RNS Institute of Technology Chapter
            </p>
            <a 
              href="#about"
              className="inline-block bg-gdsc-blue text-white font-google-sans px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">About Us</h2>
            <div className="max-w-3xl mx-auto">
              <p className="font-roboto text-lg text-gray-700 mb-6">
                Google Developer Student Clubs (GDSC) is a program for university students to learn mobile and web development skills. The club started at RNSIT in 2019 and has been fostering innovation and technical excellence ever since.
              </p>
              <p className="font-roboto text-lg text-gray-700">
                We organize hands-on workshops, coding contests, hackathons, and tech talks to help students bridge the gap between theory and practice.
              </p>
            </div>
          </div>
        </section>

        {/* Members Section Placeholder */}
        <section id="members" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Our Members</h2>
            <p className="text-center text-gray-600">Coming Soon</p>
          </div>
        </section>

        {/* Events Section Placeholder */}
        <section id="events" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Events</h2>
            <p className="text-center text-gray-600">Coming Soon</p>
          </div>
        </section>

        {/* Contact Section Placeholder */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Contact Us</h2>
            <p className="text-center text-gray-600">Coming Soon</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
