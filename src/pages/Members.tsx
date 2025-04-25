
import { Link } from 'react-router-dom';
import BatchSection from '../components/BatchSection';

const Members = () => {
  const batches = [
    {
      year: 2025,
      members: [
        { id: "2025-1", name: "Rahul Kumar", role: "GDSC Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2025-2", name: "Priya Singh", role: "Technical Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2025-3", name: "Akash Patel", role: "Design Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2025-4", name: "Sarah Khan", role: "Management Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2025-5", name: "Dev Sharma", role: "Android Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" }
      ]
    },
    {
      year: 2024,
      members: [
        { id: "2024-1", name: "Arjun Reddy", role: "GDSC Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2024-2", name: "Neha Gupta", role: "Web Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2024-3", name: "Ravi Verma", role: "ML Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" }
      ]
    },
    {
      year: 2023,
      members: [
        { id: "2023-1", name: "Aisha Patel", role: "GDSC Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2023-2", name: "Rohan Shah", role: "Technical Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" }
      ]
    },
    {
      year: 2022,
      members: [
        { id: "2022-1", name: "Maya Iyer", role: "GDSC Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2022-2", name: "Karan Malhotra", role: "Android Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" }
      ]
    },
    {
      year: 2021,
      members: [
        { id: "2021-1", name: "Zara Ahmed", role: "GDSC Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2021-2", name: "Vikram Singh", role: "Web Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" }
      ]
    },
    {
      year: 2020,
      members: [
        { id: "2020-1", name: "Ananya Mehta", role: "GDSC Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" },
        { id: "2020-2", name: "Raj Kumar", role: "Technical Lead", image: "/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gdsc-blue py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12 text-white">Our Members</h2>
        <div className="space-y-12">
          {batches.map((batch) => (
            <BatchSection key={batch.year} {...batch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
