
import { useState } from "react";
import { HabitCard } from "@/components/HabitCard";
import { HabitCalendar } from "@/components/HabitCalendar";
import { HabitStats } from "@/components/HabitStats";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Habit {
  id: number;
  name: string;
  category: string;
  streak: number;
  completed: boolean;
}

const INITIAL_HABITS = [
  { id: 1, name: "Meditación Matutina", category: "Bienestar", streak: 7, completed: true },
  { id: 2, name: "Leer 30 Minutos", category: "Aprendizaje", streak: 4, completed: false },
  { id: 3, name: "Ejercicio", category: "Salud", streak: 12, completed: true },
  { id: 4, name: "Escribir Diario", category: "Personal", streak: 3, completed: false },
];

const Index = () => {
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);
  const [showNewHabitForm, setShowNewHabitForm] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitCategory, setNewHabitCategory] = useState("");
  const { toast } = useToast();

  const toggleHabit = (id: number) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id === id) {
          const newCompleted = !habit.completed;
          return {
            ...habit,
            completed: newCompleted,
            streak: newCompleted ? habit.streak + 1 : Math.max(0, habit.streak - 1),
          };
        }
        return habit;
      })
    );
    toast({
      title: "Estado actualizado",
      description: "El estado del hábito ha sido actualizado exitosamente",
    });
  };

  const deleteHabit = (id: number) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
    toast({
      title: "Hábito eliminado",
      description: "El hábito ha sido eliminado exitosamente",
    });
  };

  const addNewHabit = () => {
    if (!newHabitName.trim() || !newHabitCategory.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    const newHabit: Habit = {
      id: Math.max(...habits.map((h) => h.id)) + 1,
      name: newHabitName,
      category: newHabitCategory,
      streak: 0,
      completed: false,
    };

    setHabits((prev) => [...prev, newHabit]);
    setNewHabitName("");
    setNewHabitCategory("");
    setShowNewHabitForm(false);
    toast({
      title: "Hábito creado",
      description: "El nuevo hábito ha sido creado exitosamente",
    });
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
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold font-londrina">Hábitos de Hoy</h2>
            <Button
              onClick={() => setShowNewHabitForm(!showNewHabitForm)}
              className="gap-2"
            >
              {showNewHabitForm ? <X size={20} /> : <Plus size={20} />}
              {showNewHabitForm ? "Cancelar" : "Nuevo Hábito"}
            </Button>
          </div>

          {showNewHabitForm && (
            <div className="mb-4 space-y-4 rounded-lg border p-4">
              <Input
                placeholder="Nombre del hábito"
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
              />
              <Input
                placeholder="Categoría"
                value={newHabitCategory}
                onChange={(e) => setNewHabitCategory(e.target.value)}
              />
              <Button onClick={addNewHabit} className="w-full">
                Crear Hábito
              </Button>
            </div>
          )}

          <div className="grid gap-4">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                name={habit.name}
                category={habit.category}
                streak={habit.streak}
                completed={habit.completed}
                onToggle={() => toggleHabit(habit.id)}
                onDelete={() => deleteHabit(habit.id)}
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
