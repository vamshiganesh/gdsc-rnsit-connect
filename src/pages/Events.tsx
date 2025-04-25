
import { Card } from '@/components/ui/card';
import EventCard from '../components/EventCard';

const Events = () => {
  const events = [
    {
      title: "Cloud Study Jam 2024",
      date: "March 15-30, 2024",
      description: "Join us for an intensive cloud computing workshop series where you'll get hands-on experience with Google Cloud Platform. Learn about cloud architecture, deployment, and earn Google Cloud badges.",
      image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png",
      link: "/events/cloud-study-jam-2024"
    },
    {
      title: "Android Compose Camp",
      date: "February 10-25, 2024",
      description: "Master modern Android development with Jetpack Compose. Build beautiful UIs, learn state management, and create your first app using Material Design 3.",
      image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png",
      link: "/events/android-compose-camp"
    },
    {
      title: "Web Development Workshop",
      date: "January 5-20, 2024",
      description: "Deep dive into modern web development. Learn React, TypeScript, and build responsive websites with industry best practices.",
      image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png",
      link: "/events/web-dev-workshop"
    },
    {
      title: "ML/AI Workshop Series",
      date: "December 1-15, 2023",
      description: "Explore the world of Machine Learning and Artificial Intelligence. From basics to advanced concepts, with practical implementations using TensorFlow.",
      image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png",
      link: "/events/ml-ai-workshop"
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
