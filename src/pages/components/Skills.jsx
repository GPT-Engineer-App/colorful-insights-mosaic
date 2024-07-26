import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skills = [
    "Requirements Gathering",
    "Business Process Automation",
    "Artificial Intelligence (AI)",
    "Software Engineering",
    "Decision-Making",
    "Problem Solving",
    "Systems Engineering",
    "SQL",
    "Computer Science",
    "Node.js",
    "Project Management",
    "New Product Validation",
    "Research Skills",
    "Critical Thinking",
    "C++",
    "C (Programming Language)",
    "Communication",
    "Requirements Analysis",
    "Product Development",
    "Operations Management",
    "Business",
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Skills & Expertise</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
