import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Skills = () => {
  const skills = [
    { name: "AI & Machine Learning", value: 95 },
    { name: "Software Engineering", value: 90 },
    { name: "Project Management", value: 85 },
    { name: "Business Process Automation", value: 88 },
    { name: "Requirements Analysis", value: 92 },
    { name: "Communication", value: 87 },
    { name: "Problem Solving", value: 93 },
  ];

  const allSkills = [
    "Requirements Gathering", "Business Process Automation", "Artificial Intelligence (AI)",
    "Software Engineering", "Decision-Making", "Problem Solving", "Systems Engineering",
    "SQL", "Computer Science", "Node.js", "Project Management", "New Product Validation",
    "Research Skills", "Critical Thinking", "C++", "C (Programming Language)", "Communication",
    "Requirements Analysis", "Product Development", "Operations Management", "Business",
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Skills & Expertise</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skills}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
