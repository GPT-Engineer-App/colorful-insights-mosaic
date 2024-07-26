import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Linkedin, Users, DollarSign, Server } from "lucide-react";

export const CompanyInfo = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Company Information</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Veloxforce</h3>
          <p className="text-muted-foreground">
            We help businesses remove their pressing pain points by installing an `AI-workforce` that works 24/7
          </p>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <a href="https://www.veloxforce.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              www.veloxforce.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <a href="https://www.linkedin.com/company/veloxforce/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Company LinkedIn
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Team Size: 2 co-founders, planning to hire developers</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span>Funding Status: Bootstrapped</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            <span>Tech Stack: Python, AI/ML frameworks, Cloud technologies</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
