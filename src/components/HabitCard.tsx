
import { Check, X } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface HabitCardProps {
  name: string;
  streak: number;
  category: string;
  completed: boolean;
  onToggle: () => void;
}

export function HabitCard({ name, streak, category, completed, onToggle }: HabitCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
        "border border-border/50 backdrop-blur-sm",
        "animate-fade-in"
      )}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(45deg, transparent 0%, rgba(168, 85, 247, 0.1) 100%)",
        }}
      />
      <button
        onClick={onToggle}
        className="w-full p-4 text-left transition-all duration-300 hover:bg-accent/5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{category}</p>
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
              completed
                ? "bg-habit-completed text-white"
                : "bg-habit-neutral text-muted-foreground"
            )}
          >
            {completed ? <Check size={16} /> : <X size={16} />}
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-muted-foreground">
            {streak} day{streak !== 1 ? "s" : ""} streak
          </p>
        </div>
      </button>
    </Card>
  );
}
