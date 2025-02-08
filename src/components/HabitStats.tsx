
import { Award, Flame, ListChecks } from "lucide-react";
import { Card } from "./ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="flex items-center gap-4 p-4 backdrop-blur-sm">
      <div className="rounded-full bg-primary/10 p-2 text-primary">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </Card>
  );
}

export function HabitStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard title="Current Streak" value="7 days" icon={<Flame />} />
      <StatCard title="Completed Habits" value="24" icon={<ListChecks />} />
      <StatCard title="Achievements" value="3" icon={<Award />} />
    </div>
  );
}
