
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface CalendarDayProps {
  date: number;
  isCompleted?: boolean;
  isCurrent?: boolean;
}

function CalendarDay({ date, isCompleted, isCurrent }: CalendarDayProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
        isCompleted && "bg-habit-completed text-white",
        isCurrent && "border-2 border-primary",
        !isCompleted && !isCurrent && "bg-habit-neutral text-muted-foreground"
      )}
    >
      {date}
    </div>
  );
}

export function HabitCalendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentDay = new Date().getDate();

  return (
    <Card className="p-6 backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold">April 2024</h3>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <CalendarDay
            key={day}
            date={day}
            isCompleted={day < currentDay}
            isCurrent={day === currentDay}
          />
        ))}
      </div>
    </Card>
  );
}
