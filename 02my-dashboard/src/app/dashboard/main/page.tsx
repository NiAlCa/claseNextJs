import { SimpleWidget, WidgetsGrid } from "@/components";

export const metadata = {
  title: "Admin dashbord",
  description: "Admin dashbord",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">informacion general</span>

    <WidgetsGrid/>
    </div>
  );
}
