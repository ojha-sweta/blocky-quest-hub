import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Leaderboard from "./Leaderboard";
import Badges from "./Badges";
import QuizArena from "./QuizArena";
import Rewards from "./Rewards";

const GamificationPage = () => {
  const [activeTab, setActiveTab] = useState("leaderboard");

  const tabs = [
    { id: "leaderboard", label: "Leaderboard", component: Leaderboard },
    { id: "badges", label: "Badges", component: Badges },
    { id: "quiz", label: "Quiz Arena", component: QuizArena },
    { id: "rewards", label: "Rewards", component: Rewards },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 via-green-300 to-green-400 relative overflow-hidden">
      {/* Minecraft landscape background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-blue-300 via-green-200 to-green-400"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-green-600 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-pixel-3xl text-foreground mb-4 drop-shadow-lg">
            🏆 Gamification Hub 🏆
          </h1>
          <p className="text-pixel-base text-muted-foreground">
            Level up your learning journey!
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-transparent gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`minecraft-tab text-pixel-sm text-foreground ${
                  activeTab === tab.id ? "active" : ""
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="minecraft-block bg-card/90 backdrop-blur-sm p-6 rounded-lg">
                <tab.component />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default GamificationPage;