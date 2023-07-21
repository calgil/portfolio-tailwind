import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex relative">
      <Sidebar />
      <div className="w-full px-8 py-10 sm:w-2/3 sm:px-2 md:w-3/4">
        <Introduction />
        <Projects />
      </div>
    </main>
  );
}
