import { Introduction } from "./components/Introduction";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex relative">
      <Sidebar />
      <div className="w-2/3 px-2 py-10 sm:w-full p-2 md:w-3/4">
        <Introduction />
      </div>
    </main>
  );
}
