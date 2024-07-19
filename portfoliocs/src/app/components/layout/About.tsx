import Summary from "@/app/static/Summary";
import Timeline from "@/app/static/Timeline";

function About() {
  return (
    <div className="bg-slate-800" id="About">
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <div className="flex justify-center items-center text-white">
        <div className="flex flex-row mobile:flex-col w-full mobile:p-5/100">
          <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
            <Summary />
          </div>
          <div className="desktop:flex w-1/2 mobile:w-full flex-col desktop:pl-10 desktop:pt-10">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
