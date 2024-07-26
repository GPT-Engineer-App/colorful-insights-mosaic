import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfo } from "./components/PersonalInfo";
import { CompanyInfo } from "./components/CompanyInfo";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Goals } from "./components/Goals";

const Index = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Marius Wilsch - Interactive Infographic</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="company">Company Info</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <PersonalInfo />
        </TabsContent>
        <TabsContent value="company">
          <CompanyInfo />
        </TabsContent>
        <TabsContent value="skills">
          <Skills />
        </TabsContent>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
        <TabsContent value="goals">
          <Goals />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
