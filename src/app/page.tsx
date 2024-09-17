import {
  Home,
  Expertise,
  Experience,
  Works,
} from "./components";

export default function Myportfolio() {
  return (
    <main className=" w-full max-w-[480px] lg:w-[1440px] lg:max-w-[1440px] flex flex-col items-center  ">
      <Home />
      <Expertise />
      <Works />
      <Experience />
    </main>
  );
}
