
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartIcon, CodeIcon, LightbulbIcon } from "lucide-react";

const AboutSection = () => {
  const missions = [
    {
      title: "Open Code",
      description: "Supporting open source projects that power scientific computing and data analysis",
      icon: <CodeIcon className="h-8 w-8 text-numfocus-teal" />,
    },
    {
      title: "Better Science",
      description: "Promoting best practices for reproducible research and open science",
      icon: <LightbulbIcon className="h-8 w-8 text-numfocus-teal" />,
    },
    {
      title: "Sustainable Development",
      description: "Ensuring long-term sustainability for critical open source tools",
      icon: <HeartIcon className="h-8 w-8 text-numfocus-teal" />,
    },
  ];

  return (
    <div className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About <span className="text-numfocus-coral">NumFOCUS</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            NumFOCUS is a 501(c)(3) nonprofit supporting innovative open source scientific software projects.
            We promote sustainable high-level programming languages, reproducible research, and a diverse community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {missions.map((mission, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">{mission.icon}</div>
                <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-numfocus-teal hover:bg-numfocus-teal/90">
            Learn More About NumFOCUS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
