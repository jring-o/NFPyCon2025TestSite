
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    { name: "NumPy", description: "The fundamental package for scientific computing with Python" },
    { name: "Pandas", description: "Powerful data structures for data analysis, time series, and statistics" },
    { name: "Matplotlib", description: "Comprehensive library for creating static, animated, and interactive visualizations" },
    { name: "Jupyter", description: "Interactive computing across dozens of programming languages" },
    { name: "SciPy", description: "Fundamental algorithms for scientific computing in Python" },
    { name: "scikit-learn", description: "Machine Learning in Python: accessible tools for predictive data analysis" },
  ];

  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured <span className="text-numfocus-coral">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            NumFOCUS supports many popular open source projects that are essential tools
            for scientific computing, data science, and research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-numfocus-teal">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
