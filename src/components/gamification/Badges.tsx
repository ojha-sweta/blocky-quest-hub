import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Book, Map, Shield, Flower, Building2, Users, Sword } from "lucide-react";

const Badges = () => {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const badgeData = [
    {
      id: "shodh-yodha",
      name: "ShodhYodha",
      icon: <Book className="w-8 h-8" />,
      criteria: "Complete 10 research articles",
      earned: true,
      description: "Master of Knowledge Seeking"
    },
    {
      id: "vichaar-vistaarak",
      name: "VichaarVistaarak", 
      icon: <Map className="w-8 h-8" />,
      criteria: "Share insights on 5 different topics",
      earned: true,
      description: "Expander of Thoughts"
    },
    {
      id: "prakriti-rakshak",
      name: "PrakritiRakshak",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      criteria: "Complete environmental challenges",
      earned: true,
      description: "Protector of Nature"
    },
    {
      id: "rangrez-prakriti",
      name: "Rangrez-e-Prakriti",
      icon: <Flower className="w-8 h-8 text-pink-500" />,
      criteria: "Beautify campus with 3 green initiatives",
      earned: false,
      description: "Nature's Artist"
    },
    {
      id: "gyaan-setu",
      name: "GyaanSetu",
      icon: <Building2 className="w-8 h-8 text-amber-600" />,
      criteria: "Bridge knowledge gaps in community",
      earned: true,
      description: "Bridge of Knowledge"
    },
    {
      id: "samudaay-shakti",
      name: "Samudaay Shakti",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      criteria: "Lead a team project successfully",
      earned: false,
      description: "Community Power"
    },
    {
      id: "sachai-sipahi",
      name: "Sachai ke Sipahi",
      icon: <Sword className="w-8 h-8 text-green-400" />,
      criteria: "Fact-check and verify 20 claims",
      earned: true,
      description: "Soldier of Truth"
    }
  ];

  const earnedBadges = badgeData.filter(badge => badge.earned);
  const lockedBadges = badgeData.filter(badge => !badge.earned);

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-pixel-xl text-foreground mb-2">🏆 Badge Showcase</h2>
          <p className="text-pixel-sm text-muted-foreground">
            Earned: {earnedBadges.length} / {badgeData.length} badges
          </p>
          
          {/* Progress bar */}
          <div className="experience-bar mt-4 max-w-md mx-auto">
            <div 
              className="experience-fill"
              style={{ width: `${(earnedBadges.length / badgeData.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Earned Badges */}
        <div>
          <h3 className="text-pixel-lg text-foreground mb-4">✨ Earned Badges</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {earnedBadges.map((badge) => (
              <Tooltip key={badge.id}>
                <TooltipTrigger asChild>
                  <div className="item-frame aspect-square flex flex-col items-center justify-center cursor-pointer hover:brightness-110 transition-all duration-200">
                    <div className="mb-2 text-center">
                      {badge.icon}
                    </div>
                    <div className="text-pixel-xs text-center leading-tight">
                      {badge.name}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="minecraft-tooltip">
                  <div className="text-pixel-xs">
                    <div className="font-bold text-yellow-300">{badge.name}</div>
                    <div className="mt-1">{badge.description}</div>
                    <div className="mt-2 text-green-300">✅ {badge.criteria}</div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Locked Badges */}
        {lockedBadges.length > 0 && (
          <div>
            <h3 className="text-pixel-lg text-foreground mb-4">🔒 Locked Badges</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {lockedBadges.map((badge) => (
                <Tooltip key={badge.id}>
                  <TooltipTrigger asChild>
                    <div className="item-frame aspect-square flex flex-col items-center justify-center cursor-pointer opacity-40 grayscale hover:opacity-60 transition-all duration-200">
                      <div className="mb-2 text-center">
                        {badge.icon}
                      </div>
                      <div className="text-pixel-xs text-center leading-tight">
                        {badge.name}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="minecraft-tooltip">
                    <div className="text-pixel-xs">
                      <div className="font-bold text-gray-300">{badge.name}</div>
                      <div className="mt-1">{badge.description}</div>
                      <div className="mt-2 text-red-300">🔒 {badge.criteria}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        )}

        {/* Achievement Stats */}
        <div className="wooden-plank p-4 rounded-lg">
          <h3 className="text-pixel-lg text-foreground mb-4">📊 Achievement Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-pixel-lg font-bold text-yellow-500">{earnedBadges.length}</div>
              <div className="text-pixel-xs text-muted-foreground">Badges Earned</div>
            </div>
            <div className="text-center">
              <div className="text-pixel-lg font-bold text-blue-500">2,450</div>
              <div className="text-pixel-xs text-muted-foreground">Karma Points</div>
            </div>
            <div className="text-center">
              <div className="text-pixel-lg font-bold text-green-500">15</div>
              <div className="text-pixel-xs text-muted-foreground">Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-pixel-lg font-bold text-purple-500">7</div>
              <div className="text-pixel-xs text-muted-foreground">Rank</div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Badges;