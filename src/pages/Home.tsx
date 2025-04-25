
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-google-sans font-bold text-4xl md:text-6xl text-gdsc-base mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="text-gdsc-blue">G</span>
          <span className="text-gdsc-red">D</span>
          <span className="text-gdsc-yellow">S</span>
          <span className="text-gdsc-green">C</span>
        </h1>
        <p className="font-roboto text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
          RNS Institute of Technology Chapter
        </p>
        <Link 
          to="/about"
          className="inline-flex items-center gap-2 bg-gdsc-blue text-white font-google-sans px-8 py-3 rounded-full hover:bg-blue-600 transition-colors animate-fade-in"
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
