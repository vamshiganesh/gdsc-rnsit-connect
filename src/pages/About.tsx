
const About = () => {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-roboto text-lg text-gray-700">
            Google Developer Student Clubs (GDSC) is a program for university students to learn mobile and web development skills. The club started at RNSIT in 2019 and has been fostering innovation and technical excellence ever since.
          </p>
          <p className="font-roboto text-lg text-gray-700">
            We organize hands-on workshops, coding contests, hackathons, and tech talks to help students bridge the gap between theory and practice. Our goal is to empower students with the latest technology skills and create a collaborative learning environment.
          </p>
          <p className="font-roboto text-lg text-gray-700">
            Through our initiatives, we aim to:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-roboto text-lg text-gray-700">
            <li>Build solutions for local businesses and community</li>
            <li>Grow as developers through peer learning</li>
            <li>Get access to Google Developer resources</li>
            <li>Implement solutions using Google technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
