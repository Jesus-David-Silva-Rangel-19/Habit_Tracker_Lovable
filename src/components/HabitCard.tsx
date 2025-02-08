
import { Check, Trash, X } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface HabitCardProps {
  name: string;
  streak: number;
  category: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export function HabitCard({
  name,
  streak,
  category,
  completed,
  onToggle,
  onDelete,
}: HabitCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
        "border border-border/50 backdrop-blur-sm",
        "animate-fade-in font-labrada"
      )}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(45deg, transparent 0%, rgba(168, 85, 247, 0.1) 100%)",
        }}
      />
      <div className="flex items-center justify-between p-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{category}</p>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {streak} día{streak !== 1 ? "s" : ""} de racha
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={onToggle}
            variant={completed ? "default" : "secondary"}
            size="icon"
            className={cn(
              "transition-colors",
              completed && "bg-habit-completed hover:bg-habit-completed/90"
            )}
          >
            {completed ? <Check size={16} /> : <X size={16} />}
          </Button>
          <Button
            onClick={onDelete}
            variant="destructive"
            size="icon"
            className="transition-colors"
          >
            <Trash size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
