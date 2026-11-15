import { DashboardView } from "@/components/dashboard/dashboard-view";
import { Header } from "@/components/layout/header";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <DashboardView />
    </div>
  );
}
