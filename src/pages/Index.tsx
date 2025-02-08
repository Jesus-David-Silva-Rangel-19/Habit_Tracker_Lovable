
import { useState } from "react";
import { HabitCard } from "@/components/HabitCard";
import { HabitCalendar } from "@/components/HabitCalendar";
import { HabitStats } from "@/components/HabitStats";

const INITIAL_HABITS = [
  { id: 1, name: "Meditación Matutina", category: "Bienestar", streak: 7, completed: true },
  { id: 2, name: "Leer 30 Minutos", category: "Aprendizaje", streak: 4, completed: false },
  { id: 3, name: "Ejercicio", category: "Salud", streak: 12, completed: true },
  { id: 4, name: "Escribir Diario", category: "Personal", streak: 3, completed: false },
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
    <div className="container mx-auto min-h-screen py-8 animate-fade-in font-labrada">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold font-londrina">Seguimiento de Hábitos</h1>
        <p className="text-muted-foreground">Rastrea tus hábitos diarios y construye rachas</p>
      </div>

      <div className="mb-8">
        <HabitStats />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold font-londrina">Hábitos de Hoy</h2>
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
          <h2 className="mb-4 text-2xl font-semibold font-londrina">Vista Mensual</h2>
          <HabitCalendar />
        </div>
      </div>
    </div>
  );
};

export default Index;
