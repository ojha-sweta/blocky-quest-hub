import React from "react";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Gift, Coins, Star, BookOpen, Ticket, Coffee, Award, Lock } from "lucide-react";

const Rewards = () => {
  const currentKarmaPoints = 2450;
  const nextRewardPoints = 3000;
  const progressPercentage = (currentKarmaPoints / nextRewardPoints) * 100;

  const rewards = [
    {
      id: 1,
      name: "5% Discount Coupon",
      description: "Get 5% off on eco-friendly products",
      icon: <Coins className="w-6 h-6 text-yellow-500" />,
      karmaRequired: 500,
      unlocked: true,
      claimed: true
    },
    {
      id: 2,
      name: "Free Workshop Entry",
      description: "Access to premium sustainability workshop",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      karmaRequired: 1000,
      unlocked: true,
      claimed: false
    },
    {
      id: 3,
      name: "Eco-Warrior Certificate",
      description: "Official recognition certificate",
      icon: <Award className="w-6 h-6 text-purple-500" />,
      karmaRequired: 1500,
      unlocked: true,
      claimed: false
    },
    {
      id: 4,
      name: "Coffee with Expert",
      description: "One-on-one session with sustainability expert",
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      karmaRequired: 2000,
      unlocked: true,
      claimed: false
    },
    {
      id: 5,
      name: "Premium Badge Pack",
      description: "Unlock exclusive badge collection",
      icon: <Star className="w-6 h-6 text-pink-500" />,
      karmaRequired: 2500,
      unlocked: false,
      claimed: false
    },
    {
      id: 6,
      name: "VIP Event Access",
      description: "Entry to exclusive sustainability summit",
      icon: <Ticket className="w-6 h-6 text-green-500" />,
      karmaRequired: 3000,
      unlocked: false,
      claimed: false
    },
    {
      id: 7,
      name: "Mentorship Program",
      description: "3-month mentorship with industry leader",
      icon: <Gift className="w-6 h-6 text-red-500" />,
      karmaRequired: 4000,
      unlocked: false,
      claimed: false
    },
    {
      id: 8,
      name: "Research Grant",
      description: "Funding for your sustainability project",
      icon: <Award className="w-6 h-6 text-gold-500" />,
      karmaRequired: 5000,
      unlocked: false,
      claimed: false
    }
  ];

  const getSlotClass = (reward: any) => {
    if (reward.claimed) {
      return "chest-slot filled bg-gray-400 opacity-50";
    } else if (reward.unlocked) {
      return "chest-slot filled hover:brightness-110 cursor-pointer";
    } else {
      return "chest-slot opacity-30 cursor-not-allowed";
    }
  };

  const claimReward = (rewardId: number) => {
    console.log(`Claiming reward ${rewardId}`);
    // Here you would implement the actual claiming logic
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-pixel-xl text-foreground mb-2">🎁 Rewards Chest</h2>
          <p className="text-pixel-sm text-muted-foreground mb-4">
            Karma Points: {currentKarmaPoints.toLocaleString()}
          </p>
          
          {/* Progress to next reward */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-pixel-xs mb-2">
              <span>Current: {currentKarmaPoints}</span>
              <span>Next: {nextRewardPoints}</span>
            </div>
            <div className="experience-bar">
              <div 
                className="experience-fill"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
            <p className="text-pixel-xs text-muted-foreground mt-2">
              {nextRewardPoints - currentKarmaPoints > 0 
                ? `${nextRewardPoints - currentKarmaPoints} more points to unlock VIP Event Access!`
                : "You can unlock the next reward!"
              }
            </p>
          </div>
        </div>

        {/* Chest Interface */}
        <div className="wooden-plank p-6 rounded-lg">
          <div className="mb-4">
            <h3 className="text-pixel-lg text-foreground text-center mb-2">💎 Treasure Chest 💎</h3>
            <div className="w-full h-2 bg-amber-900 rounded mb-4"></div>
          </div>
          
          {/* Reward Grid - Minecraft Chest Layout */}
          <div className="grid grid-cols-4 gap-2 bg-stone-700 p-4 rounded border-4 border-amber-800">
            {rewards.map((reward) => (
              <Tooltip key={reward.id}>
                <TooltipTrigger asChild>
                  <div
                    className={getSlotClass(reward)}
                    onClick={() => reward.unlocked && !reward.claimed && claimReward(reward.id)}
                  >
                    {reward.claimed ? (
                      <div className="text-gray-600">✓</div>
                    ) : reward.unlocked ? (
                      reward.icon
                    ) : (
                      <Lock className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="minecraft-tooltip">
                  <div className="text-pixel-xs max-w-48">
                    <div className={`font-bold ${
                      reward.claimed ? 'text-gray-400' : 
                      reward.unlocked ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {reward.name}
                    </div>
                    <div className="mt-1 text-gray-300">{reward.description}</div>
                    <div className="mt-2">
                      <span className="text-yellow-300">Cost: {reward.karmaRequired.toLocaleString()} KP</span>
                    </div>
                    <div className="mt-1">
                      {reward.claimed ? (
                        <span className="text-gray-400">✅ Claimed</span>
                      ) : reward.unlocked ? (
                        <span className="text-green-400">🎯 Available to claim!</span>
                      ) : (
                        <span className="text-red-400">🔒 Locked</span>
                      )}
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Reward Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="wooden-plank p-4 rounded-lg text-center">
            <h4 className="text-pixel-sm text-foreground mb-2">🎫 Available</h4>
            <div className="text-pixel-lg font-bold text-green-500">
              {rewards.filter(r => r.unlocked && !r.claimed).length}
            </div>
            <div className="text-pixel-xs text-muted-foreground">Ready to claim</div>
          </div>
          
          <div className="wooden-plank p-4 rounded-lg text-center">
            <h4 className="text-pixel-sm text-foreground mb-2">✅ Claimed</h4>
            <div className="text-pixel-lg font-bold text-blue-500">
              {rewards.filter(r => r.claimed).length}
            </div>
            <div className="text-pixel-xs text-muted-foreground">Already yours</div>
          </div>
          
          <div className="wooden-plank p-4 rounded-lg text-center">
            <h4 className="text-pixel-sm text-foreground mb-2">🔒 Locked</h4>
            <div className="text-pixel-lg font-bold text-gray-500">
              {rewards.filter(r => !r.unlocked).length}
            </div>
            <div className="text-pixel-xs text-muted-foreground">Keep earning!</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="wooden-plank p-4 rounded-lg">
          <h3 className="text-pixel-lg text-foreground mb-4 text-center">📊 Your Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-pixel-lg font-bold text-yellow-500">{currentKarmaPoints}</div>
              <div className="text-pixel-xs text-muted-foreground">Total Karma</div>
            </div>
            <div className="text-center">
              <div className="text-pixel-lg font-bold text-green-500">
                {rewards.filter(r => r.claimed).length}
              </div>
              <div className="text-pixel-xs text-muted-foreground">Rewards Claimed</div>
            </div>
            <div className="text-center">
              <div className="text-pixel-lg font-bold text-blue-500">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-pixel-xs text-muted-foreground">Progress</div>
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

export default Rewards;