
import { Card } from '@/components/ui/card';
import EventCard from '../components/EventCard';

const Events = () => {
  const events = [
    {
      title: "Cloud Study Jam 2024",
      date: "March 2024",
      description: "Learn cloud computing with hands-on labs and earn Google Cloud badges.",
      image: "public/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png",
      link: "/events/cloud-study-jam-2024"
    },
    {
      title: "Android Study Jam",
      date: "February 2024",
      description: "Learn Android development using Kotlin and build your first app.",
      image: "public/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png",
      link: "/events/android-study-jam"
    },
    {
      title: "Web Development Workshop",
      date: "January 2024",
      description: "Master the fundamentals of web development with hands-on projects.",
      image: "public/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png",
      link: "/events/web-dev-workshop"
    }
  ];

  return (
    <div className="min-h-screen bg-gdsc-green py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12 text-white">Our Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
