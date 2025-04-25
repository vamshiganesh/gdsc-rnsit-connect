
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
  link: string;
}

const EventCard = ({ title, date, description, image, link }: EventCardProps) => {
  return (
    <Link to={link}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
        {image && (
          <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 text-gdsc-blue mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>
          <CardTitle className="font-google-sans">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
