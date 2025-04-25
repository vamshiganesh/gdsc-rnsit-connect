
import EventCard from '../components/EventCard';

const Events = () => {
  const events = [
    {
      title: "Cloud Study Jam 2024",
      date: "March 2024",
      description: "Learn cloud computing with hands-on labs and earn Google Cloud badges.",
      image: "public/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png"
    },
    // Add more events
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Events</h2>
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
