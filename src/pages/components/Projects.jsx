import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export const Projects = () => {
  const projects = [
    {
      name: "AI-powered automation solutions",
      description: "Developing cutting-edge AI solutions for business process automation.",
      technologies: ["LLMs", "AI Chatbots", "Automation tools"],
      metrics: [
        { subject: 'Efficiency', A: 120, fullMark: 150 },
        { subject: 'Scalability', A: 98, fullMark: 150 },
        { subject: 'Cost Savings', A: 86, fullMark: 150 },
        { subject: 'Accuracy', A: 99, fullMark: 150 },
        { subject: 'User Satisfaction', A: 85, fullMark: 150 },
        { subject: 'Implementation Speed', A: 65, fullMark: 150 },
      ],
    },
    {
      name: "On-premise AI system for lawyers",
      description: "Creating a specialized AI system tailored for legal professionals.",
      technologies: ["LLMs", "Natural Language Processing", "Legal AI"],
      metrics: [
        { subject: 'Efficiency', A: 110, fullMark: 150 },
        { subject: 'Scalability', A: 75, fullMark: 150 },
        { subject: 'Cost Savings', A: 90, fullMark: 150 },
        { subject: 'Accuracy', A: 115, fullMark: 150 },
        { subject: 'User Satisfaction', A: 95, fullMark: 150 },
        { subject: 'Implementation Speed', A: 80, fullMark: 150 },
      ],
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Key Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border-b pb-8 last:border-b-0">
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="mb-4">
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={project.metrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name={project.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
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
