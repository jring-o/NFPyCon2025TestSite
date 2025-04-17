
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, ExternalLinkIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-numfocus-teal/10 via-white to-numfocus-coral/10 py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="animate-fade-in">
              <img 
                src="/uploads/932f3af1-37d5-4654-b3d0-5fafa58dbcba.png" 
                alt="NumFOCUS Logo" 
                className="h-12 md:h-16 mb-8"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                <span className="text-numfocus-coral">NumFOCUS</span> at 
                <span className="text-numfocus-teal"> PyCon 2025</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                Join us at PyCon 2025 to support open source projects in scientific computing
                and data science. Meet the maintainers, attend workshops, and learn how NumFOCUS
                is advancing open science.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="bg-numfocus-coral hover:bg-numfocus-coral/90">
                  Visit Our Booth
                </Button>
                <Button variant="outline" size="lg">
                  View Schedule
                </Button>
              </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-numfocus-teal mr-2" />
                <span>May 15-23, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-numfocus-teal mr-2" />
                <span>Pittsburgh, Pennsylvania</span>
              </div>
              <div className="flex items-center">
                <ExternalLinkIcon className="h-5 w-5 text-numfocus-teal mr-2" />
                <a href="https://us.pycon.org/2025" target="_blank" rel="noopener noreferrer" className="hover:text-numfocus-coral">
                  PyCon 2025 Website
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute w-72 h-72 bg-numfocus-teal/20 rounded-full filter blur-3xl"></div>
              <div className="absolute w-72 h-72 bg-numfocus-coral/20 rounded-full filter blur-3xl -translate-x-20 translate-y-20"></div>
              <img
                src="/placeholder.svg"
                alt="PyCon Conference"
                className="relative rounded-xl shadow-2xl z-10 max-w-md w-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
