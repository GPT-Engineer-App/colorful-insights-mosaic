import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

export const PersonalInfo = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/placeholder.svg" alt="Marius Wilsch" />
            <AvatarFallback>MW</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Marius Wilsch</h2>
          <p className="text-muted-foreground">Software Engineer & Co-Founder @Veloxforce</p>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Germany, Munich</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:marius.santiago.wilsch@gmail.com" className="text-blue-500 hover:underline">
              marius.santiago.wilsch@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <a href="https://www.linkedin.com/in/marius-wilsch/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
