"use client";
import { setName } from "@/redux/slicers/authSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import Router from "next/router";

import { useDispatch, useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.auth.name);
  const logout = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/logout`)
      .then(() => {
        Router.push("/");
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <Link href={"/"}>Store</Link>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
               {/*  <ul className="p-4">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul> */}
              </li>

            </ul>
          </div>
          <span className="btn btn-ghost text-xl">Black Snow</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Store</Link>
            </li>
            <li>
              <details>
                <summary>Products</summary>
                <ul className="py-2 w-max z-50">
                  <li>
                    <Link href={"/products"}>All Products</Link>
                  </li>
                </ul>
              </details>
            </li>

          </ul>
        </div>
        {name ? (
          <div className="navbar-end select-none">
            <details className="dropdown dropdown-end	">
              <summary className="btn m-1">{name}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <Link href={`/checkout`}>Checkout</Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      dispatch(setName(""), logout());
                    }}
                    className="btn btn-error"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </details>
          </div>
        ) : (
          <div className="navbar-end ">
            <Link href={"/auth"} className="btn">
              Log In
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
