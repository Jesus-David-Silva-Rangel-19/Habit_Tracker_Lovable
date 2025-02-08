
import { useState } from "react";
import { HabitCard } from "@/components/HabitCard";
import { HabitCalendar } from "@/components/HabitCalendar";
import { HabitStats } from "@/components/HabitStats";

const INITIAL_HABITS = [
  { id: 1, name: "Morning Meditation", category: "Wellness", streak: 7, completed: true },
  { id: 2, name: "Read 30 Minutes", category: "Learning", streak: 4, completed: false },
  { id: 3, name: "Exercise", category: "Health", streak: 12, completed: true },
  { id: 4, name: "Write Journal", category: "Personal", streak: 3, completed: false },
];

const Index = () => {
  const [habits, setHabits] = useState(INITIAL_HABITS);

  const toggleHabit = (id: number) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="container mx-auto min-h-screen py-8 animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold">Habit Tracker</h1>
        <p className="text-muted-foreground">Track your daily habits and build streaks</p>
      </div>

      <div className="mb-8">
        <HabitStats />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Today's Habits</h2>
          <div className="grid gap-4">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                name={habit.name}
                category={habit.category}
                streak={habit.streak}
                completed={habit.completed}
                onToggle={() => toggleHabit(habit.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Monthly Overview</h2>
          <HabitCalendar />
        </div>
      </div>
    </div>
  );
};

export default Index;
