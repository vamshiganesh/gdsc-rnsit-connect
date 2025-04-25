
import BatchSection from '../components/BatchSection';

const Members = () => {
  const batches = [
    {
      year: 2025,
      members: [
        { name: "Current Lead", role: "GDSC Lead" },
        // Add more current members
      ]
    },
    {
      year: 2024,
      members: [
        { name: "Previous Lead", role: "Former GDSC Lead" },
        // Add more members
      ]
    },
    // Add more batch sections for 2023-2019
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Our Members</h2>
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
