import { EmailBtn } from "./EmailBtn";

export const Introduction = () => {
  return (
    <section id="about" className="pt-48">
      <div className="w-full sm:w-3/4">
        <h1 className="text-3xl">Hi, I&apos;m Calvin!</h1>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          perferendis nesciunt culpa voluptatem eius magni deserunt velit quam
          tempora ut
        </p>
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          quisquam, nesciunt commodi sapiente minus esse quis officiis itaque
          iusto quibusdam.
        </p>
      </div>
      <EmailBtn />
    </section>
  );
};
