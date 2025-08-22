import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const [filter, setFilter] = useState("all");

  const leaderboardData = [
    { rank: 1, name: "EcoWarrior123", points: 2450, type: "student", badges: 12 },
    { rank: 2, name: "GreenResearcher", points: 2380, type: "researcher", badges: 15 },
    { rank: 3, name: "SustainableSarah", points: 2250, type: "student", badges: 10 },
    { rank: 4, name: "ClimateChamp", points: 2100, type: "faculty", badges: 8 },
    { rank: 5, name: "NatureLover", points: 1980, type: "student", badges: 9 },
    { rank: 6, name: "EcoInnovator", points: 1850, type: "researcher", badges: 11 },
    { rank: 7, name: "GreenThumb", points: 1720, type: "student", badges: 7 },
    { rank: 8, name: "PlanetProtector", points: 1650, type: "faculty", badges: 6 },
  ];

  const filteredData = filter === "all" 
    ? leaderboardData 
    : leaderboardData.filter(user => user.type === filter);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-4 h-4 text-yellow-400" />;
      case 2: return <Medal className="w-4 h-4 text-gray-400" />;
      case 3: return <Award className="w-4 h-4 text-amber-600" />;
      default: return <span className="text-pixel-sm font-bold">#{rank}</span>;
    }
  };

  const getRowClass = (rank: number) => {
    switch (rank) {
      case 1: return "gold-block text-foreground";
      case 2: return "iron-block text-foreground";
      case 3: return "copper-block text-foreground";
      default: return "wooden-plank text-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-pixel-xl text-foreground">🏅 Eco-Warriors Leaderboard</h2>
        <div className="flex gap-2">
          {["all", "student", "researcher", "faculty"].map((filterType) => (
            <Button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`minecraft-button text-pixel-xs ${
                filter === filterType ? "brightness-110" : ""
              }`}
              variant="ghost"
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredData.map((user, index) => (
          <div
            key={user.rank}
            className={`${getRowClass(user.rank)} p-4 flex items-center justify-between rounded-lg transition-all duration-200 hover:brightness-110`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 min-w-[60px]">
                {getRankIcon(user.rank)}
              </div>
              
              <div>
                <div className="text-pixel-sm font-bold">{user.name}</div>
                <div className="text-pixel-xs opacity-75">
                  {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-pixel-sm font-bold">{user.points.toLocaleString()} KP</div>
                <div className="text-pixel-xs opacity-75">{user.badges} badges</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Eco-Warrior Spotlight */}
      <div className="mt-8">
        <h3 className="text-pixel-lg text-foreground mb-4">🌟 Top Eco-Warriors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredData.slice(0, 3).map((user, index) => (
            <div
              key={user.rank}
              className={`${getRowClass(user.rank)} p-4 text-center rounded-lg`}
            >
              <div className="mb-2">{getRankIcon(user.rank)}</div>
              <div className="text-pixel-sm font-bold mb-1">{user.name}</div>
              <div className="text-pixel-xs opacity-75">{user.points.toLocaleString()} Karma Points</div>
              <div className="text-pixel-xs mt-2">🏆 {user.badges} badges earned</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;