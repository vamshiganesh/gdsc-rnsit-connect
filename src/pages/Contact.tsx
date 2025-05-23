
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-google-sans font-bold text-3xl md:text-4xl text-center mb-12">Contact Us</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-google-sans font-semibold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/gdsc_rnsit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-gdsc-red transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>@gdsc_rnsit</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/dsc-rnsit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-gdsc-blue transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>GDSC RNSIT</span>
              </a>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-6 h-6" />
                <span>gdsc@rnsit.ac.in</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-google-sans font-semibold mb-4">Location</h4>
              <p className="text-gray-600">
                R N S Institute of Technology<br />
                Channasandra, RR Nagar<br />
                Bangalore - 560098
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-google-sans font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  className="w-full p-2 border rounded-md h-32"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gdsc-blue hover:bg-blue-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
