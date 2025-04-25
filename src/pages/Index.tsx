import { useState, useEffect } from 'react';
import { Calendar, Users, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';

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

        {/* Members Section */}
        <section id="members" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Our Members</h2>
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center gap-3 text-gdsc-blue mb-8">
                <Users className="w-8 h-8" />
                <span className="text-xl">Meet Our Team</span>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                From our current leadership to our passionate core team members, GDSC RNSIT comprises talented individuals dedicated to fostering tech innovation since 2019.
              </p>
              <Button 
                className="bg-gdsc-blue hover:bg-blue-600"
                onClick={() => window.location.href = '/members'}
              >
                View All Members
              </Button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Events</h2>
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center gap-3 text-gdsc-yellow mb-8">
                <Calendar className="w-8 h-8" />
                <span className="text-xl">Our Activities</span>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Join us for exciting workshops, coding contests, hackathons, and tech talks. Our events are designed to help you learn, grow, and connect with fellow developers.
              </p>
              <Button 
                className="bg-gdsc-yellow hover:bg-yellow-500 text-black"
                onClick={() => window.location.href = '/events'}
              >
                View All Events
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Contact Us</h2>
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center gap-3 text-gdsc-red mb-8">
                <Mail className="w-8 h-8" />
                <span className="text-xl">Get in Touch</span>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Have questions or want to collaborate? Reach out to us through our social media channels or send us a message directly.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  className="bg-gdsc-blue hover:bg-blue-600"
                  onClick={() => window.open('https://www.linkedin.com/company/dsc-rnsit/', '_blank')}
                >
                  LinkedIn
                </Button>
                <Button 
                  className="bg-gdsc-red hover:bg-red-600"
                  onClick={() => window.open('https://www.instagram.com/gdsc_rnsit', '_blank')}
                >
                  Instagram
                </Button>
                <Button 
                  className="bg-gdsc-green hover:bg-green-600"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Form
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
