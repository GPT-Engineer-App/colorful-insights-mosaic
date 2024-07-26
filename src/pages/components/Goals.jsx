import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export const Goals = () => {
  const goals = [
    "Transition from developer role to project management",
    "Build partnerships with sales people",
    "Focus on project management and coding",
    "Develop AI-driven retention strategies for communities",
  ];

  const challenges = [
    "Balancing multiple projects and client demands",
    "Transitioning from a one-thing-at-a-time approach to managing multiple tasks",
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Goals & Challenges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Business Goals</h3>
            <ul className="space-y-2">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Challenges Faced</h3>
            <ul className="space-y-2">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
