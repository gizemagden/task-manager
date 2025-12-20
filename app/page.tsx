import DashboardCard from "@/components/dashboard/DashboardCard";
import { DownloadCloud, Newspaper, Projector } from "lucide-react";
import TasksTable from "@/components/tasks/TasksTable";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between md:flex-row gap-5 mb-5">
        <DashboardCard
          title="Task"
          count={100}
          icon={<Newspaper size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Projects"
          count={12}
          icon={<Projector size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Tasks"
          count={100}
          icon={<DownloadCloud size={72} className="text-slate-500" />}
        />
      </div>
      <TasksTable title="Recent tasks" />
    </>
  );
}
