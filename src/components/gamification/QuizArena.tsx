import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, XCircle } from "lucide-react";

const QuizArena = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      question: "Which gas contributes most to global warming?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: 1
    },
    {
      question: "What percentage of Earth's water is freshwater?",
      options: ["10%", "5%", "2.5%", "15%"],
      correct: 2
    },
    {
      question: "Which energy source is renewable?",
      options: ["Coal", "Natural Gas", "Solar Power", "Oil"],
      correct: 2
    },
    {
      question: "What is the main cause of ocean acidification?",
      options: ["Plastic pollution", "CO2 absorption", "Oil spills", "Overfishing"],
      correct: 1
    },
    {
      question: "Which practice helps reduce carbon footprint?",
      options: ["Driving more", "Using disposables", "Recycling", "Wasting water"],
      correct: 2
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && timeLeft > 0 && !showResult) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, showResult]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setShowResult(true);
    }
  };

  const getAnswerClass = (index: number) => {
    if (selectedAnswer === null) {
      return "minecraft-button bg-stone-500 hover:bg-stone-400";
    }
    
    if (index === questions[currentQuestion].correct) {
      return "minecraft-button bg-green-600 text-white animate-pulse";
    } else if (index === selectedAnswer) {
      return "minecraft-button bg-red-600 text-white animate-pulse";
    } else {
      return "minecraft-button bg-stone-600 opacity-50";
    }
  };

  if (!quizStarted) {
    return (
      <div className="text-center space-y-6">
        <div className="wooden-plank p-8 rounded-lg mx-auto max-w-md">
          <h2 className="text-pixel-xl text-foreground mb-4">🧠 Quiz Arena</h2>
          <p className="text-pixel-sm text-muted-foreground mb-6">
            Test your environmental knowledge! Answer 5 questions in 30 seconds each.
          </p>
          <Button onClick={startQuiz} className="minecraft-button text-pixel-sm">
            🚀 Start Quiz
          </Button>
        </div>
        
        <div className="wooden-plank p-4 rounded-lg">
          <h3 className="text-pixel-lg text-foreground mb-4">🏆 Leaderboard</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-pixel-sm">EcoMaster</span>
              <span className="text-pixel-sm text-yellow-500">5/5 ⭐</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-pixel-sm">GreenWiz</span>
              <span className="text-pixel-sm text-gray-400">4/5 ⭐</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-pixel-sm">NatureNinja</span>
              <span className="text-pixel-sm text-amber-600">4/5 ⭐</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let resultMessage = "";
    let resultIcon = "";
    
    if (percentage >= 80) {
      resultMessage = "Eco-Master! 🌟";
      resultIcon = "🏆";
    } else if (percentage >= 60) {
      resultMessage = "Green Champion! 🌱";
      resultIcon = "🥈";
    } else {
      resultMessage = "Keep Learning! 📚";
      resultIcon = "🌿";
    }

    return (
      <div className="text-center space-y-6">
        <div className="wooden-plank p-8 rounded-lg mx-auto max-w-md">
          <div className="text-6xl mb-4">{resultIcon}</div>
          <h2 className="text-pixel-xl text-foreground mb-2">{resultMessage}</h2>
          <div className="text-pixel-lg text-muted-foreground mb-4">
            Score: {score}/{questions.length} ({percentage.toFixed(0)}%)
          </div>
          
          <div className="mb-6">
            <Progress value={percentage} className="h-4" />
          </div>
          
          <div className="space-y-2">
            <Button onClick={startQuiz} className="minecraft-button text-pixel-sm w-full">
              🔄 Try Again
            </Button>
          </div>
        </div>
        
        <div className="wooden-plank p-4 rounded-lg">
          <h3 className="text-pixel-sm text-foreground mb-2">Earned Rewards:</h3>
          <div className="text-pixel-xs text-muted-foreground">
            + {score * 50} Karma Points<br/>
            {percentage >= 80 && "+ Quiz Master Badge 🏆"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Bookshelf Frame */}
      <div className="wooden-plank p-1 rounded-lg">
        <div className="bg-card p-6 rounded-md">
          {/* Timer and Progress */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-pixel-sm">Time: {timeLeft}s</span>
            </div>
            <div className="text-pixel-sm">
              Question {currentQuestion + 1}/{questions.length}
            </div>
          </div>

          {/* Timer Bar */}
          <div className="experience-bar mb-6">
            <div 
              className="experience-fill"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>

          {/* Question Display - Minecraft Sign Style */}
          <div className="wooden-plank p-6 rounded-lg mb-6 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-800 rotate-45"></div>
            <h3 className="text-pixel-base text-foreground text-center leading-relaxed">
              {questions[currentQuestion].question}
            </h3>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`${getAnswerClass(index)} p-4 text-left text-pixel-sm transition-all duration-200`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                  {selectedAnswer === index && index === questions[currentQuestion].correct && (
                    <CheckCircle className="w-4 h-4 text-green-300 ml-auto" />
                  )}
                  {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                    <XCircle className="w-4 h-4 text-red-300 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Next Button */}
          {selectedAnswer !== null && (
            <div className="text-center">
              <Button 
                onClick={handleNextQuestion}
                className="minecraft-button text-pixel-sm"
              >
                {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"} →
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Score Display */}
      <div className="wooden-plank p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-pixel-sm text-foreground">Current Score:</span>
          <span className="text-pixel-sm text-foreground font-bold">{score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default QuizArena;