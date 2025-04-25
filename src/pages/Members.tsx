
import { Link } from 'react-router-dom';
import BatchSection from '../components/BatchSection';

const Members = () => {
  const batches = [
    {
      year: 2025,
      members: [
        { id: "2025-1", name: "Current Lead", role: "GDSC Lead", image: "/path/to/image.jpg" },
        { id: "2025-2", name: "Technical Lead", role: "Technical Team Lead", image: "/path/to/image.jpg" },
        { id: "2025-3", name: "Design Lead", role: "Design Team Lead", image: "/path/to/image.jpg" }
      ]
    },
    {
      year: 2024,
      members: [
        { id: "2024-1", name: "Previous Lead", role: "Former GDSC Lead", image: "/path/to/image.jpg" },
        { id: "2024-2", name: "Web Lead", role: "Web Development Lead", image: "/path/to/image.jpg" }
      ]
    },
    {
      year: 2023,
      members: [
        { id: "2023-1", name: "2023 Lead", role: "Former GDSC Lead", image: "/path/to/image.jpg" }
      ]
    },
    {
      year: 2022,
      members: [
        { id: "2022-1", name: "2022 Lead", role: "Former GDSC Lead", image: "/path/to/image.jpg" }
      ]
    },
    {
      year: 2021,
      members: [
        { id: "2021-1", name: "2021 Lead", role: "Former GDSC Lead", image: "/path/to/image.jpg" }
      ]
    },
    {
      year: 2020,
      members: [
        { id: "2020-1", name: "2020 Lead", role: "Former GDSC Lead", image: "/path/to/image.jpg" }
      ]
    },
    {
      year: 2019,
      members: [
        { id: "2019-1", name: "2019 Lead", role: "Former GDSC Lead", image: "/path/to/image.jpg" }
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
