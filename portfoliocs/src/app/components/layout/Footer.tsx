import SocialMedia from "@/app/static/SocialMedia";

function Footer() {
  return (
    <div className="bg-slate-800">
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <footer className="flex flex-col items-center">
        <div className="pt-5">
          <SocialMedia size={35} />
        </div>
        <div className="flex text-white text-center p-5">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
