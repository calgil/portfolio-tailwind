import { EmailBtn } from "./components/EmailBtn";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <main className="flex relative">
      <Sidebar />
      <div className="w-full px-8 pt-10 pb-20 sm:w-2/3 sm:px-2 md:w-3/4">
        <Introduction />
        <Projects />
        <Skills />
        <h3 id="contact" className="mt-40 text-3xl">
          Contact Me
        </h3>
        <EmailBtn />
      </div>
    </main>
  );
}
