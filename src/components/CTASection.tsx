
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-20 px-6 lg:px-8 bg-numfocus-teal/5">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-numfocus-teal p-10 md:p-16">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get Involved with NumFOCUS
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Support open science and sustainable data tools. Visit our booth, attend our sessions,
                or become a contributor to one of our sponsored projects.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col md:flex-row gap-4">
              <Button className="bg-white text-numfocus-teal hover:bg-white/90" size="lg">
                Visit Booth #42
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                Become a Supporter 
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
