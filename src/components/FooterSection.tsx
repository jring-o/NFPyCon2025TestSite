
import { Button } from "@/components/ui/button";
import { 
  TwitterIcon, 
  GithubIcon, 
  YoutubeIcon, 
  LinkedinIcon, 
  MailIcon 
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img 
              src="/uploads/932f3af1-37d5-4654-b3d0-5fafa58dbcba.png" 
              alt="NumFOCUS Logo" 
              className="h-10 mb-6"
            />
            <p className="text-gray-300 mb-6">
              NumFOCUS promotes open practices in research, data, and scientific computing.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/numfocus" className="text-gray-300 hover:text-numfocus-coral" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://github.com/numfocus" className="text-gray-300 hover:text-numfocus-coral" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/c/NumFOCUS" className="text-gray-300 hover:text-numfocus-coral" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/numfocus" className="text-gray-300 hover:text-numfocus-coral" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex items-center mb-3">
              <MailIcon className="h-5 w-5 mr-2 text-numfocus-coral" />
              <a href="mailto:info@numfocus.org" className="text-gray-300 hover:text-white">
                info@numfocus.org
              </a>
            </div>
            <p className="text-gray-300">
              P.O. Box 90596<br />
              Austin, TX 78709<br />
              USA
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe to Updates</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with NumFOCUS events and news
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-numfocus-teal"
              />
              <Button className="bg-numfocus-coral hover:bg-numfocus-coral/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} NumFOCUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
