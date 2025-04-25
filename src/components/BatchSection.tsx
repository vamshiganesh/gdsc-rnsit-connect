
import { Link } from 'react-router-dom';

interface BatchMember {
  id: string;
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
      <h3 className="text-2xl font-google-sans font-bold text-white mb-8">Batch {year}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Link 
            key={member.id} 
            to={`/members/${member.id}`}
            className="block transform transition-transform hover:scale-105"
          >
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                )}
                <h4 className="font-google-sans font-bold text-lg text-gdsc-base">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BatchSection;
