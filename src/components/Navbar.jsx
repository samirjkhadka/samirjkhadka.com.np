import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div>
        <img src="/images/logo.svg" alt="logo" className="" />
        <p className="font-bold">Samir J Khadka</p>
        <ul className="">
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p className="">{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul className="">
          {navIcons.map(({ id, img }) => (
            <li className="" key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time datetime="">{dayjs().format("ddd D MMM , H:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
