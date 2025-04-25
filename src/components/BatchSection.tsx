
interface BatchMember {
  name: string;
  role: string;
  image?: string;
}

interface BatchSectionProps {
  year: number;
  members: BatchMember[];
}

const BatchSection = ({ year, members }: BatchSectionProps) => {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-google-sans font-bold text-gdsc-base mb-8">Batch {year}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-center">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
              )}
              <h4 className="font-google-sans font-bold text-lg text-gdsc-base">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchSection;
