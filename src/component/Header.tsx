import React from 'react'
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <div className="container-fluid p-0">
            <div className="nav-bar">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? "active" : ""}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="about"
                            className={({ isActive }) => `${isActive ? "active" : ""}`}
                        >
                            About Us
                        </NavLink>
                    </li>


                    {/* {Menu.map((item: any, ind: any) => {
            return (
              <li key={ind}>
                <NavLink
                  to={`User/${item}`}
                  className={({ isActive }) => `${isActive ? "active" : ""}`}
                >
                  {item}
                </NavLink>
              </li>
            );
          })} */}
                </ul>
            </div>
        </div>
    )
}
