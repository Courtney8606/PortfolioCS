"use client";

import useScrollPos from "../../hooks/useScrollPos";
import MenuItem from "../menu/elements/MenuItem";

function Navbar() {
  const isAtTop = useScrollPos();
  return (
    <div
      className={`mobile:hidden sticky -mt-14 top-0 z-50 ${
        isAtTop
          ? "opacity-100"
          : "opacity-0 hover:opacity-100 transition-opacity duration-500"
      } flex justify-end items-center h-14 w-full bg-gradient-to-r from-transparent to-black text-white`}
    >
      <div className="flex justify-around text-1xl w-1/2 items-center">
        <MenuItem title={"About"} />
        <MenuItem title={"Projects"} />
      </div>
    </div>
  );
}

export default Navbar;
