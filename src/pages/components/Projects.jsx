import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      name: "AI-powered automation solutions",
      description: "Developing cutting-edge AI solutions for business process automation.",
      technologies: ["LLMs", "AI Chatbots", "Automation tools"],
    },
    {
      name: "On-premise AI system for lawyers",
      description: "Creating a specialized AI system tailored for legal professionals.",
      technologies: ["LLMs", "Natural Language Processing", "Legal AI"],
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Key Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
